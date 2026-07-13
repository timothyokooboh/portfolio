import {
  DESIGN_PROJECT_DETAIL_LINKS,
  DESIGN_PROJECT_FIGMA_LINKS,
  DESIGN_PROJECT_IMAGE_SOURCES,
  DESIGN_PROJECT_SLUGS,
  HOME_DESIGN_PREVIEW_SLUGS,
  type DesignProjectSlug,
} from "@/modules/designs/constants/designs";
import type { AppMessages } from "@/types/messages";
import type { DesignProjectDetail, DesignProjectTeaser } from "@/modules/designs/types/designs";

function getDesignProjectTeasers(messages: AppMessages) {
  return DESIGN_PROJECT_SLUGS.map((slug) => buildDesignProjectTeaser(messages, slug));
}

function getHomeDesignProjectTeasers(messages: AppMessages) {
  return HOME_DESIGN_PREVIEW_SLUGS.map((slug) => buildDesignProjectTeaser(messages, slug));
}

function getDesignProjectDetail(
  messages: AppMessages,
  slug: DesignProjectSlug,
): DesignProjectDetail {
  const project = messages.designProjects[slug];

  return {
    ...buildDesignProjectTeaser(messages, slug),
    gallery: project.gallery as DesignProjectDetail["gallery"],
    meta: project.meta as DesignProjectDetail["meta"],
    overview: project.overview as string[],
    principles: project.principles as DesignProjectDetail["principles"],
    reflection: project.reflection,
  };
}

function buildDesignProjectTeaser(
  messages: AppMessages,
  slug: DesignProjectSlug,
): DesignProjectTeaser {
  const project = messages.designProjects[slug];

  return {
    detailRoute: DESIGN_PROJECT_DETAIL_LINKS[slug],
    figmaHref: DESIGN_PROJECT_FIGMA_LINKS[slug],
    hero: project.hero as DesignProjectTeaser["hero"],
    imageSrc: DESIGN_PROJECT_IMAGE_SOURCES[slug],
    label: project.label,
    slug,
    summary: project.summary,
    tileCaption: project.cardCaption,
  };
}

function isDesignProjectSlug(value: string): value is DesignProjectSlug {
  return DESIGN_PROJECT_SLUGS.includes(value as DesignProjectSlug);
}

export {
  getDesignProjectDetail,
  getDesignProjectTeasers,
  getHomeDesignProjectTeasers,
  isDesignProjectSlug,
};
