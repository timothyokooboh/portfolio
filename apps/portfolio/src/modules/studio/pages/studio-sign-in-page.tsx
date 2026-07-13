import { useTranslations } from "next-intl";

import type { StudioEnvironmentState } from "@/modules/writing/types/writing";
import { redirectAuthenticatedStudioUser } from "@/modules/studio/utils/studio-auth";

import { StudioSetupState } from "../components/studio-setup-state";
import { StudioShell } from "../components/studio-shell";

interface StudioSignInPageProps {
  envState: StudioEnvironmentState;
}

function StudioSignInPageContent({ envState }: StudioSignInPageProps) {
  const shell = useTranslations("studio.shell");

  return (
    <StudioShell
      description={shell("description")}
      mainId="studio-sign-in-page"
      title={shell("title")}
    >
      <StudioSetupState contentDirectory={envState.contentDirectory} />
    </StudioShell>
  );
}

async function StudioSignInPage() {
  await redirectAuthenticatedStudioUser();

  return (
    <StudioSignInPageContent
      envState={{ contentDirectory: "", isLocalMode: false }}
    />
  );
}

export { StudioSignInPageContent };
export default StudioSignInPage;
