import { test, expect } from "@playwright/test";

test("Verify by title", async ({ page }) => {
  await page.goto(
    "https://testautomationpractice.blogspot.com/p/playwrightpractice.html",
  );
  // await page.pause();
  await page.getByTitle('Automation Testing Practice').click();
  


  await expect(page).toHaveURL(
    "https://testautomationpractice.blogspot.com/p/playwrightpractice.html",
  );

  await page.close();
});
