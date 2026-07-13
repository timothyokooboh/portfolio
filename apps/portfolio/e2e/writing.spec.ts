import { expect, test } from "@playwright/test";

const COMPONENT_COMPOSITION_ARTICLE_PATH =
  "/writing/mastering-component-composition-in-vue";

test("renders the writing flow and local studio authoring surfaces", async ({ page }) => {
  await page.goto("/writing");

  await expect(
    page.getByRole("heading", {
      name: /writing about frontend systems, interface craft, and implementation detail\./i,
    }),
  ).toBeVisible();

  await page.locator(`a[href="${COMPONENT_COMPOSITION_ARTICLE_PATH}"]`).click();

  await expect(
    page.getByRole("heading", {
      name: /mastering component composition in vue\.js\./i,
    }),
  ).toBeVisible();

  await page.goto("/studio/writing");

  await expect(
    page.getByRole("heading", {
      name: /all writing/i,
    }),
  ).toBeVisible();

  await page.goto("/studio/writing/new");

  await expect(
    page.getByRole("heading", {
      name: /writing studio/i,
    }),
  ).toBeVisible();

  await expect(page.getByLabel("Article body (MDX)")).toBeVisible();
  await expect(page.getByLabel("Related project")).toHaveCount(0);
  await expect(page.getByRole("button", { name: "Save draft" })).toBeVisible();

  await page.goto("/studio/writing/mastering-component-composition-in-vue/edit");

  await expect(
    page.getByRole("heading", {
      name: /edit article/i,
    }),
  ).toBeVisible();
  await expect(page.getByLabel("Related project")).toHaveCount(0);
});

test("keeps a long desktop article overview in the page scroll flow", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(COMPONENT_COMPOSITION_ARTICLE_PATH);

  const overview = page.getByRole("complementary");
  const finalOverviewItem = overview.getByText(
    /vue\.js features that aid component composition/i,
  );

  await expect(overview).toHaveCSS("position", "static");
  await finalOverviewItem.scrollIntoViewIfNeeded();
  await expect(finalOverviewItem).toBeVisible();

  expect(await page.evaluate(() => window.scrollY)).toBeGreaterThan(0);
});
