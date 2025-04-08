const { test, expect } = require("@playwright/test");

test("Check Login Error Msg", async ({ page }) => {
  await page.goto("https://github.com/login");
  await page.locator("//input[@id='login_field']").type("test@mail.com");
  await page.locator("//input[@id='password']").type("test@1230");
  await page.locator("//input[@name='commit']").click();
  const errorMsg = await page.locator("//div[@role='alert']").textContent();
  // await expect(errorMsg.includes("Incorrect")).toBeTruthy();
  await expect(
    errorMsg.includes("Incorrect username or password.")
  ).toBeTruthy();
});
