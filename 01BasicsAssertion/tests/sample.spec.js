const { test, expect } = require("@playwright/test");

test("My First Test", async ({ page }) => {
  expect(2).toBe(2);
});

test.skip("My Second Test", async ({ page }) => {
  expect("Vivek Pramanik").toContain("Vivek");
});

test("My Third Test", async ({ page }) => {
  expect("Vivek Pramanik".includes("Pramanik")).toBeTruthy();
});

// test.only("My Third Test", async ({ page }) => {
//   expect(4).toBe(4);
// });
