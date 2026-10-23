import { test, expect } from "@playwright/test";

test("salesforce form by getbylabel", async ({ page }) => {
  await page.goto("https://www.salesforce.com/uk/sales/free-trial/ee/");
  // await page.pause();
  await page.getByLabel("First name").fill("SitaRam");
  await page.getByLabel("Last name").fill("Raghuvamsam");
  await page.getByLabel("Job title").fill("SDET - 1");
  await page.getByLabel("Company", { exact: true }).fill("Informatica"); // Use exact: true to avoid strict mode violations when similar labels exist, such as "Company" and "Company size".
  await page.getByLabel("Email").fill("sitaram@informatica.com");

  await expect(page).toHaveURL(
    "https://www.salesforce.com/uk/sales/free-trial/ee/",
  );

  await page.close();
});
