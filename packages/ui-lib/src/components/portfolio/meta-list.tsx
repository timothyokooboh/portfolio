import * as React from "react";

import { Badge } from "../ui/badge";
import { If } from "../ui/if";
import { cn } from "../../lib/cn";

export interface MetaListItem {
  label: string;
  value: React.ReactNode;
}

export interface MetaListProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  items: MetaListItem[];
}

function MetaList({ className, eyebrow, items, ...props }: MetaListProps) {
  return (
    <div className={cn("space-y-5", className)} {...props}>
      <If condition={Boolean(eyebrow)}>
        <Badge>{eyebrow}</Badge>
      </If>
      <dl className="space-y-4">
        {items.map((item) => (
          <div key={item.label} className="space-y-1 border-t border-border pt-4 first:border-t-0 first:pt-0">
            <dt className="font-mono text-eyebrow uppercase tracking-eyebrow text-ink-soft">
              {item.label}
            </dt>
            <dd className="text-sm leading-6 text-ink">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export { MetaList };
