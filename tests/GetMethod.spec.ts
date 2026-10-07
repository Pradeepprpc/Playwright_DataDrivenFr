import test, { expect } from "@playwright/test";
import { request } from "http";

test('Get method',async({request})=>{
    //create object for request
    const response = await request.get('https://gorest.in/public/v2/users',
        {
            headers:{
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
        // parse JSON response body 
        const users = await response.json()
        expect(Array.isArray(users)).toBeTruthy()
        console.log('Total users ', users.length)
        console.log(users)
})