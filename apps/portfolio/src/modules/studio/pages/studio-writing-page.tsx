import { Callout, If } from "@portfolio/ui-lib";
import { useTranslations } from "next-intl";

import { WRITING_ROUTE_PATHS } from "@/modules/writing/constants/writing";
import {
  getAllWritingArticles,
  getDraftWritingArticles,
  getPublishedWritingArticles,
} from "@/modules/writing/server/writing-content";
import type { WritingArticle } from "@/modules/writing/types/writing";
import { requireStudioSession } from "@/modules/studio/utils/studio-auth";

import { ButtonLink } from "@/components/ui/button-link";
import { StudioSetupState } from "../components/studio-setup-state";
import { StudioShell } from "../components/studio-shell";
import { StudioSummaryCard } from "../components/studio-summary-card";
import { StudioWritingRow } from "../components/studio-writing-row";

interface StudioWritingPageProps {
  articles: WritingArticle[];
  contentDirectory: string;
  draftCount: number;
  publishedCount: number;
}

function StudioWritingPageContent({
  articles,
  contentDirectory,
  draftCount,
  publishedCount,
}: StudioWritingPageProps) {
  const t = useTranslations("studio.dashboard");
  const shell = useTranslations("studio.shell");

  return (
    <StudioShell
      description={shell("description")}
      mainId="studio-writing-page"
      title={shell("title")}
      actions={
        <ButtonLink href={WRITING_ROUTE_PATHS.studioNew} variant="primary" size="sm">
          {t("newArticle")}
        </ButtonLink>
      }
    >
      <div className="grid gap-4 md:grid-cols-2">
        <StudioSummaryCard title={t("publishedCount")} value={publishedCount.toString()} />
        <StudioSummaryCard title={t("draftCount")} value={draftCount.toString()} />
      </div>

      <StudioSetupState contentDirectory={contentDirectory} />

      <Callout title={t("title")}>
        <p>{t("description")}</p>
      </Callout>

      <If condition={articles.length > 0}>
        <div className="space-y-4">
          {articles.map((article) => (
            <StudioWritingRow key={article.slug} article={article} />
          ))}
        </div>
      </If>

      <If condition={articles.length === 0}>
        <Callout variant="quote" title={t("empty")} />
      </If>
    </StudioShell>
  );
}

async function StudioWritingPage() {
  const accessState = await requireStudioSession();
  const [articles, draftArticles, publishedArticles] = await Promise.all([
    getAllWritingArticles(),
    getDraftWritingArticles(),
    getPublishedWritingArticles(),
  ]);

  return (
    <StudioWritingPageContent
      articles={articles}
      contentDirectory={accessState.envState.contentDirectory}
      draftCount={draftArticles.length}
      publishedCount={publishedArticles.length}
    />
  );
}

export { StudioWritingPageContent };
export default StudioWritingPage;
