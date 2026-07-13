import {
  default as WritingArticlePage,
  generateWritingArticleMetadata,
  generateWritingArticleStaticParams,
  type WritingArticlePageProps,
} from "@/modules/writing/pages/writing-article-page";

export function generateStaticParams() {
  return generateWritingArticleStaticParams();
}

export function generateMetadata(props: WritingArticlePageProps) {
  return generateWritingArticleMetadata(props);
}

export default function WritingArticleRoute(props: WritingArticlePageProps) {
  return <WritingArticlePage {...props} />;
}
