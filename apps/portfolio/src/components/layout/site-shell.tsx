import * as React from "react";
import { cn } from "@portfolio/ui-lib";
import { useTranslations } from "next-intl";

import { SiteFooter } from "./site-footer";
import { SiteHeader, type SiteHeaderItemId } from "./site-header";

interface SiteShellProps {
  activeItemId: SiteHeaderItemId;
  children: React.ReactNode;
  mainClassName?: string;
  mainId: string;
}

function SiteShell({ activeItemId, children, mainClassName, mainId }: SiteShellProps) {
  const common = useTranslations("common");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href={`#${mainId}`}
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-black focus:px-4 focus:py-2 focus:text-white"
      >
        {common("skipToContent")}
      </a>

      <SiteHeader activeItemId={activeItemId} />

      <main id={mainId} className={cn("flex flex-col", mainClassName)}>
        {children}
      </main>

      <SiteFooter />
    </div>
  );
}

export { SiteShell };
