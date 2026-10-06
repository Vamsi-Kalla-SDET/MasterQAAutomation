const { test, expect } = require('@playwright/test');

test('SauceDemo Login with valid credentials', async ({ page }) => {

  // Open SauceDemo
  await page.goto('https://www.saucedemo.com/');

  // Enter username
  await page.locator('#user-name').fill('standard_user');

  // Enter password
  await page.locator('#password').fill('secret_sauce');

  // Click Login
  await page.locator('#login-button').click();

  // Verify successful login
  await expect(page).toHaveURL(/inventory.html/); //inventory

  // Verify Products page
  await expect(page.locator('.title')).toHaveText('Products');

//   console.log(await page.evaluate(() => ({
//     innerWidth: window.innerWidth,
//     innerHeight: window.innerHeight
// })));

});

