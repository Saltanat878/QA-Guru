import { test } from '@playwright/test';
export class MainPage {


    constructor (page){
        this.page = page;
        //tech descr
        this.signupLink = page.getByRole('link' , { name: "Sign up"}).describe("button/registration link");
    }
    //business actions with Sign up page
    async gotoRegister(){
        return test.step('following to registration page', async (step) => {

        this.signupLink.click();
        } )
        
    }
    async open(url){
        return test.step ('following to main page ${url}', async(step) => {
        await this.page.goto(url);

        })
        

    }
}
/*
await page.goto(url);
await page.getByRole('link', { name: 'Sign up' }).click();
*/