import { test, expect } from "@playwright/test";

test("Verify image text", async ({ page }) => {
  await page.goto("https://www.bing.com/");
  // await page.pause();


  await page.getByAltText('© NDTV Sports').first().click(); // based on the image for alttext value the locator will work. else fail.

  await page.close();
});
