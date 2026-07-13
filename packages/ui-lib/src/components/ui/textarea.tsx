import * as React from "react";

import { cn } from "../../lib/cn";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "ds-motion-field flex min-h-36 w-full rounded-xl border border-border bg-surface px-4 py-3 text-base text-ink shadow-soft outline-none placeholder:text-ink-soft focus-visible:border-accent/60 focus-visible:ring-2 focus-visible:ring-accent/30 disabled:cursor-not-allowed disabled:opacity-60",
      className,
    )}
    {...props}
  />
));

Textarea.displayName = "Textarea";

export { Textarea };
