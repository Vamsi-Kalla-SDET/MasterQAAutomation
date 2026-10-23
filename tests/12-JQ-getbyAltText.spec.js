import { test, expect } from "@playwright/test";

test("Verify image text", async ({ page }) => {
  await page.goto("https://www.bing.com/");
  // await page.pause();


  await page.getByAltText('© India Today').first().click();

  await page.close();
});
