import * as React from "react";

import { If } from "../ui/if";
import { cn } from "../../lib/cn";

export interface DesignTileProps extends React.HTMLAttributes<HTMLElement> {
  href?: string;
  linkComponent?: React.ElementType;
  title?: string;
  caption?: string;
  visual: React.ReactNode;
}

function DesignTile({
  caption,
  className,
  href,
  linkComponent: LinkComponent = "a",
  title,
  visual,
  ...props
}: DesignTileProps) {
  const isInteractive = Boolean(href);
  const accessibleLabel = title ?? caption;

  const content = (
    <figure
      className={cn(
        "group overflow-hidden rounded-card border border-border bg-surface shadow-soft",
        isInteractive && "ds-motion-surface ds-motion-surface-lift",
        className,
      )}
      {...props}
    >
      <div className="relative h-56 overflow-hidden bg-surface-tint">
        <div
          className={cn(
            "absolute inset-0",
            isInteractive && "ds-motion-visual ds-motion-visual-scale",
          )}
        >
          {visual}
        </div>
      </div>
      <If condition={Boolean(title || caption)}>
        <figcaption className="space-y-1 border-t border-border px-5 py-4">
          <If condition={Boolean(title)}>
            <p className="text-sm font-semibold text-ink">{title}</p>
          </If>
          <If condition={Boolean(caption)}>
            <p className="text-sm leading-6 text-ink-muted">{caption}</p>
          </If>
        </figcaption>
      </If>
    </figure>
  );

  if (!href) {
    return content;
  }

  return (
    <LinkComponent
      aria-label={accessibleLabel}
      className="block rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
      href={href}
    >
      {content}
    </LinkComponent>
  );
}

export { DesignTile };
