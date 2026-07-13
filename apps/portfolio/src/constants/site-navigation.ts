import { PAGE_LINKS } from "@/constants/routes";

const SITE_NAV_ITEMS = [
  { id: "home", href: PAGE_LINKS.home },
  { id: "work", href: PAGE_LINKS.work },
  { id: "writing", href: PAGE_LINKS.writing },
] as const;

const CONTACT_PAGE_ITEM_ID = "contact" as const;
const DESIGNS_PAGE_ITEM_ID = "designs" as const;

type SiteNavigationItemId =
  | (typeof SITE_NAV_ITEMS)[number]["id"]
  | typeof CONTACT_PAGE_ITEM_ID
  | typeof DESIGNS_PAGE_ITEM_ID;

export {
  CONTACT_PAGE_ITEM_ID,
  DESIGNS_PAGE_ITEM_ID,
  SITE_NAV_ITEMS,
  type SiteNavigationItemId,
};
