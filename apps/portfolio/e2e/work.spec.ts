import { expect, test } from "@playwright/test";

test("renders a richer Olanna case study gallery", async ({ page }) => {
  await page.goto("/work/olanna");

  await expect(
    page.getByRole("heading", {
      name: /olanna: frontend systems for real-time ai chat and voice workflows\./i,
    }),
  ).toBeVisible();

  await expect(
    page.getByText(/owned frontend work across authentication, knowledge-base tooling, chat and voice product surfaces/i),
  ).toBeVisible();

  await expect(
    page.getByRole("heading", {
      name: /agent query surface/i,
    }),
  ).toBeVisible();

  await expect(
    page.getByText(/summaries convert live transcript detail into a quick operational snapshot/i),
  ).toBeVisible();
});

test("renders grounded system-ownership copy on the Seamkit UI case study", async ({ page }) => {
  await page.goto("/work/seamkit-ui");

  await expect(
    page.getByRole("heading", {
      name: /seamkit ui: raising the accessibility and consistency bar across seamlesshr products\./i,
    }),
  ).toBeVisible();

  await expect(
    page.getByText(/giving teams a frontend foundation they can trust/i),
  ).toBeVisible();
});
