import { Locator, Page } from "@playwright/test";

export class AdminLogout{
    page:Page
    readonly clickLogout:Locator
    // constructor
    constructor(page:Page)
    {
        this.page=page
        this.clickLogout=page.locator('li#mi_logout')
    }
    // method
    async ERPLogout()
    {
        await this.clickLogout.waitFor()
        await this.clickLogout.click()
    }
}