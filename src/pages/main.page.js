export class MainPage {


    constructor (page){
        this.page = page;
        //tech descr
        this.signupLink = page.getByRole('link' , { name: "Sign up"}).describe("button/registration link");
    }
    //business actions with Sign up page
    async gotoRegister(){
        this.signupLink.click();
    }
    async open(url){
        await this.page.goto(url);

    }
}
/*
await page.goto(url);
await page.getByRole('link', { name: 'Sign up' }).click();
*/