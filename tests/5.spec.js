import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import {MainPage} from '../src/pages/main.page';
import { RegisterPage } from '../src/pages/register.page';
import { HomePage } from '../src/pages/home.page';

const user = {
    email: faker.internet.email({provider:"qa.guru"}),
    name: faker.person.fullName(),
    password: faker.internet.password({ length: 10 }),

}



//peremennye

// let email = faker.internet.email({provider:"qa.guru"});
// let name = faker.person.fullName();
// let password = faker.internet.password({ length: 10 });

  const url = "https://realworld.qa.guru/";
  const getRegistration = async (page, email, name, password, url) => {

 /*

  await page.goto(url);
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByRole('textbox', { name: 'Your Name' }).click();
  await page.getByRole('textbox', { name: 'Your Name' }).fill(name);
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(email);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByRole('button', { name: 'Sign up' }).click();
*/

};


test.only('New user can sign up by using email and password and page object', async ({ page }) => {
const {name, email, password} = user;
 const homePage = new HomePage(page);
 const mainPage = new MainPage(page);
 const registerPage = new RegisterPage(page);
 
 
 await mainPage.open(url);
 await mainPage.gotoRegister();
 await registerPage.register(name, email, password);




  await expect(homePage.profileName).toContainText(user.name);
});


