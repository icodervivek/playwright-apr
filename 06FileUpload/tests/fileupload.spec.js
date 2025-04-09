import { test, expect } from "@playwright/test";

test.skip("Verify file upload", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/upload");
  await page
    .locator("#file-upload")
    .setInputFiles("C:/Users/Vivekcodes/Downloads/hanuman.png");
  await page.locator("#file-submit").click();
  let msg = await page.locator("//h3").textContent();
  await expect(msg.includes("File Uploaded!")).toBeTruthy();
});

// test("Uploading an image", async ({ page }) => {
//   await page.goto("https://www.remove.bg/uploads");
//   await page.getByRole("button", { name: "Upload Image" }).click();
//   await page
//     .getByRole("button", { name: "Upload Image" })
//     .setInputFiles("C:/Users/Vivekcodes/Downloads/hanuman.png");
//   await page.waitForTimeout(8000);
//   await page
//     .locator(
//       "//div[@class='[&>svg]:shrink-0 flex items-center gap-2'][normalize-space()='Download']"
//     )
//     .click();
//   await page
//     .locator(
//       "//body/div[@id='app']/main[@id='page-content']/div[contains(@class,'prism')]/div[contains(@class,'upload-page-wrapper')]/div[@id='page']/div[contains(@class,'flex flex-col justify-between h-full')]/div[contains(@class,'editor-container flex justify-center gap-6 mx-1 md:mx-6 relative')]/div[contains(@class,'flex flex-col items-center justify-center')]/div[contains(@class,'hidden md:flex w-100 items-center')]/div[contains(@class,'flex gap-0 items-center py-2 rounded-2xl w-100 justify-end')]/div[contains(@class,'relative')]/div[@id='headlessui-popover-panel-25']/div[contains(@class,'z-10 overflow-hidden rounded-4xl shadow-2xl bg-white focus:outline-none origin-top-right !mt-2 right-0 origin-top-right')]/div[contains(@class,'p-2 gap-2 flex flex-column menu-wrapper')]/button[1]/div[1]"
//     )
//     .click();
// });
