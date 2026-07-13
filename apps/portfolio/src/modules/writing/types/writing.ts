import type { WritingArticleStatus } from "@/modules/writing/constants/writing";

interface WritingArticle {
  body: string;
  featuredOnHome: boolean;
  headings: string[];
  hero: {
    description: string;
    eyebrow: string;
    title: string;
  };
  meta: {
    category: string;
    publishedOn: string;
    readTime: string;
    relatedProject?: string;
  };
  order: number;
  slug: string;
  sourcePath: string;
  status: WritingArticleStatus;
  summary: string;
}

type StudioEditorFieldName =
  | "body"
  | "category"
  | "description"
  | "readTime"
  | "slug"
  | "summary"
  | "title";

interface StudioEnvironmentState {
  contentDirectory: string;
  isLocalMode: boolean;
}

interface StudioEditorActionState {
  fieldErrorKeys: Partial<Record<StudioEditorFieldName, string>>;
  formErrorKey: string | null;
}

export type {
  StudioEditorActionState,
  StudioEnvironmentState,
  StudioEditorFieldName,
  WritingArticle,
};
