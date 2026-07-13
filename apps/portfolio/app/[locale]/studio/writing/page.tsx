import StudioWritingPage from "@/modules/studio/pages/studio-writing-page";
import { generateStudioPageMetadata } from "@/modules/studio/utils/generate-studio-page-metadata";

export function generateMetadata() {
  return generateStudioPageMetadata();
}

export default function StudioWritingRoute() {
  return <StudioWritingPage />;
}
