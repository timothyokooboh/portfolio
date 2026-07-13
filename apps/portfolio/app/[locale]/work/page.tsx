import WorkPage, {
  generateWorkPageMetadata,
} from "@/modules/work/pages/work-page";

export function generateMetadata() {
  return generateWorkPageMetadata();
}

export default function WorkRoute() {
  return <WorkPage />;
}
