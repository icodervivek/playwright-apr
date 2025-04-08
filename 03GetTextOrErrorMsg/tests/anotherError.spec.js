const { test, expect } = require("@playwright/test");

test("Another Error Check", async ({ page }) => {
  await page.goto("https://www.instagram.com/");
  await page.locator("//input[@name='username']").type("random");
  await page.locator("//input[@name='password']").type("random@123");
  await page
    .locator(
      "//div[@class='x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1'][normalize-space()='Log in']"
    )
    .click();
  const errorMsg = await page
    .locator(
      "//div[@class='xkmlbd1 xvs91rp xd4r4e8 x1anpbxc x1m39q7l xyorhqc x540dpk x2b8uid']"
    )
    .textContent();
  await expect(errorMsg.includes("incorrect")).toBeTruthy();
});
