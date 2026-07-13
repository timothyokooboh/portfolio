import type { ReactNode } from "react";
import { Callout } from "@portfolio/ui-lib";

interface WritingCalloutBlockProps {
  children: ReactNode;
  eyebrow?: string;
  title?: string;
}

function WritingCalloutBlock({
  children,
  eyebrow,
  title,
}: WritingCalloutBlockProps) {
  return (
    <Callout eyebrow={eyebrow} title={title}>
      <div className="space-y-4">{children}</div>
    </Callout>
  );
}

export { WritingCalloutBlock };
