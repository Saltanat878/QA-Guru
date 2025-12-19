import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
//peremennye

let email = faker.internet.email({provider:"qa.guru"});
let name = faker.person.fullName();

let password = faker.internet.password({ length: 10 });

  const url = "https://realworld.qa.guru/";
  const getRegistration = async (page, email, name, password, url) => {
 

  await page.goto(url);
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByRole('textbox', { name: 'Your Name' }).click();
  await page.getByRole('textbox', { name: 'Your Name' }).fill(name);
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(email);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByRole('button', { name: 'Sign up' }).click();


};


test.only('New user can sign up by using email and password', async ({ page }) => {

   


await getRegistration(page, email, name, password, url);

  await expect(page.getByRole('navigation')).toContainText(name);
});


test.only('New user can change the name in profile', async ({ page }) => {

   


await getRegistration(page, email, name, password, url);

  await expect(page.getByRole('navigation')).toContainText(name);
});