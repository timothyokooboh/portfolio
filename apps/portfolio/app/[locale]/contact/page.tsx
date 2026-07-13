import ContactPage, {
  generateContactPageMetadata,
} from "@/modules/contact/pages/contact-page";

export function generateMetadata() {
  return generateContactPageMetadata();
}

export default function ContactRoute() {
  return <ContactPage />;
}
