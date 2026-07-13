import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { PAGE_LINKS } from "@/constants/routes";
import { createPageMetadata } from "@/utils/create-page-metadata";
import { getBaseUrl } from "@/utils/get-base-url";
import { HOME_SECTION_IDS } from "@/modules/home/constants/home";
import { getHomeWritingPreviewArticles } from "@/modules/writing/server/writing-content";

import { SiteShell } from "@/components/layout/site-shell";
import { CurrentRoleSection } from "../components/current-role-section";
import { CredentialsSection } from "../components/credentials-section";
import { ExperienceSection } from "../components/experience-section";
import { FeaturedWorkSection } from "../components/featured-work-section";
import { HeroSection } from "../components/hero-section";
import { PrinciplesSection } from "../components/principles-section";
import { WritingPreviewSection } from "../components/writing-preview-section";

async function generateHomePageMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata");
  const baseUrl = getBaseUrl();

  return createPageMetadata({
    baseUrl,
    title: t("title"),
    description: t("description"),
    path: PAGE_LINKS.home,
  });
}

async function HomePage() {
  const previewArticles = await getHomeWritingPreviewArticles();

  return (
    <div id={HOME_SECTION_IDS.top}>
      <SiteShell activeItemId="home" mainId={HOME_SECTION_IDS.main}>
        <HeroSection />
        <CurrentRoleSection />
        <FeaturedWorkSection />
        <PrinciplesSection />
        <ExperienceSection />
        <CredentialsSection />
        <WritingPreviewSection previewArticles={previewArticles} />
      </SiteShell>
    </div>
  );
}

export { generateHomePageMetadata };
export default HomePage;
