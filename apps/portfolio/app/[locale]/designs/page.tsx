import DesignsPage, {
  generateDesignsPageMetadata,
} from "@/modules/designs/pages/designs-page";

export function generateMetadata() {
  return generateDesignsPageMetadata();
}

export default function DesignsRoute() {
  return <DesignsPage />;
}
