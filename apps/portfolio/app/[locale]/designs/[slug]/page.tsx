import {
  default as DesignDetailPage,
  generateDesignDetailMetadata,
  generateDesignDetailStaticParams,
  type DesignDetailPageProps,
} from "@/modules/designs/pages/design-detail-page";

export function generateStaticParams() {
  return generateDesignDetailStaticParams();
}

export function generateMetadata(props: DesignDetailPageProps) {
  return generateDesignDetailMetadata(props);
}

export default function DesignDetailRoute(props: DesignDetailPageProps) {
  return <DesignDetailPage {...props} />;
}
