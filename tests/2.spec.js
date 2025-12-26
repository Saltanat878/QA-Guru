import { test, expect } from '@playwright/test';

test.only('New user can order burger', async ({ page }) => {
  await page.goto('file:///Users/amirb/Downloads/burger-order.html');
  await page.getByRole('link', { name: 'Введите ваше имя' }).click();
  await page.getByText('hot').click();
  /*
  await page.getByRole('textbox', { name: 'Your Name' }).click();
  await page.getByRole('textbox', { name: 'Your Name' }).fill('masha');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('masha@kk.ll');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Masha123');
  await page.getByRole('button', { name: 'Sign up' }).click();
  */
});