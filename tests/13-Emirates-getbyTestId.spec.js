import { test, expect } from "@playwright/test";

test("Verify data-testid " , async ({ page }) => {
  await page.goto("https://www.emirates.com/in/english/book/?utm_source=google&utm_medium=cpc&utm_campaign=GGS_IN_EN_Brand_Pure___IN_E&gclsrc=aw.ds&gad_source=1&gad_campaignid=618047654&gbraid=0AAAAADjsLtPOK41w0T5wkNe9C_xgTlJ3Z&gclid=CjwKCAjwi-zWBhAdEiwAqlRf-HM3cTIV7-IdtsyAOUI1wiSHtA01HMDWP5sY0TWD941DJ2t40ptpUBoCH0gQAvD_BwE");   ///data-testid=value

//   await page.pause(); // Will open an interactive session or playwright inspector window step by step used from terminal only
  
  await page.getByRole('button',{name : 'Accept'}).visible().click();
  // await page.getByRole('button',{name : 'Accept'}).click();
  await page.getByTestId('combobox_Departure airport').click();
      
 
});

