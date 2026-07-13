import * as React from "react";

import { If } from "../ui/if";
import { cn } from "../../lib/cn";

export interface WritingCardProps extends React.HTMLAttributes<HTMLElement> {
  href?: string;
  linkComponent?: React.ElementType;
  meta: string;
  title: string;
  summary?: string;
}

function WritingCard({
  className,
  href,
  linkComponent: LinkComponent = "a",
  meta,
  summary,
  title,
  ...props
}: WritingCardProps) {
  const isInteractive = Boolean(href);

  const content = (
    <article
      className={cn(
        "rounded-card border border-border bg-surface px-6 py-7 shadow-soft",
        isInteractive && "ds-motion-surface ds-motion-surface-lift",
        className,
      )}
      {...props}
    >
      <div className="space-y-3">
        <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-ink-muted">{meta}</p>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold leading-8 text-ink">{title}</h3>
          <If condition={Boolean(summary)}>
            <p className="text-sm leading-6 text-ink-muted">{summary}</p>
          </If>
        </div>
      </div>
    </article>
  );

  if (!href) {
    return content;
  }

  return (
    <LinkComponent
      aria-label={title}
      className="block rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
      href={href}
    >
      {content}
    </LinkComponent>
  );
}

export { WritingCard };
