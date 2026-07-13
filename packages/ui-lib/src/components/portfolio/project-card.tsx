import * as React from "react";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "../ui/badge";
import { If } from "../ui/if";
import { cn } from "../../lib/cn";
import { PROJECT_CARD_TITLE_CLASS } from "../../lib/portfolio-typography";

export interface ProjectCardProps extends React.HTMLAttributes<HTMLElement> {
  href?: string;
  label: string;
  linkComponent?: React.ElementType;
  title: string;
  summary?: string;
  visual: React.ReactNode;
  tone?: "light" | "dark";
}

function ProjectCard({
  className,
  href,
  label,
  linkComponent: LinkComponent = "a",
  summary,
  title,
  tone = "light",
  visual,
  ...props
}: ProjectCardProps) {
  const isInteractive = Boolean(href);
  const surfaceClassName = cn(
    "group h-full min-w-0 w-full overflow-hidden rounded-card border shadow-soft",
    isInteractive && "ds-motion-surface ds-motion-surface-lift",
    tone === "dark"
      ? "border-inverse-border bg-inverse-surface text-inverse-ink"
      : "border-border bg-surface-tint text-ink",
    !isInteractive && className,
  );

  const content = (
    <article
      className={surfaceClassName}
      {...props}
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-black/5 bg-surface">
        <div
          className={cn(
            "absolute inset-0",
            isInteractive && "ds-motion-visual",
          )}
        >
          {visual}
        </div>
      </div>
      <div className="flex min-w-0 items-start justify-between gap-4 p-5 sm:gap-6 sm:p-6">
        <div className="min-w-0 space-y-3">
          <Badge className={tone === "dark" ? "text-inverse-accent" : undefined}>{label}</Badge>
          <div className="space-y-2">
            <h3
              className={cn(
                "min-w-0 break-words",
                PROJECT_CARD_TITLE_CLASS,
                tone === "dark" ? "text-inverse-ink" : "text-ink",
              )}
            >
              {title}
            </h3>
            <If condition={Boolean(summary)}>
              <p className={cn("max-w-xl min-w-0 text-sm leading-6", tone === "dark" ? "text-inverse-ink-muted" : "text-ink-muted")}>
                {summary}
              </p>
            </If>
          </div>
        </div>
        <If condition={isInteractive}>
          <ArrowUpRight
            className={cn(
              "mt-1 shrink-0",
              isInteractive && "ds-motion-arrow ds-motion-arrow-shift",
              tone === "dark" ? "text-inverse-ink" : "text-ink",
            )}
          />
        </If>
      </div>
    </article>
  );

  if (!href) {
    return content;
  }

  return (
    <LinkComponent
      aria-label={title}
      className={cn(
        "block h-full min-w-0 w-full rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35 focus-visible:ring-offset-4 focus-visible:ring-offset-background",
        className,
      )}
      href={href}
    >
      {content}
    </LinkComponent>
  );
}

export { ProjectCard };
