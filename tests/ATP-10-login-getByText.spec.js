import { test, expect } from "@playwright/test";

test("Verify by text", async ({ page }) => {
  await page.goto(
    "https://testautomationpractice.blogspot.com/p/playwrightpractice.html",
  );
  // await page.pause();
  await page.getByTitle('')

  await expect(page).toHaveURL(
    "https://testautomationpractice.blogspot.com/p/playwrightpractice.html",
  );

  await page.close();
});
