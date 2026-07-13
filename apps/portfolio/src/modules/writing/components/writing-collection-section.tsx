import { SectionHeading } from "@portfolio/ui-lib";

import type { WritingArticle } from "@/modules/writing/types/writing";
import { getWritingArticlePath } from "@/modules/writing/utils/get-writing-content";

import { WritingArticleRow } from "./writing-article-row";

interface WritingCollectionSectionProps {
  articles: WritingArticle[];
  description: string;
  isInteractive?: boolean;
  title: string;
}

function WritingCollectionSection({
  articles,
  description,
  isInteractive = true,
  title,
}: WritingCollectionSectionProps) {
  return (
    <section className="space-y-8">
      <SectionHeading title={title} description={description} />
      <div className="space-y-10 md:space-y-12">
        {articles.map((article) => {
          let href: string | undefined;

          if (isInteractive) {
            href = getWritingArticlePath(article.slug);
          }

          return (
            <WritingArticleRow
              key={article.slug}
              href={href}
              meta={`${article.meta.category} / ${article.meta.readTime}`}
              title={article.hero.title}
              summary={article.summary}
            />
          );
        })}
      </div>
    </section>
  );
}

export { WritingCollectionSection };
