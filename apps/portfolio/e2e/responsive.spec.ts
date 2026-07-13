import { expect, test } from "@playwright/test";

import { gotoHydratedPage } from "./goto-hydrated-page";

const MOBILE_VIEWPORT = {
  height: 844,
  width: 390,
} as const;

const PUBLIC_ROUTES = [
  "/",
  "/contact",
  "/work",
  "/work/seamkit-ui",
  "/work/olanna",
  "/work/myfastmeds",
  "/work/vbox",
  "/writing",
  "/writing/mastering-component-composition-in-vue",
] as const;

const DORMANT_DESIGN_ROUTES = [
  "/designs",
  "/designs/portfolio-home-direction",
  "/designs/selected-work-archive",
  "/designs/case-study-storytelling",
  "/designs/writing-journal-surface",
  "/designs/design-showcase-gallery",
] as const;

const LOCAL_STUDIO_ROUTES = [
  "/studio/writing",
  "/studio/writing/new",
  "/studio/writing/mastering-component-composition-in-vue/edit",
] as const;

const RESPONSIVE_ROUTES = [
  ...PUBLIC_ROUTES,
  ...DORMANT_DESIGN_ROUTES,
  ...LOCAL_STUDIO_ROUTES,
] as const;

for (const route of RESPONSIVE_ROUTES) {
  test(`${route} does not overflow the mobile viewport`, async ({ page }) => {
    await page.setViewportSize(MOBILE_VIEWPORT);
    await gotoHydratedPage(page, route);

    const documentWidth = await page.evaluate(() => {
      const viewportWidth = document.documentElement.clientWidth;
      const overflowingElements = Array.from(document.body.querySelectorAll("*"))
        .map((element) => {
          const bounds = element.getBoundingClientRect();

          return {
            className: element.getAttribute("class") ?? "",
            left: Math.round(bounds.left),
            right: Math.round(bounds.right),
            tagName: element.tagName.toLowerCase(),
          };
        })
        .filter(({ left, right }) => left < 0 || right > viewportWidth);

      return {
        clientWidth: viewportWidth,
        overflowingElements,
        scrollWidth: document.documentElement.scrollWidth,
      };
    });

    expect(
      documentWidth.scrollWidth,
      JSON.stringify(documentWidth.overflowingElements, null, 2),
    ).toBeLessThanOrEqual(documentWidth.clientWidth);
  });
}
