import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://x.com/i/flow/signup');
  await page.getByRole('button', { name: 'Create account' }).click();
  await page.getByText('Year2025202420232022202120202019201820172016201520142013201220112010200920082007').click();
  await page.getByLabel('Year').selectOption('2024');
});