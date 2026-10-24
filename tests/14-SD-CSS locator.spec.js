import { test, expect } from "@playwright/test";

test("CSS locator", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  await page.getByRole("textbox", { name: "Username" }).fill("standard_user");
  await page.getByRole("textbox", { name: "Password" }).fill("secret_sauce");
//   await page.pause();
  await page.locator('css=input').nth(2).click();

//   await expect(page).toHaveURL(/inventory/);

  await page.close();
});

