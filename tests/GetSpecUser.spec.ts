import test, { expect } from "@playwright/test";
import { request } from "http";

test('Get Specific user', async({request})=>{
    // get method
    const response = await request.get('https://gorest.in/public/v2/users/1009',{
        headers:
        {
             "Accept":"application/json",
             "Content-Type": "application/json",
             "Authorization": "Bearer 36b8c6b51910ce4599c174e19a6f7f3f6332d269aba3a7675ef1ff7c81c00e0d"
        }
    })
    // get status code
            console.log(`status code is ${response.status()}`)
            console.log(`status message ${response.statusText()}`)
            await expect(response.status()).toBe(200)
            await expect(response.statusText()).toBe('OK')

             const users = await response.json()
             console.log(users)
})