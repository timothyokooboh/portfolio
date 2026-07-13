import type { ProjectKey } from "./project-media";

export const WORK_PROJECT_SLUGS = [
  "seamkit-ui",
  "olanna",
  "myfastmeds",
  "vbox",
] as const;

export type WorkProjectSlug = (typeof WORK_PROJECT_SLUGS)[number];

export const WORK_PROJECT_TRANSLATION_KEYS: Record<WorkProjectSlug, ProjectKey> = {
  "seamkit-ui": "seamkit",
  olanna: "olanna",
  myfastmeds: "myfastmeds",
  vbox: "vbox",
};

export const WORK_PROJECT_LINKS: Partial<Record<WorkProjectSlug, string>> = {
  "seamkit-ui": "https://seamkit.netlify.app/",
  olanna: "https://olanna-dashboard.vercel.app",
  vbox: "https://veebox.xyz/",
};

export const WORK_PROJECT_DETAIL_LINKS = {
  "seamkit-ui": "/work/seamkit-ui",
  olanna: "/work/olanna",
  myfastmeds: "/work/myfastmeds",
  vbox: "/work/vbox",
} as const;

export const PROFESSIONAL_PROJECT_SLUGS = [
  "seamkit-ui",
  "olanna",
  "myfastmeds",
] as const;

export const LAB_PROJECT_SLUGS = ["vbox"] as const;

interface WorkProjectGalleryAsset {
  id: string;
  src: string;
}

export const WORK_PROJECT_HERO_IMAGE_SOURCES: Record<WorkProjectSlug, string> = {
  "seamkit-ui": "/images/projects/seamkit-ui/accessibility.png",
  olanna: "/images/projects/olanna/inbox-thread.png",
  myfastmeds: "/images/projects/myfastmeds/cart.png",
  vbox: "/images/projects/vbox/style-props.png",
};

export const WORK_PROJECT_GALLERY_ASSETS = {
  "seamkit-ui": [
    {
      id: "landing",
      src: "/images/projects/seamkit-ui/landing.png",
    },
    {
      id: "components-overview",
      src: "/images/projects/seamkit-ui/components-overview.png",
    },
    {
      id: "accessibility",
      src: "/images/projects/seamkit-ui/accessibility.png",
    },
    {
      id: "foundations",
      src: "/images/projects/seamkit-ui/foundations.png",
    },
  ],
  olanna: [
    {
      id: "agent-home",
      src: "/images/projects/olanna/agent-home.png",
    },
    {
      id: "personality-preview",
      src: "/images/projects/olanna/personality-preview.png",
    },
    {
      id: "voice-settings",
      src: "/images/projects/olanna/voice-settings.png",
    },
    {
      id: "model-settings",
      src: "/images/projects/olanna/model-settings.png",
    },
    {
      id: "inbox-thread",
      src: "/images/projects/olanna/inbox-thread.png",
    },
    {
      id: "live-call",
      src: "/images/projects/olanna/live-call.png",
    },
    {
      id: "call-summary",
      src: "/images/projects/olanna/call-summary.png",
    },
  ],
  myfastmeds: [
    {
      id: "storefront-home",
      src: "/images/projects/myfastmeds/storefront-home.png",
    },
    {
      id: "catalog",
      src: "/images/projects/myfastmeds/catalog.png",
    },
    {
      id: "notifications",
      src: "/images/projects/myfastmeds/notifications.png",
    },
    {
      id: "cart",
      src: "/images/projects/myfastmeds/cart.png",
    },
  ],
  vbox: [
    {
      id: "marketing-home",
      src: "/images/projects/vbox/marketing-home.png",
    },
    {
      id: "style-props",
      src: "/images/projects/vbox/style-props.png",
    },
    {
      id: "vbox-config",
      src: "/images/projects/vbox/vbox-config.png",
    },
  ],
} as const satisfies Record<WorkProjectSlug, readonly WorkProjectGalleryAsset[]>;
