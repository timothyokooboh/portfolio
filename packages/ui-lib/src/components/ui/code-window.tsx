import * as React from "react";
import { Copy } from "lucide-react";

import { cn } from "../../lib/cn";
import { Button } from "./button";

export interface CodeWindowProps extends React.HTMLAttributes<HTMLDivElement> {
  filename?: string;
  code: string;
  actionLabel?: string;
}

const CodeWindow = React.forwardRef<HTMLDivElement, CodeWindowProps>(
  ({ actionLabel = "Copy", className, code, filename = "snippet.tsx", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "min-w-0 max-w-full overflow-hidden rounded-xl border border-white/5 bg-[#131b2e] text-[#bec6e0] shadow-soft",
        className,
      )}
      {...props}
    >
      <div className="flex min-w-0 items-start justify-between gap-3 border-b border-white/5 px-4 py-3">
        <span className="min-w-0 truncate font-mono text-xs tracking-[0.12em] text-[#7c839b]">
          {filename}
        </span>
        <Button
          variant="ghost"
          size="sm"
          className="h-auto shrink-0 border-transparent px-0 py-0 text-[#855300] hover:bg-transparent hover:text-[#ffb95f]"
        >
          <Copy className="size-3.5" />
          {actionLabel}
        </Button>
      </div>
      <pre className="max-w-full overflow-x-auto px-4 py-6 text-sm leading-7 sm:px-6 sm:py-7">
        <code>{code}</code>
      </pre>
    </div>
  ),
);

CodeWindow.displayName = "CodeWindow";

export { CodeWindow };
