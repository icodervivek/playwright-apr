import { test, expect } from "@playwright/test";

test.skip("Select Values from Dropdown", async ({ page }) => {
  await page.goto("https://freelance-learn-automation.vercel.app/signup");
  await page.locator("#state").selectOption({ label: "Jharkhand" });
  //   await page.waitForTimeout(1000);

  await page.locator("#state").selectOption({ value: "Goa" });

  await page.locator("#state").selectOption({ index: 3 });

  const value = await page.locator("#state").textContent();
  console.log(`All dropdown values: ` + value);

  await expect(value?.includes("Kerala")).toBeTruthy();

  await page.locator("#hobbies").selectOption(["Playing", "Swimming"]);
  await page.waitForTimeout(1000);
});

test.skip("Select Values from Another Option", async ({ page }) => {
  await page.goto("https://www.facebook.com/r.php?entry_point=login");
  await page.locator("//label[normalize-space()='Male']").click();

  await page.locator("#month").selectOption({ label: "Nov" });
  //   await page.waitForTimeout(2000);

  let value = await page.locator("#month").textContent();

  await expect(value?.includes("Mar")).toBeTruthy();
});

test("Fill The Registration Form", async ({ page }) => {
  await page.goto("https://x.com/i/flow/signup");
  await page.waitForTimeout(2000);
  await page
    .locator(
      "//button[@class='css-175oi2r r-sdzlij r-1phboty r-rs99b7 r-lrvibr r-ywje51 r-184id4b r-13qz1uu r-2yi16 r-1qi8awa r-3pj75a r-1loqt21 r-o7ynqc r-6416eg r-1ny4l3l']//div[@class='css-146c3p1 r-bcqeeo r-qvutc0 r-37j5jr r-q4m81j r-a023e6 r-rjixqe r-b88u0q r-1awozwy r-6koalj r-18u37iz r-16y2uox r-1777fci']"
    )
    .click();
  await page.locator("#SELECTOR_1").selectOption({ value: "3" });
  await page.locator("#SELECTOR_2").selectOption({ label: "3" });
  await page
    .locator("//select[@id='SELECTOR_3']")
    .selectOption({ label: "2024" });
});
