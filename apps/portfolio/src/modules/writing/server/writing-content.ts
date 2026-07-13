import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import {
  HOME_WRITING_PREVIEW_LIMIT,
  WRITING_ARTICLE_STATUS,
  type WritingArticleStatus,
} from "@/modules/writing/constants/writing";
import type { WritingArticle } from "@/modules/writing/types/writing";

const FRONTMATTER_DELIMITER = "---";
const FRONTMATTER_SEPARATOR = ":";
const MARKDOWN_HEADING_PREFIX = "## ";
const MDX_FILE_EXTENSION = ".mdx";
const NODE_ERROR_CODES = {
  missingPath: "ENOENT",
} as const;
const MODULE_FILE_PATH = import.meta.url.startsWith("file:")
  ? fileURLToPath(import.meta.url)
  : import.meta.url;
const WRITING_CONTENT_DIRECTORY_PATH = path.resolve(
  path.dirname(MODULE_FILE_PATH),
  "../../../../content/writing",
);

interface ParsedFrontmatter {
  body: string;
  data: Record<string, string | boolean | number>;
}

interface UpsertWritingArticleFileParams {
  article: WritingArticle;
  previousSlug?: string | null;
}

interface WritingFrontmatter {
  category: string;
  description: string;
  eyebrow: string;
  featuredOnHome: boolean;
  order: number;
  publishedOn: string;
  readTime: string;
  relatedProject?: string;
  status: WritingArticleStatus;
  summary: string;
  title: string;
}

async function getAllWritingArticles() {
  const directoryPath = getWritingContentDirectoryPath();
  let directoryEntries: Array<{
    isFile: () => boolean;
    name: string;
  }>;

  try {
    directoryEntries = await fs.readdir(directoryPath, { withFileTypes: true });
  } catch (error) {
    if (isMissingPathError(error)) {
      return [];
    }

    throw error;
  }

  const mdxFilenames = directoryEntries
    .filter((entry) => entry.isFile() && entry.name.endsWith(MDX_FILE_EXTENSION))
    .map((entry) => entry.name)
    .sort();

  const articles = await Promise.all(
    mdxFilenames.map(async (filename) => {
      const filePath = path.join(directoryPath, filename);
      const fileContent = await fs.readFile(filePath, "utf8");
      const slug = filename.replace(new RegExp(`${MDX_FILE_EXTENSION}$`), "");

      return createWritingArticleFromFile({
        fileContent,
        filePath,
        slug,
      });
    }),
  );

  return articles.toSorted((firstArticle, secondArticle) => firstArticle.order - secondArticle.order);
}

async function getPublishedWritingArticles() {
  const articles = await getAllWritingArticles();

  return articles.filter((article) => article.status === WRITING_ARTICLE_STATUS.published);
}

async function getDraftWritingArticles() {
  const articles = await getAllWritingArticles();

  return articles.filter((article) => article.status === WRITING_ARTICLE_STATUS.draft);
}

async function getHomeWritingPreviewArticles() {
  const articles = await getPublishedWritingArticles();

  return articles
    .toSorted((firstArticle, secondArticle) => secondArticle.order - firstArticle.order)
    .slice(0, HOME_WRITING_PREVIEW_LIMIT);
}

async function getWritingArticleBySlug(slug: string) {
  const articles = await getAllWritingArticles();

  return articles.find((article) => article.slug === slug) ?? null;
}

async function getNextWritingArticle(slug: string) {
  const publishedArticles = await getPublishedWritingArticles();
  const currentIndex = publishedArticles.findIndex((article) => article.slug === slug);

  if (currentIndex === -1 || publishedArticles.length <= 1) {
    return null;
  }

  return publishedArticles[currentIndex + 1] ?? publishedArticles[0] ?? null;
}

