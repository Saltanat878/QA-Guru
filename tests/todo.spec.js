import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    // Arrange
  await page.goto('https://todomvc.com/examples/vue/dist/#/');
  // Act
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Hello hi');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  // Assert
  await expect(page.getByText('Hello hi')).toBeVisible();
  // to add counter visibility
  /* 
  comments
  */
  
});