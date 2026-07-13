"use client";

import {
  Separator,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
  buttonVariants,
  cn,
} from "@portfolio/ui-lib";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";

import {
  CONTACT_PAGE_ITEM_ID,
  SITE_NAV_ITEMS,
  type SiteNavigationItemId,
} from "@/constants/site-navigation";
import { PAGE_LINKS } from "@/constants/routes";
import { RESUME_URL } from "@/constants/site-links";

import { AppLink } from "@/components/ui/app-link";
import { ButtonLink } from "@/components/ui/button-link";

const MOBILE_NAV_BACKDROP_CLASSES = "bg-black/10";
const MOBILE_NAV_PANEL_CLASSES =
  "top-24 right-4 bottom-4 flex h-auto w-[calc(100vw-2rem)] max-w-[22rem] flex-col rounded-[2rem] border border-border bg-background/95 p-6 pt-16 shadow-soft backdrop-blur-xl sm:right-6 sm:w-[22rem]";
const MOBILE_NAV_LINK_CLASSES =
  "block rounded-card border border-transparent px-4 py-3 text-base leading-6 text-ink-muted transition-colors hover:border-border hover:bg-surface-muted hover:text-ink";
const MOBILE_NAV_TRIGGER_BUTTON_CLASSES =
  "rounded-full border-border bg-surface/90 text-ink shadow-soft hover:bg-surface-muted lg:hidden";
const MOBILE_NAV_ICON_LINE_CLASSES =
  "origin-center transition duration-200 ease-out motion-reduce:transform-none motion-reduce:transition-none";
const MOBILE_NAV_ICON_CENTER_LINE_CLASSES =
  "transition-opacity duration-150 ease-out motion-reduce:transition-none";
const MOBILE_NAV_HEADER_CLASSES = "sr-only";
const MOBILE_NAV_ACTIONS_CLASSES = "grid gap-3";
const MOBILE_NAV_FOOTER_CLASSES = "mt-auto pt-4";

interface SiteMobileNavProps {
  activeItemId: SiteNavigationItemId;
}

interface MobileNavSheetActions {
  close: () => void;
  unmount: () => void;
}

function SiteMobileNav({ activeItemId }: SiteMobileNavProps) {
  const navigation = useTranslations("navigation");
  const actionsRef = useRef<MobileNavSheetActions | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [firstNavigationItem] = SITE_NAV_ITEMS;
  const menuLabel = isOpen ? navigation("closeMenu") : navigation("openMenu");

  const handleClose = () => {
    actionsRef.current?.close();
  };

  return (
    <Sheet actionsRef={actionsRef} onOpenChange={setIsOpen}>
      <SheetTrigger
        aria-label={menuLabel}
        className={cn(
          buttonVariants({ size: "icon", variant: "secondary" }),
          MOBILE_NAV_TRIGGER_BUTTON_CLASSES,
          isOpen && "bg-surface-muted",
        )}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="size-[18px]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M4 7h16"
            className={cn(
              MOBILE_NAV_ICON_LINE_CLASSES,
              isOpen && "translate-y-[5px] rotate-45",
            )}
          />
          <path
            d="M4 12h16"
            className={cn(
              MOBILE_NAV_ICON_CENTER_LINE_CLASSES,
              isOpen && "opacity-0",
            )}
          />
          <path
            d="M4 17h16"
            className={cn(
              MOBILE_NAV_ICON_LINE_CLASSES,
              isOpen && "-translate-y-[5px] -rotate-45",
            )}
          />
        </svg>
      </SheetTrigger>

      <SheetContent
        side="right"
        initialFocus={firstLinkRef}
        closeLabel={navigation("closeMenu")}
        backdropClassName={MOBILE_NAV_BACKDROP_CLASSES}
        className={MOBILE_NAV_PANEL_CLASSES}
      >
        <SheetHeader className={MOBILE_NAV_HEADER_CLASSES}>
          <SheetTitle>{navigation("mobileLabel")}</SheetTitle>
          <SheetDescription>{navigation("mobileDescription")}</SheetDescription>
        </SheetHeader>

        <nav aria-label={navigation("mobileLabel")} className="space-y-2">
          {SITE_NAV_ITEMS.map((item) => (
            <AppLink
              key={item.id}
              href={item.href}
              ref={item.id === firstNavigationItem?.id ? firstLinkRef : undefined}
              className={cn(
                MOBILE_NAV_LINK_CLASSES,
                item.id === activeItemId &&
                  "border-border bg-surface text-ink",
              )}
              onClick={handleClose}
            >
              {navigation(item.id)}
            </AppLink>
          ))}
        </nav>

        <div className={MOBILE_NAV_FOOTER_CLASSES}>
          <Separator className="mb-4" />

          <div className={MOBILE_NAV_ACTIONS_CLASSES}>
            <ButtonLink
              href={RESUME_URL}
              variant="secondary"
              size="sm"
              target="_blank"
              rel="noreferrer"
              onClick={handleClose}
            >
              {navigation("resume")}
            </ButtonLink>
            <ButtonLink
              href={PAGE_LINKS.contact}
              variant="primary"
              size="sm"
              aria-current={activeItemId === CONTACT_PAGE_ITEM_ID ? "page" : undefined}
              onClick={handleClose}
            >
              {navigation("contact")}
            </ButtonLink>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export { SiteMobileNav };
