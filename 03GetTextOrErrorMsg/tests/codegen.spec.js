import { test, expect } from '@playwright/test';

test('Testcase generated by Codegen', async ({ page }) => {
  await page.goto('https://github.com/');
  await page.getByRole('button', { name: 'Search or jump to…' }).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('icodervivek');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.getByRole('link', { name: 'icodervivek/icodervivek' }).click();
});