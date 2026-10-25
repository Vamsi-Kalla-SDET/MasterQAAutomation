import { test, expect } from "@playwright/test";

test("Xpath locator", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  await page.locator('//input[@id="user-name"]').click();
  await page.locator('//input[@id="password"]').click();

  //   await page.pause();

  await page.close();
});

// Filter mechanism

test.only ("Filter", async ({ page }) => {
  await page.goto("https://in.bookmyshow.com/");
  await page.locator('//li').filter({hasText: "Hyderabad"}).click();

  //   await page.pause();

  await page.close();
});


