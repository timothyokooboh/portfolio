import { test, expect } from "@playwright/test";

test.describe("home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("clicking the 'go to portfolio' button navigates user to the portfolio page", async ({
    page,
  }) => {
    await page.getByRole("button", { name: "go to portfolio" }).click();
    await expect(page).toHaveURL("http://localhost:3000/portfolio");
  });

  test("clicking the 'contact me' button navigates user to the contact page", async ({
    page,
  }) => {
    await page.getByRole("button", { name: "contact me" }).click();
    await expect(page).toHaveURL("http://localhost:3000/contact");
  });

  test("can download resume", async ({ page }) => {
    await page.getByRole("link", { name: "resume" }).click();
  });
});
