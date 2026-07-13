import WritingPage, {
  generateWritingPageMetadata,
} from "@/modules/writing/pages/writing-page";

export function generateMetadata() {
  return generateWritingPageMetadata();
}

export default function WritingRoute() {
  return <WritingPage />;
}
