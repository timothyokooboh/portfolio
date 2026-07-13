import type { Page } from "@playwright/test";

import {
  PORTFOLIO_HYDRATION_ATTRIBUTE,
  PORTFOLIO_HYDRATION_VALUE,
} from "../src/constants/dom";

async function gotoHydratedPage(page: Page, route: string) {
  await page.goto(route, { waitUntil: "domcontentloaded" });
  await page
    .locator(
      `html[${PORTFOLIO_HYDRATION_ATTRIBUTE}="${PORTFOLIO_HYDRATION_VALUE}"]`,
    )
    .waitFor({ state: "attached" });
}

export { gotoHydratedPage };
