import { expect, test } from "@playwright/test";

import { gotoHydratedPage } from "./goto-hydrated-page";

test("renders the portfolio homepage hero", async ({ page }) => {
  await gotoHydratedPage(page, "/");

  const primaryNavigation = page.getByLabel("Primary navigation");

  await expect(primaryNavigation.getByRole("link", { name: /work/i })).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: /frontend engineering with systems depth and growing design taste\./i,
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", {
      name: /switch to dark theme|switch to light theme/i,
    }),
  ).toBeVisible();
  await expect(
    page.getByText(
      /open to senior frontend roles, design systems work, and selective contracts\./i,
    ),
  ).toBeVisible();
  await expect(
    page.getByRole("link", {
      name: /mastering component composition in vue\.js\./i,
    }),
  ).toBeVisible();

  await primaryNavigation.getByRole("link", { name: /work/i }).click();
  await expect(
    page.getByRole("heading", {
      name: /frontend work with real product depth\./i,
    }),
  ).toBeVisible();
});

test("uses client-side navigation after the initial server render", async ({ page }) => {
  await gotoHydratedPage(page, "/");

  await page.evaluate(() => {
    const clientWindow = window as Window & {
      __portfolioSpaProbe?: string;
    };

    clientWindow.__portfolioSpaProbe = "preserved";
  });

  const primaryNavigation = page.getByLabel("Primary navigation");
  await primaryNavigation.getByRole("link", { name: /work/i }).click();

  await expect(
    page.getByRole("heading", {
      name: /frontend work with real product depth\./i,
    }),
  ).toBeVisible();

  const clientState = await page.evaluate(() => {
    const clientWindow = window as Window & {
      __portfolioSpaProbe?: string;
    };

    return clientWindow.__portfolioSpaProbe;
  });

  expect(clientState).toBe("preserved");
});

test("routes from the homepage discovery surfaces", async ({ page }) => {
  await gotoHydratedPage(page, "/");

  await page.getByRole("link", { name: /view all projects/i }).click();
  await expect(
    page.getByRole("heading", {
      name: /frontend work with real product depth\./i,
    }),
  ).toBeVisible();

  await gotoHydratedPage(page, "/");
  await page.getByRole("link", { name: /read all/i }).click();
  await expect(
    page.getByRole("heading", {
      name: /writing about frontend systems and user interface architecture/i,
    }),
  ).toBeVisible();

  await gotoHydratedPage(page, "/");
  await page.getByRole("link", { name: /seamkit ui/i }).first().click();
  await expect(
    page.getByRole("heading", {
      name: /seamkit ui: raising the accessibility and consistency bar across seamlesshr products\./i,
    }),
  ).toBeVisible();
});

test("opens the mobile navigation menu and routes to work", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await gotoHydratedPage(page, "/");

  const menuButton = page.locator('button[aria-haspopup="dialog"]');

  await expect(menuButton).toBeVisible();
  await menuButton.click();

  const mobileNavigation = page.getByRole("navigation", {
    name: /mobile navigation/i,
  });

  await expect(menuButton).toHaveAttribute("aria-expanded", "true");
  await expect(menuButton).toHaveAttribute("aria-label", "Close navigation menu");
  await expect(mobileNavigation).toBeVisible();
  await expect(mobileNavigation.getByRole("link", { name: /home/i })).toBeFocused();

  await page.keyboard.press("Escape");

  await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  await expect(menuButton).toHaveAttribute("aria-label", "Open navigation menu");
  await expect(menuButton).toBeFocused();

  await menuButton.click();
  await expect(menuButton).toHaveAttribute("aria-expanded", "true");
  await expect(menuButton).toHaveAttribute("aria-label", "Close navigation menu");
  await mobileNavigation.getByRole("link", { name: /work/i }).click();

  await expect(
    page.getByRole("heading", {
      name: /frontend work with real product depth\./i,
    }),
  ).toBeVisible();
});

test("renders the expanded experience snapshot on the homepage", async ({ page }) => {
  await gotoHydratedPage(page, "/");

  await page.getByRole("heading", { name: /realtrac/i }).scrollIntoViewIfNeeded();

  await expect(
    page.getByRole("heading", {
      name: /realtrac/i,
    }),
  ).toBeVisible();

  await expect(
    page.getByText(/built and optimized a nuxt ssr application/i),
  ).toBeVisible();

  await expect(
    page.getByRole("heading", {
      name: /education, certifications, and the path into engineering\./i,
    }),
  ).toBeVisible();

  await expect(page.getByText(/udacity full-stack developer nanodegree/i)).toBeVisible();
});
