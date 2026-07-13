import StudioNewWritingPage from "@/modules/studio/pages/studio-new-writing-page";
import { generateStudioPageMetadata } from "@/modules/studio/utils/generate-studio-page-metadata";

export function generateMetadata() {
  return generateStudioPageMetadata();
}

export default function StudioNewWritingRoute() {
  return <StudioNewWritingPage />;
}
