import StudioSignInPage from "@/modules/studio/pages/studio-sign-in-page";
import { generateStudioPageMetadata } from "@/modules/studio/utils/generate-studio-page-metadata";

export function generateMetadata() {
  return generateStudioPageMetadata();
}

export default function StudioSignInRoute() {
  return <StudioSignInPage />;
}
