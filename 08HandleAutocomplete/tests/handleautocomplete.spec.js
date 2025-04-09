import {test, expect} from "@playwright/test"

test("Verify Appication Title", async ({page}) => {
    await page.goto("https://www.google.com");
    await page.locator("textarea[name='q']").type("JavaScript");
    await page.waitForSelector("//li[@role='presentation']")
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("Enter")
    await page.waitForTimeout(2000)
})