async function upsertWritingArticleFile({
  article,
  previousSlug,
}: UpsertWritingArticleFileParams) {
  const filePath = getWritingArticleFilePath(article.slug);
  const previousFilePath = getPreviousWritingArticleFilePath({
    nextSlug: article.slug,
    previousSlug,
  });
  const serializedFrontmatter = serializeFrontmatter({
    category: article.meta.category,
    description: article.hero.description,
    eyebrow: article.hero.eyebrow,
    featuredOnHome: article.featuredOnHome,
    order: article.order,
    publishedOn: article.meta.publishedOn,
    readTime: article.meta.readTime,
    relatedProject: article.meta.relatedProject,
    status: article.status,
    summary: article.summary,
    title: article.hero.title,
  });
  const normalizedBody = article.body.trim();
  const fileContent = `${serializedFrontmatter}\n\n${normalizedBody}\n`;

  await fs.mkdir(getWritingContentDirectoryPath(), { recursive: true });

  if (previousFilePath) {
    await deleteFileIfItExists(previousFilePath);
  }

  await fs.writeFile(filePath, fileContent, "utf8");

  return filePath;
}

function getWritingHeadings(body: string) {
  return body
    .split(/\r?\n/)
    .filter((line) => line.startsWith(MARKDOWN_HEADING_PREFIX))
    .map((line) => line.slice(MARKDOWN_HEADING_PREFIX.length).trim())
    .filter(Boolean);
}

function getWritingArticleFilePath(slug: string) {
  return path.join(getWritingContentDirectoryPath(), `${slug}${MDX_FILE_EXTENSION}`);
}

function getWritingContentDirectoryPath() {
  return WRITING_CONTENT_DIRECTORY_PATH;
}

function getPreviousWritingArticleFilePath({
  nextSlug,
  previousSlug,
}: {
  nextSlug: string;
  previousSlug?: string | null;
}) {
  if (!previousSlug || previousSlug === nextSlug) {
    return null;
  }

  return getWritingArticleFilePath(previousSlug);
}

function createWritingArticleFromFile({
  fileContent,
  filePath,
  slug,
}: {
  fileContent: string;
  filePath: string;
  slug: string;
}) {
  const parsedFile = parseFrontmatter(fileContent);
  const frontmatter = normalizeWritingFrontmatter(parsedFile.data, slug);

  return {
    body: parsedFile.body,
    featuredOnHome: frontmatter.featuredOnHome,
    headings: getWritingHeadings(parsedFile.body),
    hero: {
      description: frontmatter.description,
      eyebrow: frontmatter.eyebrow,
      title: frontmatter.title,
    },
    meta: {
      category: frontmatter.category,
      publishedOn: frontmatter.publishedOn,
      readTime: frontmatter.readTime,
      relatedProject: frontmatter.relatedProject,
    },
    order: frontmatter.order,
    slug,
    sourcePath: filePath,
    status: frontmatter.status,
    summary: frontmatter.summary,
  } satisfies WritingArticle;
}

function normalizeWritingFrontmatter(
  rawData: Record<string, string | boolean | number>,
  slug: string,
): WritingFrontmatter {
  const category = expectStringField(rawData, "category", slug);
  const description = expectStringField(rawData, "description", slug);
  const eyebrow = expectStringField(rawData, "eyebrow", slug);
  const publishedOn = expectStringField(rawData, "publishedOn", slug);
  const readTime = expectStringField(rawData, "readTime", slug);
  const relatedProject = getOptionalStringField(rawData, "relatedProject");
  const status = expectStatusField(rawData, "status", slug);
  const summary = expectStringField(rawData, "summary", slug);
  const title = expectStringField(rawData, "title", slug);
  const featuredOnHome = expectBooleanField(rawData, "featuredOnHome", slug);
  const order = expectNumberField(rawData, "order", slug);

  return {
    category,
    description,
    eyebrow,
    featuredOnHome,
    order,
    publishedOn,
    readTime,
    relatedProject,
    status,
    summary,
    title,
  };
}

function parseFrontmatter(fileContent: string): ParsedFrontmatter {
  if (!fileContent.startsWith(`${FRONTMATTER_DELIMITER}\n`)) {
    return {
      body: fileContent.trim(),
      data: {},
    };
  }

  const delimiterIndex = fileContent.indexOf(
    `\n${FRONTMATTER_DELIMITER}\n`,
    FRONTMATTER_DELIMITER.length + 1,
  );

  if (delimiterIndex === -1) {
    return {
      body: fileContent.trim(),
      data: {},
    };
  }

  const frontmatterBlock = fileContent
    .slice(FRONTMATTER_DELIMITER.length + 1, delimiterIndex)
    .trim();
  const body = fileContent
    .slice(delimiterIndex + (`\n${FRONTMATTER_DELIMITER}\n`).length)
    .trim();
  const data = Object.fromEntries(
    frontmatterBlock
      .split(/\r?\n/)
      .filter(Boolean)
      .map((line) => {
        const separatorIndex = line.indexOf(FRONTMATTER_SEPARATOR);

        if (separatorIndex === -1) {
          return [line.trim(), ""];
        }

        const key = line.slice(0, separatorIndex).trim();
        const rawValue = line.slice(separatorIndex + 1).trim();

        return [key, parseFrontmatterValue(rawValue)];
      }),
  );

  return {
    body,
    data,
  };
}

