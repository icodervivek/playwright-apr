const { test, expect } = require("@playwright/test");

test("Valid Login Test Case", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  //   await page.waitForTimeout(5000); to wait the browser post waiting it will execute the further lines
  await page.getByPlaceholder("Username").type("Admin", { delay: 500 });
  await page
    .locator("//input[@placeholder='Password']")
    .type("admin123", { delay: 500 });
  await page.locator("//button[normalize-space()='Login']").click();
  await expect(page).toHaveURL(/dashboard/);
  await page.locator("//p[@class='oxd-userdropdown-name']").click();
  await page.locator("//a[normalize-space()='Logout']").click();
  await expect(page).toHaveURL(/login/);
});
