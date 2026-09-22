import { expect, Locator, Page } from "@playwright/test";

// TS files are used for reusable -- PW files are used for executable files.
export class AdminLoginPage{
    // delcare properties and locators for login - locators are used to identify web element
    page:Page
    readonly UserNameInput:Locator
    readonly PasswordInput:Locator
    readonly LoginButton:Locator
    HomePageIdentifier:Locator
    //create constructor initalise values for properties
    constructor(page:Page)
        {
            this.page=page
            this.UserNameInput = page.getByRole('textbox', {name:'User Name'})
            this.PasswordInput = page.getByRole('textbox',{name:'Password'})
            //this.LoginButton = page.getByText('Login',{exact:true})
            this.LoginButton = page.getByRole('button', { name: 'Login', exact: true });
            this.HomePageIdentifier = page.locator('#ewPageCaption')
        }
    // write methods for action
    async LaunchUrl(Url:string)
    {
        await this.page.goto(Url)
    }
    // method for login
    async ERPLogin(User:string, Pass:string)
    {
        await this.UserNameInput.waitFor()
        await this.UserNameInput.clear()
        await this.UserNameInput.fill(User)
        await this.PasswordInput.clear()
        await this.PasswordInput.fill(Pass)
        await this.LoginButton.click()
        await expect(this.HomePageIdentifier).toBeVisible()

    }
}