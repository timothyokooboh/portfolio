import type { DesignProjectSlug } from "@/modules/designs/constants/designs";

export interface DesignProjectPrinciple {
  description: string;
  title: string;
}

export interface DesignProjectTeaser {
  detailRoute: string;
  figmaHref: string;
  hero: {
    description: string;
    eyebrow: string;
    title: string;
  };
  imageSrc: string;
  label: string;
  slug: DesignProjectSlug;
  summary: string;
  tileCaption: string;
}

export interface DesignProjectDetail extends DesignProjectTeaser {
  gallery: {
    caption: string;
    title: string;
  };
  meta: {
    figmaFrame: string;
    status: string;
    tool: string;
    type: string;
  };
  overview: string[];
  principles: DesignProjectPrinciple[];
  reflection: string;
}
