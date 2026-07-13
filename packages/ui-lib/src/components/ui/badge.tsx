import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/cn";

const badgeVariants = cva(
  "inline-flex items-center justify-center transition-colors",
  {
    variants: {
      variant: {
        eyebrow:
          "max-w-full justify-start whitespace-normal break-words text-left font-mono text-eyebrow uppercase tracking-eyebrow text-accent",
        subtle:
          "whitespace-nowrap rounded-pill border border-border bg-surface px-3 py-1 text-xs font-medium text-ink-muted",
        solid:
          "whitespace-nowrap rounded-pill bg-accent px-3 py-1 text-xs font-semibold text-accent-contrast",
      },
    },
    defaultVariants: {
      variant: "eyebrow",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => (
    <span ref={ref} className={cn(badgeVariants({ variant }), className)} {...props} />
  ),
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
