import { EMAIL_ADDRESS, GITHUB_URL, LINKEDIN_URL } from "@/constants/site-links";

const CONTACT_CHANNEL_IDS = ["email", "linkedin", "github"] as const;

const CONTACT_CHANNEL_LINKS = {
  email: `mailto:${EMAIL_ADDRESS}`,
  linkedin: LINKEDIN_URL,
  github: GITHUB_URL,
} as const;

export { CONTACT_CHANNEL_IDS, CONTACT_CHANNEL_LINKS };
