import { test, expect } from "@playwright/test";

test(" custom classes - HasText", async ({ page }) => {
  await page.goto("https://in.bookmyshow.com/");

  // await page.pause();
  await page
    .locator("css=div:visible") 
    .locator('p:has-text("Hyderabad")')
    .click();
    // .getByTestId('modalClose')
    // .getByText('Hyderabad')
    // .click();

  await page.close();
});

