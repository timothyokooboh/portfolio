export const PROJECT_KEYS = ["seamkit", "olanna", "myfastmeds", "vbox"] as const;

export type ProjectKey = (typeof PROJECT_KEYS)[number];

export const PROJECT_IMAGE_SOURCES: Record<ProjectKey, string> = {
  seamkit: "/images/projects/seamkit-ui/listing-cover.png",
  olanna: "/images/projects/olanna/listing-cover.png",
  myfastmeds: "/images/projects/myfastmeds/listing-cover.png",
  vbox: "/images/projects/vbox/listing-cover.png",
};

export const PROJECT_IMAGE_DIMENSIONS: Record<
  ProjectKey,
  { width: number; height: number }
> = {
  seamkit: { width: 1920, height: 1200 },
  olanna: { width: 1920, height: 1200 },
  myfastmeds: { width: 1920, height: 1200 },
  vbox: { width: 1920, height: 1200 },
};
