import { defineRouting } from "next-intl/routing";

const routing = defineRouting({
  locales: ["en", "fr", "es"],
  defaultLocale: "en",
  localePrefix: "as-needed",
});

type AppLocale = (typeof routing.locales)[number];

export { routing };
export type { AppLocale };
