import { expect, test } from "@playwright/test";

test("renders grounded public framing on the designs page", async ({ page }) => {
  await page.goto("/designs");

  await expect(
    page.getByRole("heading", {
      name: /interface studies from a frontend engineer sharpening design craft\./i,
    }),
  ).toBeVisible();

  await expect(
    page.getByText(/strengthening typography, layout, systems thinking, and motion design in public/i),
  ).toBeVisible();

  await expect(
    page.getByRole("heading", {
      name: /designing a writing surface for technical notes, code, and demos\./i,
    }),
  ).toBeVisible();
});