function parseFrontmatterValue(rawValue: string) {
  if (rawValue === "true") {
    return true;
  }

  if (rawValue === "false") {
    return false;
  }

  if (/^-?\d+$/.test(rawValue)) {
    return Number(rawValue);
  }

  if (
    (rawValue.startsWith("\"") && rawValue.endsWith("\"")) ||
    (rawValue.startsWith("'") && rawValue.endsWith("'"))
  ) {
    const normalizedValue = rawValue.startsWith("'")
      ? `"${rawValue.slice(1, -1).replace(/"/g, '\\"')}"`
      : rawValue;

    return JSON.parse(normalizedValue) as string;
  }

  return rawValue;
}

function serializeFrontmatter(frontmatter: WritingFrontmatter) {
  const lines = Object.entries(frontmatter)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => {
      if (typeof value === "string") {
        return `${key}: ${JSON.stringify(value)}`;
      }

      return `${key}: ${String(value)}`;
    });

  return `${FRONTMATTER_DELIMITER}\n${lines.join("\n")}\n${FRONTMATTER_DELIMITER}`;
}

function getOptionalStringField(
  data: Record<string, string | boolean | number>,
  key: keyof WritingFrontmatter,
) {
  const value = data[key];

  if (typeof value !== "string" || value.length === 0) {
    return undefined;
  }

  return value;
}

function expectStringField(
  data: Record<string, string | boolean | number>,
  key: keyof WritingFrontmatter,
  slug: string,
) {
  const value = data[key];

  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`Missing string frontmatter field "${key}" in ${slug}${MDX_FILE_EXTENSION}`);
  }

  return value;
}

function expectBooleanField(
  data: Record<string, string | boolean | number>,
  key: keyof WritingFrontmatter,
  slug: string,
) {
  const value = data[key];

  if (typeof value !== "boolean") {
    throw new Error(`Missing boolean frontmatter field "${key}" in ${slug}${MDX_FILE_EXTENSION}`);
  }

  return value;
}

function expectNumberField(
  data: Record<string, string | boolean | number>,
  key: keyof WritingFrontmatter,
  slug: string,
) {
  const value = data[key];

  if (typeof value !== "number" || Number.isNaN(value)) {
    throw new Error(`Missing numeric frontmatter field "${key}" in ${slug}${MDX_FILE_EXTENSION}`);
  }

  return value;
}

function expectStatusField(
  data: Record<string, string | boolean | number>,
  key: keyof WritingFrontmatter,
  slug: string,
) {
  const value = data[key];

  if (value !== WRITING_ARTICLE_STATUS.draft && value !== WRITING_ARTICLE_STATUS.published) {
    throw new Error(`Invalid status frontmatter field "${key}" in ${slug}${MDX_FILE_EXTENSION}`);
  }

  return value;
}

async function deleteFileIfItExists(filePath: string) {
  try {
    await fs.unlink(filePath);
  } catch (error) {
    if (isMissingPathError(error)) {
      return;
    }

    throw error;
  }
}

function isMissingPathError(error: unknown) {
  if (!error || typeof error !== "object") {
    return false;
  }

  return "code" in error && error.code === NODE_ERROR_CODES.missingPath;
}

export {
  getAllWritingArticles,
  getDraftWritingArticles,
  getHomeWritingPreviewArticles,
  getNextWritingArticle,
  getPublishedWritingArticles,
  getWritingArticleBySlug,
  getWritingArticleFilePath,
  getWritingContentDirectoryPath,
  getWritingHeadings,
  upsertWritingArticleFile,
};
