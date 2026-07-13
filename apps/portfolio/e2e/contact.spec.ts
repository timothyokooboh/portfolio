import { expect, test } from "@playwright/test";

import { gotoHydratedPage } from "./goto-hydrated-page";

test("routes to the contact page from the header CTA", async ({ page }) => {
  await gotoHydratedPage(page, "/");

  await page.getByRole("link", { name: /contact/i }).first().click();

  await expect(
    page.getByRole("heading", {
      name: /hiring for senior frontend, design systems, or product ui\? let.?s talk\./i,
    }),
  ).toBeVisible();

  await expect(
    page.locator('a[href="mailto:okoobohtimothy@gmail.com"]').first(),
  ).toBeVisible();
});

test("routes to the contact page from the footer CTA", async ({ page }) => {
  await gotoHydratedPage(page, "/");

  await page.getByRole("link", { name: /share the context\./i }).click();

  await expect(
    page.getByRole("heading", {
      name: /hiring for senior frontend, design systems, or product ui\? let.?s talk\./i,
    }),
  ).toBeVisible();
});
