import { SECTION_TITLE_CLASS } from "@portfolio/ui-lib";
import { useTranslations } from "next-intl";

import { HOME_SECTION_IDS } from "@/modules/home/constants/home";
import { PAGE_LINKS } from "@/constants/routes";
import type { WritingArticle } from "@/modules/writing/types/writing";
import { getWritingArticlePath } from "@/modules/writing/utils/get-writing-content";

import { ButtonLink } from "@/components/ui/button-link";
import { SectionShell } from "@/components/page/section-shell";
import { WritingArticleRow } from "@/modules/writing/components/writing-article-row";

interface WritingPreviewSectionProps {
  previewArticles: WritingArticle[];
}

function WritingPreviewSection({ previewArticles }: WritingPreviewSectionProps) {
  const writing = useTranslations("home.writing");

  return (
    <SectionShell>
      <div id={HOME_SECTION_IDS.writing} className="space-y-8">
        <div className="flex items-end justify-between gap-6">
          <h2 className={SECTION_TITLE_CLASS}>{writing("title")}</h2>
          <ButtonLink href={PAGE_LINKS.writing} variant="link" size="sm">
            {writing("action")}
          </ButtonLink>
        </div>

        <div className="space-y-10 md:space-y-12">
          {previewArticles.map((article) => (
            <WritingArticleRow
              key={article.slug}
              href={getWritingArticlePath(article.slug)}
              meta={`${article.meta.category} / ${article.meta.readTime}`}
              title={article.hero.title}
              summary={article.summary}
            />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

export { WritingPreviewSection };
