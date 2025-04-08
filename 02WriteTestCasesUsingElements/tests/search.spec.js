const { test, expect } = require("@playwright/test");

test("User Search Testcase", async ({ page }) => {
  await page.goto("https://courses.chaicode.com/learn");
  await page.waitForTimeout(5000);
  await page
    .locator("//input[@placeholder='search']")
    .type("backend", { delay: 500 });
  await page.locator("//div[@class='css-18101vz']//*[name()='svg']").click();
  expect(page).toHaveURL(/search=backend/);
  await page
    .locator("//h6[normalize-space()='Javascript Backend in Hindi']")
    .click();
  await expect(page).toHaveURL(/javascript-backend/);
  await page.waitForTimeout(2000);
});
