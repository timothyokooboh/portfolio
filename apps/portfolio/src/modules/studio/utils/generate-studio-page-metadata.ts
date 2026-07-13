import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

async function generateStudioPageMetadata(): Promise<Metadata> {
  const t = await getTranslations("studio.metadata");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export { generateStudioPageMetadata };
