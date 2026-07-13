import StudioEditWritingPage, {
  type StudioEditWritingPageProps,
} from "@/modules/studio/pages/studio-edit-writing-page";
import { generateStudioPageMetadata } from "@/modules/studio/utils/generate-studio-page-metadata";

export function generateMetadata() {
  return generateStudioPageMetadata();
}

export default function StudioEditWritingRoute(
  props: StudioEditWritingPageProps,
) {
  return <StudioEditWritingPage {...props} />;
}
