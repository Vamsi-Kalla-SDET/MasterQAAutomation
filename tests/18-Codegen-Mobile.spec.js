import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 11'],
});

test('test', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('rsfsfs');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('fgfdgd');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toBeVisible();
//   await page.locator('div').nth(4).click();
});