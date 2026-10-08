const { test, expect } = require('@playwright/test');

test('Negative - Verify unselected product is not added to cart', async ({ page }) => {

    // Login
    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    // Add only Sauce Labs Backpack
    const selectedProduct = 'Sauce Labs Backpack';

    const product = page.locator('.inventory_item')
        .filter({ hasText: selectedProduct });

    await product.locator('button').click();

    // Open cart
    await page.locator('.shopping_cart_link').click();

    // Verify selected product is present
    await expect(
        page.locator('.cart_item')
            .filter({ hasText: selectedProduct })
    ).toBeVisible();

    // Negative validation:
    // Verify another product was NOT added to the cart
    const unselectedProduct = 'Sauce Labs Bike Light';

    await expect(
        page.locator('.cart_item')
            .filter({ hasText: unselectedProduct })
    ).not.toBeVisible();
});

