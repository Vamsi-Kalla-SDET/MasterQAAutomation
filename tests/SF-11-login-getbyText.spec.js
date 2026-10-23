import { test, expect } from "@playwright/test";

test("Verify title", async ({ page }) => {
  await page.goto("https://jqueryui.com/");
  // await page.pause();

  const locator = page.getByTitle("jQuery UI", {
    exact: true,
  });

  // Count matching elements
  const count = await locator.count();
  console.log("Matching elements:", count);

  await page.getByTitle("jQuery UI", { exact: true }).first().click(); //Use .first() — Click the first match

  await expect(page).toHaveURL("https://jqueryui.com/");

  await page.close();
});
