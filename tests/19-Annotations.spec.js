import { test, expect } from '@playwright/test';

test.fixme('sample', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/'); 
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="password"]').click();
  await page.locator('.error-message-container').click();
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="error"]').click();
});


test.fail('testt', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/'); 
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="password"]').click();
  await page.locator('.error-message-container').click();
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="error"]').click();
});

