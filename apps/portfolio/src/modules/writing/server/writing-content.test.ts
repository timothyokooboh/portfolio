import { describe, expect, it } from "vitest";

import {
  getHomeWritingPreviewArticles,
  getNextWritingArticle,
  getPublishedWritingArticles,
  getWritingContentDirectoryPath,
} from "./writing-content";

describe("writing-content", () => {
  it("reads published articles and extracts headings from local MDX files", async () => {
    const articles = await getPublishedWritingArticles();
    const compositionArticle = articles.find(
      (article) => article.slug === "mastering-component-composition-in-vue",
    );

    expect(compositionArticle?.headings).toContain(
      "Understanding component composition",
    );
    expect(compositionArticle?.body).toContain(
      "![A tabs component broken down into multiple smaller components]",
    );
  });

  it("builds the home preview from the latest published articles", async () => {
    const previewArticles = await getHomeWritingPreviewArticles();

    expect(previewArticles).toHaveLength(1);
    expect(previewArticles[0]?.slug).toBe(
      "mastering-component-composition-in-vue",
    );
    expect(previewArticles.every((article) => article.status === "published")).toBe(true);
  });

  it("does not recommend the current article when it is the only published item", async () => {
    const nextArticle = await getNextWritingArticle(
      "mastering-component-composition-in-vue",
    );

    expect(nextArticle).toBeNull();
  });

  it("resolves the local MDX content directory without duplicating the portfolio path", () => {
    const directoryPath = getWritingContentDirectoryPath();

    expect(directoryPath.endsWith("/apps/portfolio/content/writing")).toBe(true);
    expect(directoryPath.includes("/apps/portfolio/apps/portfolio/")).toBe(false);
  });
});
