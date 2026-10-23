import { test, expect } from "@playwright/test";

test("Verify by title", async ({ page }) => {
  await page.goto(
    "https://www.google.com/",
  );
  // await page.pause();
 await page.getByTitle('Google');

  await expect(page).toHaveURL(
    "https://www.google.com/",
  );

  await page.close();
});
