import { StudioEditorPage } from "@/modules/studio/components/studio-editor-page";
import { requireStudioSession } from "@/modules/studio/utils/studio-auth";

async function StudioNewWritingPage() {
  const accessState = await requireStudioSession();

  return (
    <StudioEditorPage
      article={null}
      contentDirectory={accessState.envState.contentDirectory}
      mode="new"
    />
  );
}

export default StudioNewWritingPage;
