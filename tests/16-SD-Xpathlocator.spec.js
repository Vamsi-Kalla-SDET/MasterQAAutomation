import { test, expect } from "@playwright/test";

test("Xpath locator", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  await page.locator('//input[@id="user-name"]').click();
  await page.locator('//input[@id="password"]').click();

  //   await page.pause();

  await page.close();
});
