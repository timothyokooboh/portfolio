import { cn } from "@portfolio/ui-lib";
import { useTranslations } from "next-intl";

import { PAGE_LINKS } from "@/constants/routes";
import {
  CONTACT_PAGE_ITEM_ID,
  SITE_NAV_ITEMS,
  type SiteNavigationItemId,
} from "@/constants/site-navigation";
import { RESUME_URL } from "@/constants/site-links";

import { ThemeToggle } from "./theme-toggle";
import { SiteMobileNav } from "./site-mobile-nav";
import { AppLink } from "@/components/ui/app-link";
import { ButtonLink } from "@/components/ui/button-link";

interface SiteHeaderProps {
  activeItemId: SiteNavigationItemId;
}

function SiteHeader({ activeItemId }: SiteHeaderProps) {
  const navigation = useTranslations("navigation");
  const footer = useTranslations("footer");

  return (
    <header className="sticky top-0 z-40 px-page pt-4">
      <div className="relative mx-auto flex max-w-[75rem] items-center justify-between gap-3 border border-white/70 bg-background/80 px-4 py-4 shadow-soft backdrop-blur-md md:gap-6 md:px-6">
        <AppLink
          href={PAGE_LINKS.home}
          className="shrink-0 font-display text-[1.3rem] font-semibold leading-none tracking-[-0.05em] text-ink transition-colors hover:text-accent sm:text-[1.5rem] md:text-[1.75rem]"
        >
          {footer("title").toUpperCase()}
        </AppLink>

        <nav aria-label={navigation("primaryLabel")} className="hidden items-center gap-10 lg:flex">
          {SITE_NAV_ITEMS.map((item) => {
            const isActive = item.id === activeItemId;
            let ariaCurrent: "page" | undefined;

            if (isActive) {
              ariaCurrent = "page";
            }

            return (
              <AppLink
                key={item.id}
                href={item.href}
                aria-current={ariaCurrent}
                className={cn(
                  "relative py-1 text-base leading-6 text-ink-muted transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-fast after:ease-productive hover:text-ink motion-reduce:after:transition-none",
                  isActive && "text-ink after:scale-x-100",
                )}
              >
                {navigation(item.id)}
              </AppLink>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <SiteMobileNav activeItemId={activeItemId} />
          <ThemeToggle />
          <ButtonLink
            href={RESUME_URL}
            variant="secondary"
            size="sm"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex"
          >
            {navigation("resume")}
          </ButtonLink>
          <ButtonLink
            href={PAGE_LINKS.contact}
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex"
            aria-current={activeItemId === CONTACT_PAGE_ITEM_ID ? "page" : undefined}
          >
            {navigation("contact")}
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}

export { SiteHeader, type SiteNavigationItemId as SiteHeaderItemId };
