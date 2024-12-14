import { test } from "@playwright/test";

test.describe("porfolio page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/portfolio");
  });

  // test("can view Eazy Access (Customers) project", async ({ page }) => {
  //   await page.getByTestId("eazyaccess_customers").click();
  //   await expect(page).toHaveURL(
  //     "http://localhost:3000/portfolio/eazyaccess_customers",
  //   );
  // });

  // test("can view Eazy Access (Vendors) project", async ({ page }) => {
  //   await page.getByTestId("eazyaccess_vendors").click();
  //   await expect(page).toHaveURL(
  //     "http://localhost:3000/portfolio/eazyaccess_vendors",
  //   );
  // });

  // test("can view Tech jobs project", async ({ page }) => {
  //   await page.getByTestId("techjobs").click();
  //   await expect(page).toHaveURL("http://localhost:3000/portfolio/techjobs");
  // });

  // test("can view myllo project", async ({ page }) => {
  //   await page.getByTestId("myllo").click();
  //   await expect(page).toHaveURL("http://localhost:3000/portfolio/myllo");
  // });
});
