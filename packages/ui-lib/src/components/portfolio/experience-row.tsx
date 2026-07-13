import * as React from "react";

import { If } from "../ui/if";
import { cn } from "../../lib/cn";

export interface ExperienceRowProps extends React.HTMLAttributes<HTMLDivElement> {
  highlights?: string[];
  location?: string;
  period: string;
  company: string;
  role: string;
  note?: string;
}

interface ExperienceHighlightsProps {
  highlights: string[];
}

function ExperienceHighlights({ highlights }: ExperienceHighlightsProps) {
  return (
    <ul className="space-y-2 pl-5 pt-2">
      {highlights.map((highlight) => (
        <li
          key={highlight}
          className="list-disc text-sm leading-6 text-ink-muted marker:text-accent"
        >
          {highlight}
        </li>
      ))}
    </ul>
  );
}

function ExperienceRow({
  className,
  company,
  highlights,
  location,
  note,
  period,
  role,
  ...props
}: ExperienceRowProps) {
  return (
    <div
      className={cn(
        "grid gap-3 border-t border-border py-6 md:grid-cols-[12rem_minmax(0,1fr)_minmax(0,18rem)] md:items-start",
        className,
      )}
      {...props}
    >
      <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-ink-muted">
        {period}
      </p>
      <div className="space-y-1">
        <h3 className="font-display text-2xl leading-tight text-ink">{company}</h3>
        <If condition={Boolean(note)}>
          <p className="text-sm leading-6 text-ink-muted">{note}</p>
        </If>
        <If condition={Boolean(highlights?.length)}>
          <ExperienceHighlights highlights={highlights ?? []} />
        </If>
      </div>
      <div className="space-y-1 md:text-right">
        <p className="text-base leading-7 text-ink-muted">{role}</p>
        <If condition={Boolean(location)}>
          <p className="text-sm leading-6 text-ink-soft">{location}</p>
        </If>
      </div>
    </div>
  );
}

export { ExperienceRow };
