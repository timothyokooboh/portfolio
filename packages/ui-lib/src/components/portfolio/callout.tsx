import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Badge } from "../ui/badge";
import { If } from "../ui/if";
import { cn } from "../../lib/cn";
import { CALLOUT_TITLE_CLASS } from "../../lib/portfolio-typography";

const calloutVariants = cva("space-y-4", {
  variants: {
    variant: {
      panel: "rounded-card border border-border bg-surface-tint p-8 shadow-soft",
      quote: "border-l-4 border-accent pl-7 pr-2 py-4",
    },
  },
  defaultVariants: {
    variant: "panel",
  },
});

export interface CalloutProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof calloutVariants> {
  eyebrow?: string;
  title?: string;
}

function Callout({ children, className, eyebrow, title, variant, ...props }: CalloutProps) {
  return (
    <div className={cn(calloutVariants({ variant }), className)} {...props}>
      <If condition={Boolean(eyebrow)}>
        <Badge>{eyebrow}</Badge>
      </If>
      <If condition={Boolean(title)}>
        <h3
          className={cn(
            CALLOUT_TITLE_CLASS,
            variant === "quote" && "italic",
          )}
        >
          {title}
        </h3>
      </If>
      <div className="space-y-4 text-base leading-7 text-ink-muted">{children}</div>
    </div>
  );
}

export { Callout };
