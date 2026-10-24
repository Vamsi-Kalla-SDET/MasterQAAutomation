import { test, expect } from "@playwright/test";

test("Verify by getbytext", async ({ page }) => {
  await page.goto(
    "https://testautomationpractice.blogspot.com/p/playwrightpractice.html",
  );
  // await page.pause();
  await page.getByText('Automation Testing Practice');

  await expect(page).toHaveURL(
    "https://testautomationpractice.blogspot.com/p/playwrightpractice.html",
  );

  await page.close();
});
