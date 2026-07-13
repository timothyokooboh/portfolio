import { StudioEditorPage } from "@/modules/studio/components/studio-editor-page";
import { requireStudioSession } from "@/modules/studio/utils/studio-auth";
import { getWritingArticleBySlug } from "@/modules/writing/server/writing-content";

interface StudioEditWritingPageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function StudioEditWritingPage({
  params,
}: StudioEditWritingPageProps) {
  const { slug } = await params;
  const accessState = await requireStudioSession();
  const article = await getWritingArticleBySlug(slug);

  return (
    <StudioEditorPage
      article={article}
      contentDirectory={accessState.envState.contentDirectory}
      mode="edit"
    />
  );
}

export type { StudioEditWritingPageProps };
export default StudioEditWritingPage;
