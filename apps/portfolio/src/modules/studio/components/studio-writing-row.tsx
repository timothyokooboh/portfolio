import { Badge, Card, CardContent, If } from "@portfolio/ui-lib";
import { useTranslations } from "next-intl";

import { WRITING_ARTICLE_STATUS } from "@/modules/writing/constants/writing";
import type { WritingArticle } from "@/modules/writing/types/writing";
import {
  getStudioWritingEditPath,
  getWritingArticlePath,
} from "@/modules/writing/utils/get-writing-content";

import { ButtonLink } from "@/components/ui/button-link";

interface StudioWritingRowProps {
  article: WritingArticle;
}

function StudioWritingRow({ article }: StudioWritingRowProps) {
  const t = useTranslations("studio.dashboard");
  let statusLabel = t("draftLabel");
  let publicHref: string | null = null;

  if (article.status === WRITING_ARTICLE_STATUS.published) {
    statusLabel = t("publishedLabel");
    publicHref = getWritingArticlePath(article.slug);
  }

  return (
    <Card>
      <CardContent className="flex flex-col gap-5 px-6 py-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-3">
          <div className="space-y-2">
            <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-ink-soft">
              {article.meta.category}
            </p>
            <h3 className="text-2xl font-semibold leading-tight text-ink">
              {article.hero.title}
            </h3>
            <p className="max-w-3xl text-sm leading-6 text-ink-muted">{article.summary}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-ink-muted">
            <Badge variant="subtle">{statusLabel}</Badge>
            <span>{`${t("updated")}: ${article.meta.publishedOn}`}</span>
            <span>{`${t("readTime")}: ${article.meta.readTime}`}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <ButtonLink href={getStudioWritingEditPath(article.slug)} variant="secondary" size="sm">
            {t("edit")}
          </ButtonLink>
          <If condition={Boolean(publicHref)}>
            <ButtonLink href={publicHref ?? getStudioWritingEditPath(article.slug)} variant="ghost" size="sm">
              {t("openPublic")}
            </ButtonLink>
          </If>
        </div>
      </CardContent>
    </Card>
  );
}

export { StudioWritingRow };
