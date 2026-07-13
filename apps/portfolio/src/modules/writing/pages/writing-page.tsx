import { Callout } from "@portfolio/ui-lib";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import { PAGE_LINKS } from "@/constants/routes";
import { SITE_AUTHOR_NAME } from "@/constants/site-metadata";
import { createPageMetadata } from "@/utils/create-page-metadata";
import { getBaseUrl } from "@/utils/get-base-url";
import { getPublishedWritingArticles } from "@/modules/writing/server/writing-content";
import type { WritingArticle } from "@/modules/writing/types/writing";

import { SectionShell } from "@/components/page/section-shell";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/page/page-hero";
import { WritingCollectionSection } from "../components/writing-collection-section";

interface WritingPageContentProps {
  publishedArticles: WritingArticle[];
}

async function generateWritingPageMetadata(): Promise<Metadata> {
  const t = await getTranslations("pages.writing");
  const baseUrl = getBaseUrl();

  return createPageMetadata({
    baseUrl,
    title: `${t("title")} | ${SITE_AUTHOR_NAME}`,
    description: t("description"),
    path: PAGE_LINKS.writing,
  });
}

function WritingPageContent({
  publishedArticles,
}: WritingPageContentProps) {
  const t = useTranslations("writingPage");

  return (
    <SiteShell activeItemId="writing" mainId="writing-page">
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
      />

      <SectionShell className="pt-0" contentClassName="space-y-10">
        <Callout title={t("intro.title")}>
          <p>{t("intro.description")}</p>
        </Callout>

        <WritingCollectionSection
          articles={publishedArticles}
          title={t("published.title")}
          description={t("published.description")}
        />
      </SectionShell>
    </SiteShell>
  );
}

async function WritingPage() {
  const publishedArticles = await getPublishedWritingArticles();

  return <WritingPageContent publishedArticles={publishedArticles} />;
}

export { WritingPageContent, generateWritingPageMetadata };
export default WritingPage;
