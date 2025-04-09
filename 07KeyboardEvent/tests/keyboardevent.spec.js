import { test, expect } from "@playwright/test";

test("Keyboard Event", async ({ page }) => {
  await page.goto("https://www.google.com/");
//   await page.locator("textarea[name='q'").focus();
  await page.locator("textarea[name='q']").fill("Mukesh Otwani");
  await page.keyboard.press("Control+A", { delay: 2000 });
  await page.keyboard.press("Control+C", { delay: 2000 });
  await page.keyboard.press("Backspace", { delay: 2000 });
  await page.keyboard.press("Control+V", { delay: 2000 });
  await page.keyboard.type(" Github");

  await page.keyboard.press("Enter");
});
