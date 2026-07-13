import { SectionHeading, WritingCard } from "@portfolio/ui-lib";

import type { WritingArticle } from "@/modules/writing/types/writing";
import { getWritingArticlePath } from "@/modules/writing/utils/get-writing-content";

import { AppLink } from "@/components/ui/app-link";

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
    <section className="space-y-6">
      <SectionHeading title={title} description={description} />
      <div className="grid gap-4 lg:grid-cols-3">
        {articles.map((article) => {
          let href: string | undefined;

          if (isInteractive) {
            href = getWritingArticlePath(article.slug);
          }

          return (
            <WritingCard
              key={article.slug}
              href={href}
              linkComponent={AppLink}
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
