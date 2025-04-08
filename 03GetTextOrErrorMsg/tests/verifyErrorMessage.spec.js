const { test, expect } = require("@playwright/test");

test("Verify Error Message", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.getByPlaceholder("Username").type("Admin");
  await page.getByPlaceholder("Password").type("admin1234");
  await page.locator("//button[normalize-space()='Login']").click();
  const errorMsg = await page
    .locator("//div[@class='oxd-alert-content oxd-alert-content--error']")
    .textContent();
  await expect(errorMsg.includes("Invalid")).toBeTruthy();
  // another way ->
  await expect(errorMsg === "Invalid credentials").toBeTruthy();
});
