import { test, expect } from "@playwright/test";

test("salesforce form by getbyPH", async ({ page }) => {
  await page.goto(
    "https://testautomationpractice.blogspot.com/p/playwrightpractice.html",
  );
  // await page.pause();
  await page.getByPlaceholder("Enter your full name").fill("raja ram");
  await page.getByPlaceholder("Phone number (xxx-xxx-xxxx)").fill("9440102346");
  await page
    .getByPlaceholder("Type your message here...")
    .fill("Hello ,get hands on for PW");

  await expect(page).toHaveURL(
    "https://testautomationpractice.blogspot.com/p/playwrightpractice.html",
  );

  await page.close();
});
