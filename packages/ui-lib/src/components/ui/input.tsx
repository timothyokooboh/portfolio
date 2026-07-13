import * as React from "react";

import { cn } from "../../lib/cn";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type = "text", ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        "ds-motion-field flex h-12 w-full rounded-xl border border-border bg-surface px-4 text-base text-ink shadow-soft outline-none placeholder:text-ink-soft focus-visible:border-accent/60 focus-visible:ring-2 focus-visible:ring-accent/30 disabled:cursor-not-allowed disabled:opacity-60",
        className,
      )}
      {...props}
    />
  ),
);

Input.displayName = "Input";

export { Input };
