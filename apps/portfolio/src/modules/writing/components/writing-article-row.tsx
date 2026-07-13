import { If } from "@portfolio/ui-lib";

import { AppLink } from "@/components/ui/app-link";

interface WritingArticleRowContentProps {
  isInteractive: boolean;
  meta: string;
  summary: string;
  title: string;
}

interface WritingArticleRowProps {
  href?: string;
  meta: string;
  summary: string;
  title: string;
}

function DirectionalArrow() {
  return (
    <svg
      aria-hidden="true"
      className="size-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
    </svg>
  );
}

function WritingArticleRowContent({
  isInteractive,
  meta,
  summary,
  title,
}: WritingArticleRowContentProps) {
  return (
    <div className="grid gap-4 py-7 sm:py-8 lg:grid-cols-[minmax(11rem,0.6fr)_minmax(14rem,0.9fr)_minmax(18rem,1.15fr)_2rem] lg:items-start lg:gap-8">
      <p className="font-mono text-xs uppercase leading-6 tracking-eyebrow text-ink-muted">
        {meta}
      </p>

      <h3 className="max-w-[30rem] font-display text-[clamp(1.6rem,2.8vw,2.2rem)] font-semibold leading-tight text-ink transition-colors duration-fast group-hover:text-accent">
        {title}
      </h3>

      <p className="max-w-[40rem] text-sm leading-7 text-ink-muted sm:text-base">
        {summary}
      </p>

      <If condition={isInteractive}>
        <span className="text-ink transition-transform duration-fast group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none">
          <DirectionalArrow />
        </span>
      </If>
    </div>
  );
}

function WritingArticleRow({
  href,
  meta,
  summary,
  title,
}: WritingArticleRowProps) {
  if (!href) {
    return (
      <article>
        <WritingArticleRowContent
          isInteractive={false}
          meta={meta}
          summary={summary}
          title={title}
        />
      </article>
    );
  }

  return (
    <article>
      <AppLink
        className="group block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        href={href}
      >
        <WritingArticleRowContent
          isInteractive
          meta={meta}
          summary={summary}
          title={title}
        />
      </AppLink>
    </article>
  );
}

export { WritingArticleRow };
