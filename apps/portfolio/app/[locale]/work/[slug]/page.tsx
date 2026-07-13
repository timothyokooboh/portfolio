import {
  default as WorkDetailPage,
  generateWorkDetailMetadata,
  generateWorkDetailStaticParams,
  type WorkDetailPageProps,
} from "@/modules/work/pages/work-detail-page";

export function generateStaticParams() {
  return generateWorkDetailStaticParams();
}

export function generateMetadata(props: WorkDetailPageProps) {
  return generateWorkDetailMetadata(props);
}

export default function WorkDetailRoute(props: WorkDetailPageProps) {
  return <WorkDetailPage {...props} />;
}
