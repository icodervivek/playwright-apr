const { test, expect } = require("@playwright/test");

test("Search Testcases", async ({ page }) => {
  await page.goto("https://developer.mozilla.org/en-US/");
  await page.locator("//input[@id='hp-search-input']").type("javascript");
  await page
    .locator(
      "//form[@id='hp-search-form']//button[@type='submit']//span[@class='button-wrap']"
    )
    .click();
  await expect(page).toHaveURL(/javascript/);
});
