import { test, expect } from "@playwright/test";

test.describe("contact page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact");
  });

  test("renders appropriate headings", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "get in touch" }),
    ).toBeVisible();

    await expect(
      page.getByRole("heading", { name: "contact me" }),
    ).toBeVisible();
  });

  test("email input should be invalid on typing an invalid email address", async ({
    page,
  }) => {
    await page.getByTestId("email").fill("matt");
    const isInvalid = await page.$eval('input[type="email"]', (input) => {
      return input.matches(":invalid");
    });

    expect(isInvalid).toBe(true);
  });

  test("email input should be valid on typing a valid email address", async ({
    page,
  }) => {
    await page.getByTestId("email-input").fill("matt@gmail.com");
    const isInvalid = await page.$eval('input[name="email"]', (input) => {
      return input.matches(":invalid");
    });

    expect(isInvalid).toBe(false);
  });

  test("name input should be valid on typing anything on it", async ({
    page,
  }) => {
    await page.getByTestId("name-input").fill("timmy");
    const isInvalid = await page.$eval('input[name="name"]', (input) => {
      return input.matches(":invalid");
    });

    expect(isInvalid).toBe(false);
  });

  test("message textarea should be valid on typing anything on it", async ({
    page,
  }) => {
    await page.getByTestId("message-input").fill("i want to make you an offer");
    const isInvalid = await page.$eval('textarea[name="message"]', (input) => {
      return input.matches(":invalid");
    });

    expect(isInvalid).toBe(false);
  });
});
