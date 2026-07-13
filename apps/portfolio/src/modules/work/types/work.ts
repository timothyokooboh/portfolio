import type { WorkProjectSlug } from "@/modules/work/constants/work";

export interface WorkProjectTeaser {
  ctaLabel: string;
  href?: string;
  label: string;
  metaItems: Array<{
    label: string;
    value: string;
  }>;
  slug: WorkProjectSlug;
  summary: string;
  title: string;
}

export interface WorkProjectGalleryItem {
  alt: string;
  caption: string;
  src: string;
  title: string;
}

export interface WorkProjectDetail {
  challenge: {
    description: string;
    title: string;
    points: Array<{
      description: string;
      title: string;
    }>;
  };
  detailRoute: string;
  gallery: {
    caption: string;
    items: WorkProjectGalleryItem[];
    title: string;
  };
  hero: {
    description: string;
    eyebrow: string;
    title: string;
  };
  heroImage: {
    alt: string;
    src: string;
  };
  href?: string;
  implementation: {
    code: string;
    codeActionLabel: string;
    codeFilename: string;
    description: string;
    title: string;
  };
  label: string;
  metrics: string[];
  overview: string[];
  reflection: string;
  role: string;
  slug: WorkProjectSlug;
  stack: string;
  summary: string;
  timeline: string;
  title: string;
}
