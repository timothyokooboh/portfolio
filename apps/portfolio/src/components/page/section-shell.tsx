import * as React from "react";
import { cn } from "@portfolio/ui-lib";

interface SectionShellProps extends React.HTMLAttributes<HTMLElement> {
  contentClassName?: string;
  id?: string;
}

function SectionShell({
  children,
  className,
  contentClassName,
  id,
  ...props
}: SectionShellProps) {
  return (
    <section id={id} className={cn("px-page py-16 md:py-20", className)} {...props}>
      <div className={cn("mx-auto max-w-[75rem]", contentClassName)}>{children}</div>
    </section>
  );
}

export { SectionShell };
