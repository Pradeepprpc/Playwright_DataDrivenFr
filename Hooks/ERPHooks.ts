import { test as base, expect } from "@playwright/test";
import { AdminLoginPage } from "../Pages/AdminLoginPage";
import { AdminLogout } from "../Pages/AdminLogout";

export const test = base;
test.beforeEach(async({page})=>{
    const loginpage = new AdminLoginPage(page)

// call launch url method
await loginpage.LaunchUrl(process.env.BASE_URL!)

//call launch login page
await loginpage.ERPLogin(process.env.BASE_USER!,process.env.BASE_PASS!)
})

test.afterEach(async({page})=>{
    const logoutpage =  new AdminLogout(page)
    await logoutpage.ERPLogout()
})
export { expect }
