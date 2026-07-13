export const WRITING_ARTICLE_STATUS = {
  draft: "draft",
  published: "published",
} as const;

export const STUDIO_EDITOR_ACTION_INTENTS = {
  publish: "publish",
  saveDraft: "save-draft",
} as const;

export const WRITING_DEMO_IDS = [
  "feedback-surface",
  "component-preview",
] as const;

export const HOME_WRITING_PREVIEW_LIMIT = 2;

export const WRITING_ROUTE_PATHS = {
  index: "/writing",
  studioIndex: "/studio/writing",
  studioNew: "/studio/writing/new",
  studioSignIn: "/studio/sign-in",
} as const;

export const STUDIO_LOCAL_CONTENT_DIRECTORY = "apps/portfolio/content/writing";

export type WritingArticleStatus =
  (typeof WRITING_ARTICLE_STATUS)[keyof typeof WRITING_ARTICLE_STATUS];
export type WritingDemoId = (typeof WRITING_DEMO_IDS)[number];
export type StudioEditorActionIntent =
  (typeof STUDIO_EDITOR_ACTION_INTENTS)[keyof typeof STUDIO_EDITOR_ACTION_INTENTS];
