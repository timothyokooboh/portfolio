import * as React from "react";
import { Badge, If, cn } from "@portfolio/ui-lib";

import { PAGE_HERO_TITLE_CLASS } from "@/constants/typography";

import { SectionShell } from "@/components/page/section-shell";

interface PageHeroProps extends React.HTMLAttributes<HTMLElement> {
  aside?: React.ReactNode;
  asideClassName?: string;
  description: string;
  eyebrow?: string;
  layoutClassName?: string;
  title: string;
}

function PageHero({
  aside,
  asideClassName,
  className,
  description,
  eyebrow,
  layoutClassName,
  title,
  ...props
}: PageHeroProps) {
  return (
    <SectionShell className={cn("pt-8 md:pt-14", className)} {...props}>
      <div
        className={cn(
          "grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end",
          layoutClassName,
        )}
      >
        <div className="max-w-[48rem] space-y-5">
          <If condition={Boolean(eyebrow)}>
            <Badge>{eyebrow}</Badge>
          </If>
          <h1 className={PAGE_HERO_TITLE_CLASS}>
            {title}
          </h1>
          <p className="max-w-[42rem] text-lg leading-8 text-ink-muted">{description}</p>
        </div>

        <If condition={Boolean(aside)}>
          <div className={cn("lg:justify-self-end", asideClassName)}>{aside}</div>
        </If>
      </div>
    </SectionShell>
  );
}

export { PageHero };
