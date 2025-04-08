const { test, expect } = require("@playwright/test");

test("Check Yahoo Title", async ({ page }) => {
  await page.goto("https://in.search.yahoo.com/");
  await expect(page).toHaveTitle("Yahoo Search - Web Search");
});
