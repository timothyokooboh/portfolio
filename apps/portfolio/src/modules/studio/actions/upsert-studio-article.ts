"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { PAGE_LINKS } from "@/constants/routes";
import {
  STUDIO_EDITOR_ACTION_INTENTS,
  WRITING_ARTICLE_STATUS,
  WRITING_ROUTE_PATHS,
  type StudioEditorActionIntent,
} from "@/modules/writing/constants/writing";
import {
  getAllWritingArticles,
  getWritingArticleBySlug,
  upsertWritingArticleFile,
} from "@/modules/writing/server/writing-content";
import type { StudioEditorActionState, WritingArticle } from "@/modules/writing/types/writing";
import { formatWritingPublishedOn } from "@/modules/writing/utils/format-writing-published-on";
import { getWritingArticleEyebrow } from "@/modules/writing/utils/get-writing-article-eyebrow";
import {
  getStudioWritingEditPath,
  getWritingArticlePath,
} from "@/modules/writing/utils/get-writing-content";
import { normalizeWritingSlug } from "@/modules/writing/utils/normalize-writing-slug";
import { requireStudioSession } from "@/modules/studio/utils/studio-auth";

const DRAFTING_PUBLISHED_ON_LABEL = "Drafting";

async function upsertStudioArticleAction(
  _previousState: StudioEditorActionState,
  formData: FormData,
): Promise<StudioEditorActionState> {
  await requireStudioSession();

  const title = getTrimmedFormValue(formData, "title");
  const providedSlug = getTrimmedFormValue(formData, "slug");
  const description = getTrimmedFormValue(formData, "description");
  const summary = getTrimmedFormValue(formData, "summary");
  const category = getTrimmedFormValue(formData, "category");
  const readTime = getTrimmedFormValue(formData, "readTime");
  const body = getTrimmedFormValue(formData, "body");
  const previousSlug = getOptionalTrimmedFormValue(formData, "previousSlug");
  const normalizedSlug = normalizeWritingSlug(providedSlug);
  const intent = getIntent(formData);
  const requestedStatus = getRequestedStatus(intent);
  const fieldErrorKeys = createFieldErrorKeys({
    body,
    category,
    description,
    normalizedSlug,
    readTime,
    summary,
    title,
  });

  if (Object.keys(fieldErrorKeys).length > 0) {
    return {
      fieldErrorKeys,
      formErrorKey: "validationError",
    };
  }

  const existingArticle = previousSlug
    ? await getWritingArticleBySlug(previousSlug)
    : null;
  const slugOwner = await getWritingArticleBySlug(normalizedSlug);

  if (slugOwner && slugOwner.slug !== previousSlug) {
    return {
      fieldErrorKeys: {
        slug: "slugTaken",
      },
      formErrorKey: "validationError",
    };
  }

  const articleCollection = await getAllWritingArticles();
  const nextOrder = getNextOrder({
    articleCollection,
    existingArticle,
    slugOwner,
  });
  const nextPublishedOn = getNextPublishedOn({
    existingArticle,
    requestedStatus,
    slugOwner,
  });
  const nextArticle = {
    body,
    featuredOnHome: existingArticle?.featuredOnHome ?? slugOwner?.featuredOnHome ?? false,
    headings: [],
    hero: {
      description,
      eyebrow: getWritingArticleEyebrow({
        category,
        status: requestedStatus,
      }),
      title,
    },
    meta: {
      category,
      publishedOn: nextPublishedOn,
      readTime,
      relatedProject:
        existingArticle?.meta.relatedProject ?? slugOwner?.meta.relatedProject,
    },
    order: nextOrder,
    slug: normalizedSlug,
    sourcePath: "",
    status: requestedStatus,
    summary,
  } satisfies WritingArticle;

  await upsertWritingArticleFile({
    article: nextArticle,
    previousSlug,
  });

  revalidateWritingPaths({
    nextSlug: normalizedSlug,
    previousSlug,
  });

  redirect(getStudioWritingEditPath(normalizedSlug));
}

