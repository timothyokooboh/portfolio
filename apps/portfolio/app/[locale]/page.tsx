import HomePage, {
  generateHomePageMetadata,
} from "@/modules/home/pages/home-page";

export function generateMetadata() {
  return generateHomePageMetadata();
}

export default function HomeRoute() {
  return <HomePage />;
}
