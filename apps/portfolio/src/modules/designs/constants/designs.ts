export const DESIGN_PROJECT_SLUGS = [
  "portfolio-home-direction",
  "selected-work-archive",
  "case-study-storytelling",
  "writing-journal-surface",
  "design-showcase-gallery",
] as const;

export type DesignProjectSlug = (typeof DESIGN_PROJECT_SLUGS)[number];

export const DESIGN_PROJECT_DETAIL_LINKS: Record<DesignProjectSlug, string> = {
  "portfolio-home-direction": "/designs/portfolio-home-direction",
  "selected-work-archive": "/designs/selected-work-archive",
  "case-study-storytelling": "/designs/case-study-storytelling",
  "writing-journal-surface": "/designs/writing-journal-surface",
  "design-showcase-gallery": "/designs/design-showcase-gallery",
};

export const DESIGN_PROJECT_IMAGE_SOURCES: Record<DesignProjectSlug, string> = {
  "portfolio-home-direction": "/images/designs/portfolio-home-direction.svg",
  "selected-work-archive": "/images/designs/selected-work-archive.svg",
  "case-study-storytelling": "/images/designs/case-study-storytelling.svg",
  "writing-journal-surface": "/images/designs/writing-journal-surface.svg",
  "design-showcase-gallery": "/images/designs/design-showcase-gallery.svg",
};

export const DESIGN_PROJECT_FIGMA_LINKS: Record<DesignProjectSlug, string> = {
  "portfolio-home-direction":
    "https://www.figma.com/design/m7d0AzriCQKsnirKbfXbzH/New-Portfolio?node-id=1-2&t=idb5yvGsGorLrQXw-4",
  "selected-work-archive":
    "https://www.figma.com/design/m7d0AzriCQKsnirKbfXbzH/New-Portfolio?node-id=1-223&t=idb5yvGsGorLrQXw-4",
  "case-study-storytelling":
    "https://www.figma.com/design/m7d0AzriCQKsnirKbfXbzH/New-Portfolio?node-id=2-2&t=idb5yvGsGorLrQXw-4",
  "writing-journal-surface":
    "https://www.figma.com/design/m7d0AzriCQKsnirKbfXbzH/New-Portfolio?node-id=2-169&t=idb5yvGsGorLrQXw-4",
  "design-showcase-gallery":
    "https://www.figma.com/design/m7d0AzriCQKsnirKbfXbzH/New-Portfolio?node-id=2-345&t=idb5yvGsGorLrQXw-4",
};

export const HOME_DESIGN_PREVIEW_SLUGS = [
  "portfolio-home-direction",
  "selected-work-archive",
  "case-study-storytelling",
  "writing-journal-surface",
] as const satisfies ReadonlyArray<DesignProjectSlug>;
