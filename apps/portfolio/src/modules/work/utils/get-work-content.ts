import { WORK_PROJECT_CODE_SNIPPETS } from "@/modules/work/constants/code-snippets";
import {
  LAB_PROJECT_SLUGS,
  PROFESSIONAL_PROJECT_SLUGS,
  WORK_PROJECT_GALLERY_ASSETS,
  WORK_PROJECT_DETAIL_LINKS,
  WORK_PROJECT_HERO_IMAGE_SOURCES,
  WORK_PROJECT_LINKS,
  WORK_PROJECT_SLUGS,
  WORK_PROJECT_TRANSLATION_KEYS,
  type WorkProjectSlug,
} from "@/modules/work/constants/work";
import type { AppMessages } from "@/types/messages";
import type {
  WorkProjectDetail,
  WorkProjectGalleryItem,
  WorkProjectTeaser,
} from "@/modules/work/types/work";

const MISSING_WORK_GALLERY_COPY_ERROR =
  "Missing work gallery copy for asset";

function getWorkProjectTeasers(messages: AppMessages) {
  return PROFESSIONAL_PROJECT_SLUGS.map((slug) => buildWorkProjectTeaser(messages, slug));
}

function getLabProjectTeasers(messages: AppMessages) {
  return LAB_PROJECT_SLUGS.map((slug) => buildWorkProjectTeaser(messages, slug));
}

function getWorkProjectDetail(messages: AppMessages, slug: WorkProjectSlug): WorkProjectDetail {
  const projectKey = WORK_PROJECT_TRANSLATION_KEYS[slug];
  const homeProject = messages.home.featuredWork.items[projectKey];
  const project = messages.projects[slug];

  return {
    challenge: project.challenge,
    detailRoute: WORK_PROJECT_DETAIL_LINKS[slug],
    gallery: {
      caption: project.implementation.galleryCaption,
      items: getWorkProjectGalleryItems(messages, slug),
      title: project.implementation.galleryTitle,
    },
    hero: project.hero,
    heroImage: {
      alt: project.hero.title,
      src: WORK_PROJECT_HERO_IMAGE_SOURCES[slug],
    },
    href: WORK_PROJECT_LINKS[slug],
    implementation: {
      code: WORK_PROJECT_CODE_SNIPPETS[slug],
      codeActionLabel: project.implementation.actionLabel,
      codeFilename: project.implementation.filename,
      description: project.implementation.description,
      title: project.implementation.title,
    },
    label: homeProject.label,
    metrics: project.metrics,
    overview: project.overview,
    reflection: project.implementation.reflection,
    role: project.role,
    slug,
    stack: project.stack,
    summary: homeProject.summary,
    timeline: project.timeline,
    title: homeProject.title,
  };
}

function getWorkProjectGalleryItems(
  messages: AppMessages,
  slug: WorkProjectSlug,
): WorkProjectGalleryItem[] {
  const project = messages.projects[slug];
  const galleryItemCopy = project.implementation.galleryItems as Record<
    string,
    Omit<WorkProjectGalleryItem, "src">
  >;

  return WORK_PROJECT_GALLERY_ASSETS[slug].map((asset) => {
    const itemCopy = galleryItemCopy[asset.id];

    if (!itemCopy) {
      throw new Error(`${MISSING_WORK_GALLERY_COPY_ERROR}: ${slug}/${asset.id}`);
    }

    return {
      alt: itemCopy.alt,
      caption: itemCopy.caption,
      src: asset.src,
      title: itemCopy.title,
    };
  });
}

function buildWorkProjectTeaser(messages: AppMessages, slug: WorkProjectSlug): WorkProjectTeaser {
  const projectKey = WORK_PROJECT_TRANSLATION_KEYS[slug];
  const homeProject = messages.home.featuredWork.items[projectKey];
  const project = messages.projects[slug];

  return {
    ctaLabel: messages.workPage.professional.cta,
    href: WORK_PROJECT_DETAIL_LINKS[slug],
    label: homeProject.label,
    metaItems: [
      { label: messages.workDetailPage.roleLabel, value: project.role },
      { label: messages.workDetailPage.timelineLabel, value: project.timeline },
      { label: messages.workDetailPage.stackLabel, value: project.stack },
    ],
    slug,
    summary: homeProject.summary,
    title: homeProject.title,
  };
}

function isWorkProjectSlug(value: string): value is WorkProjectSlug {
  return WORK_PROJECT_SLUGS.includes(value as WorkProjectSlug);
}

export {
  getLabProjectTeasers,
  getWorkProjectDetail,
  getWorkProjectGalleryItems,
  getWorkProjectTeasers,
  isWorkProjectSlug,
};
