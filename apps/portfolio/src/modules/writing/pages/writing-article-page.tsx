import { Callout, If, MetaList, WritingCard } from "@portfolio/ui-lib";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";

import { PAGE_LINKS } from "@/constants/routes";
import { SITE_AUTHOR_NAME } from "@/constants/site-metadata";
import { createPageMetadata } from "@/utils/create-page-metadata";
import { getBaseUrl } from "@/utils/get-base-url";
import { WRITING_ARTICLE_STATUS } from "@/modules/writing/constants/writing";
import {
  getNextWritingArticle,
  getPublishedWritingArticles,
  getWritingArticleBySlug,
} from "@/modules/writing/server/writing-content";
import type { WritingArticle } from "@/modules/writing/types/writing";
import { getWritingArticlePath } from "@/modules/writing/utils/get-writing-content";

import { SectionShell } from "@/components/page/section-shell";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/page/page-hero";
import { AppLink } from "@/components/ui/app-link";
import { ButtonLink } from "@/components/ui/button-link";
import { WritingMdxBody } from "../components/writing-mdx-body";

interface WritingArticlePageContentProps {
  article: WritingArticle;
  nextArticle: WritingArticle | null;
}

interface WritingArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function generateWritingArticleStaticParams() {
  const articles = await getPublishedWritingArticles();

  return articles.map((article) => ({
    slug: article.slug,
  }));
}

async function generateWritingArticleMetadata({
  params,
}: WritingArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const baseUrl = getBaseUrl();
  const article = await getWritingArticleBySlug(slug);

  if (!article || article.status !== WRITING_ARTICLE_STATUS.published) {
    return {};
  }

  return createPageMetadata({
    baseUrl,
    title: `${article.hero.title} | ${SITE_AUTHOR_NAME}`,
    description: article.summary,
    path: getWritingArticlePath(slug),
    type: "article",
  });
}

function WritingArticlePageContent({
  article,
  nextArticle,
}: WritingArticlePageContentProps) {
  const t = useTranslations("writingArticlePage");
  const metaItems = [
    { label: t("metaCategory"), value: article.meta.category },
    { label: t("metaReadTime"), value: article.meta.readTime },
    { label: t("metaPublishedOn"), value: article.meta.publishedOn },
  ];

  let statusLabel = t("publishedLabel");

  if (article.status === WRITING_ARTICLE_STATUS.draft) {
    statusLabel = t("draftLabel");
  }

  if (article.meta.relatedProject) {
    metaItems.push({
      label: t("metaRelatedProject"),
      value: article.meta.relatedProject,
    });
  }

  metaItems.push({ label: t("metaStatus"), value: statusLabel });

  let nextArticleHref: string | null = null;
  let nextArticleMeta = "";
  let nextArticleTitle = "";
  let nextArticleSummary: string | undefined;

  if (nextArticle) {
    nextArticleHref = getWritingArticlePath(nextArticle.slug);
    nextArticleMeta = `${nextArticle.meta.category} / ${nextArticle.meta.readTime}`;
    nextArticleTitle = nextArticle.hero.title;
    nextArticleSummary = nextArticle.summary;
  }

  return (
    <SiteShell activeItemId="writing" mainId="writing-article-page">
      <PageHero
        eyebrow={article.hero.eyebrow}
        title={article.hero.title}
        description={article.hero.description}
        aside={
          <MetaList
            items={metaItems}
          />
        }
      />

      <SectionShell className="pt-8">
        <div className="grid gap-12 lg:grid-cols-[18rem_minmax(0,1fr)]">
          <aside className="min-w-0 space-y-8 lg:self-start">
            <ButtonLink href={PAGE_LINKS.writing} variant="secondary" size="sm">
              {t("backLink")}
            </ButtonLink>

            <Callout title={t("overviewTitle")}>
              <div className="space-y-3">
                <p>{article.summary}</p>
                <p>{article.meta.category}</p>
                <If condition={article.headings.length > 0}>
                  <ul className="space-y-2">
                    {article.headings.map((heading) => (
                      <li key={heading} className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-soft">
                        {heading}
                      </li>
                    ))}
                  </ul>
                </If>
              </div>
            </Callout>
          </aside>

          <div className="min-w-0 space-y-16">
            <WritingMdxBody body={article.body} />

            <Callout eyebrow={t("nextArticleEyebrow")} title={t("nextArticleTitle")}>
              <p>{t("nextArticleDescription")}</p>
              <If condition={Boolean(nextArticle)}>
                <WritingCard
                  href={nextArticleHref ?? PAGE_LINKS.writing}
                  linkComponent={AppLink}
                  meta={nextArticleMeta}
                  title={nextArticleTitle}
                  summary={nextArticleSummary}
                />
              </If>
              <ButtonLink href={PAGE_LINKS.writing} variant="secondary" size="sm">
                {t("nextArticleAction")}
              </ButtonLink>
            </Callout>
          </div>
        </div>
      </SectionShell>
    </SiteShell>
  );
}

async function WritingArticlePage({ params }: WritingArticlePageProps) {
  const { slug } = await params;
  const article = await getWritingArticleBySlug(slug);

  if (!article || article.status !== WRITING_ARTICLE_STATUS.published) {
    notFound();
  }

  const nextArticle = await getNextWritingArticle(slug);

  return (
    <WritingArticlePageContent
      article={article}
      nextArticle={nextArticle}
    />
  );
}

export {
  WritingArticlePageContent,
  generateWritingArticleMetadata,
  generateWritingArticleStaticParams,
};
export type { WritingArticlePageProps };
export default WritingArticlePage;
