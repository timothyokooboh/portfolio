import * as React from "react";

import { Badge } from "../ui/badge";
import { If } from "../ui/if";
import { cn } from "../../lib/cn";
import { SECTION_TITLE_CLASS } from "../../lib/portfolio-typography";

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

function SectionHeading({
  action,
  className,
  description,
  eyebrow,
  title,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn("flex flex-col gap-4 md:flex-row md:items-end md:justify-between", className)}
      {...props}
    >
      <div className="max-w-[42rem] space-y-3">
        <If condition={Boolean(eyebrow)}>
          <Badge>{eyebrow}</Badge>
        </If>
        <div className="space-y-3">
          <h2 className={SECTION_TITLE_CLASS}>
            {title}
          </h2>
          <If condition={Boolean(description)}>
            <p className="text-base leading-7 text-ink-muted md:text-lg">{description}</p>
          </If>
        </div>
      </div>
      <If condition={Boolean(action)}>
        <div className="shrink-0">{action}</div>
      </If>
    </div>
  );
}

export { SectionHeading };
