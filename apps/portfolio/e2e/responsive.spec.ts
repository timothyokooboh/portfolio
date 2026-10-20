import { expect, test } from "@playwright/test";

import homeMessages from "../src/modules/home/messages/en.json";

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

// Include both sides of each reported regression boundary, plus wider controls.
const HOME_REGRESSION_WIDTHS = [
  320, 343, 344, 345, 346, 358, 359, 371, 372, 373, 390,
  640, 661, 662, 768, 1023, 1024, 1095, 1096, 1280, 1920,
] as const;
const GEOMETRY_TOLERANCE = 1;

test("homepage content fits at responsive regression boundaries", async ({ page }) => {
  await gotoHydratedPage(page, "/");
  await page.evaluate(() => document.fonts.ready);

  for (const width of HOME_REGRESSION_WIDTHS) {
    await page.setViewportSize({ width, height: MOBILE_VIEWPORT.height });

    const geometry = await page.evaluate(() => {
      const heading = document.querySelector("h1")!;
      const lines = Array.from(heading.children).map((line) => {
        const range = document.createRange();
        range.selectNodeContents(line);
        return range.getBoundingClientRect().toJSON();
      });
      const footerColumns = document.querySelector("footer > div > div")!;
      const intro = footerColumns.children[0]!;
      const links = footerColumns.children[1]!;
      const introRange = document.createRange();
      introRange.selectNodeContents(intro);
      const introBounds = introRange.getBoundingClientRect();
      const linksBounds = links.getBoundingClientRect();
      return {
        scrollWidth: document.documentElement.scrollWidth,
        lineOverlaps: lines.slice(1).map((line, index) => lines[index].bottom - line.top),
        footerOverlap: Math.min(introBounds.right, linksBounds.right) - Math.max(introBounds.left, linksBounds.left),
        footerIsSideBySide: linksBounds.top < introBounds.bottom,
      };
    });

    expect(geometry.scrollWidth, `page overflow at ${width}px`).toBeLessThanOrEqual(width);
    for (const overlap of geometry.lineOverlaps) {
      expect(overlap, `hero text overlap at ${width}px`).toBeLessThanOrEqual(GEOMETRY_TOLERANCE);
    }
    if (geometry.footerIsSideBySide) {
      expect(geometry.footerOverlap, `footer overlap at ${width}px`).toBeLessThanOrEqual(GEOMETRY_TOLERANCE);
    }
  }
});

const COMPACT_TITLE_MAX_LINES = 2;

test("narrow homepage headings avoid three short lines", async ({ page }) => {
  await page.setViewportSize({ width: HOME_REGRESSION_WIDTHS[0], height: MOBILE_VIEWPORT.height });
  await gotoHydratedPage(page, "/");
  await page.evaluate(() => document.fonts.ready);

  for (const name of [
    homeMessages.home.principles.title,
    homeMessages.home.credentials.items.education.title,
  ]) {
    const lineCount = await page.getByRole("heading", { name, exact: true }).evaluate((heading) => {
      const lineHeight = Number.parseFloat(getComputedStyle(heading).lineHeight);
      return heading.getBoundingClientRect().height / lineHeight;
    });
    expect(lineCount, name).toBeLessThanOrEqual(COMPACT_TITLE_MAX_LINES);
  }
});

const CONTENT_REGRESSION_ROUTES = [
  "/work", "/writing", "/work/seamkit-ui", "/work/olanna", "/work/myfastmeds",
  "/writing/mastering-component-composition-in-vue",
] as const;
const CONTENT_REGRESSION_WIDTHS = [320, 344, 345, 349, 350, 351, 358, 359, 377, 378, 403, 404, 768, 1280, 1920] as const;

for (const route of CONTENT_REGRESSION_ROUTES) {
  test(`${route} fits the narrow content regression boundaries`, async ({ page }) => {
    await gotoHydratedPage(page, route);
    await page.evaluate(() => document.fonts.ready);
    for (const width of CONTENT_REGRESSION_WIDTHS) {
      await page.setViewportSize({ width, height: MOBILE_VIEWPORT.height });
      const geometry = await page.evaluate(() => ({
        width: document.documentElement.scrollWidth,
        titleSize: Number.parseFloat(getComputedStyle(document.querySelector("h1")!).fontSize),
        calloutSizes: Array.from(document.querySelectorAll("main div.rounded-card > h3"))
          .map((element) => Number.parseFloat(getComputedStyle(element).fontSize)),
        summarySizes: Array.from(document.querySelectorAll("main aside div.rounded-card > h3"))
          .map((element) => Number.parseFloat(getComputedStyle(element).fontSize)),
        articleHeadingSizes: Array.from(document.querySelectorAll("main h2.scroll-mt-28"))
          .map((element) => Number.parseFloat(getComputedStyle(element).fontSize)),
        overflowingPanels: Array.from(document.querySelectorAll("main article, main .rounded-card, main a"))
          .filter((element) => element.getBoundingClientRect().right > document.documentElement.clientWidth + 1)
          .map((element) => element.textContent?.slice(0, 80)),
      }));
      expect(geometry.width, `${route} at ${width}px`).toBeLessThanOrEqual(width);
      expect(geometry.overflowingPanels, `${route} at ${width}px`).toEqual([]);
      if (width <= 350) {
        expect(geometry.titleSize).toBeLessThanOrEqual(30);
      }
      if (width === 351) {
        expect(geometry.titleSize).toBe(36);
      }
      if (width <= 344) {
        for (const size of geometry.calloutSizes) expect(size).toBeLessThanOrEqual(24);
      }
      if (width <= 377 && route.startsWith("/work/")) {
        for (const size of geometry.summarySizes) expect(size).toBeLessThanOrEqual(24);
      }
      if (width <= 403) {
        for (const size of geometry.articleHeadingSizes) expect(size).toBeLessThanOrEqual(24);
      }
    }
  });
}