function createFieldErrorKeys({
  body,
  category,
  description,
  normalizedSlug,
  readTime,
  summary,
  title,
}: {
  body: string;
  category: string;
  description: string;
  normalizedSlug: string;
  readTime: string;
  summary: string;
  title: string;
}) {
  const fieldErrorKeys: StudioEditorActionState["fieldErrorKeys"] = {};

  if (!title) {
    fieldErrorKeys.title = "required";
  }

  if (!normalizedSlug) {
    fieldErrorKeys.slug = "required";
  }

  if (!description) {
    fieldErrorKeys.description = "required";
  }

  if (!summary) {
    fieldErrorKeys.summary = "required";
  }

  if (!category) {
    fieldErrorKeys.category = "required";
  }

  if (!readTime) {
    fieldErrorKeys.readTime = "required";
  }

  if (!body) {
    fieldErrorKeys.body = "required";
  }

  return fieldErrorKeys;
}

function getNextOrder({
  articleCollection,
  existingArticle,
  slugOwner,
}: {
  articleCollection: WritingArticle[];
  existingArticle: WritingArticle | null;
  slugOwner: WritingArticle | null;
}) {
  if (existingArticle) {
    return existingArticle.order;
  }

  if (slugOwner) {
    return slugOwner.order;
  }

  const highestOrder = articleCollection.reduce((currentHighestOrder, article) => {
    if (article.order > currentHighestOrder) {
      return article.order;
    }

    return currentHighestOrder;
  }, 0);

  return highestOrder + 1;
}

function getNextPublishedOn({
  existingArticle,
  requestedStatus,
  slugOwner,
}: {
  existingArticle: WritingArticle | null;
  requestedStatus: WritingArticle["status"];
  slugOwner: WritingArticle | null;
}) {
  if (requestedStatus === WRITING_ARTICLE_STATUS.draft) {
    return DRAFTING_PUBLISHED_ON_LABEL;
  }

  const currentPublishedOn =
    existingArticle?.meta.publishedOn ?? slugOwner?.meta.publishedOn ?? null;

  if (currentPublishedOn && currentPublishedOn !== DRAFTING_PUBLISHED_ON_LABEL) {
    return currentPublishedOn;
  }

  return formatWritingPublishedOn(new Date());
}

function getTrimmedFormValue(formData: FormData, key: string) {
  const rawValue = formData.get(key);

  if (typeof rawValue !== "string") {
    return "";
  }

  return rawValue.trim();
}

function getOptionalTrimmedFormValue(formData: FormData, key: string) {
  const value = getTrimmedFormValue(formData, key);

  return value || null;
}

function getIntent(formData: FormData) {
  const rawIntent = formData.get("intent");

  if (
    rawIntent === STUDIO_EDITOR_ACTION_INTENTS.publish ||
    rawIntent === STUDIO_EDITOR_ACTION_INTENTS.saveDraft
  ) {
    return rawIntent;
  }

  return STUDIO_EDITOR_ACTION_INTENTS.saveDraft;
}

function getRequestedStatus(intent: StudioEditorActionIntent) {
  if (intent === STUDIO_EDITOR_ACTION_INTENTS.publish) {
    return WRITING_ARTICLE_STATUS.published;
  }

  return WRITING_ARTICLE_STATUS.draft;
}

function revalidateWritingPaths({
  nextSlug,
  previousSlug,
}: {
  nextSlug: string;
  previousSlug?: string | null;
}) {
  const paths = new Set<string>([
    PAGE_LINKS.home,
    WRITING_ROUTE_PATHS.index,
    WRITING_ROUTE_PATHS.studioIndex,
    WRITING_ROUTE_PATHS.studioNew,
    getStudioWritingEditPath(nextSlug),
    getWritingArticlePath(nextSlug),
  ]);

  if (previousSlug) {
    paths.add(getWritingArticlePath(previousSlug));
    paths.add(getStudioWritingEditPath(previousSlug));
  }

  paths.forEach((routePath) => {
    revalidatePath(routePath);
  });
}

export { upsertStudioArticleAction };
