const { test, expect } = require('@playwright/test');

test('Add product to cart from proclduct list', async ({ page }) => {

    // Login
    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    // Select the product you want to add
    const productName = 'Sauce Labs Backpack';

    // Find the product and click its Add to Cart button
    const product = page.locator('.inventory_item')
        .filter({ hasText: productName });

    await product.locator('button').click();

    // Verify cart badge
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    // Open cart
    await page.locator('.shopping_cart_link').click();

    // Verify product is present in cart
    await expect(
        page.locator('.cart_item')
            .filter({ hasText: productName })
    ).toBeVisible();
});