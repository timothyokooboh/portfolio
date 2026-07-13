import { EMAIL_ADDRESS, GITHUB_URL, LINKEDIN_URL } from "@/constants/site-links";

const CONTACT_CHANNEL_IDS = ["email", "linkedin", "github"] as const;
const EMAIL_COPY_FEEDBACK_DURATION_MS = 3_000;
const EMAIL_COPY_STATUS = {
  copied: "copied",
  failed: "failed",
  idle: "idle",
} as const;
const MAILTO_PROTOCOL = "mailto:";

const CONTACT_CHANNEL_LINKS = {
  email: `${MAILTO_PROTOCOL}${EMAIL_ADDRESS}`,
  linkedin: LINKEDIN_URL,
  github: GITHUB_URL,
} as const;

export {
  CONTACT_CHANNEL_IDS,
  CONTACT_CHANNEL_LINKS,
  EMAIL_COPY_FEEDBACK_DURATION_MS,
  EMAIL_COPY_STATUS,
  MAILTO_PROTOCOL,
};
