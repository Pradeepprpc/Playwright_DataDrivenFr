import test, { expect } from "@playwright/test";
import { request } from "http";

test('Patch method', async({request})=>{
    const response = await request.patch('https://gorest.in/public/v2/users/1001',{
        headers:
        {
            "Content-Type": "application/json",
            "Authorization": "Bearer 36b8c6b51910ce4599c174e19a6f7f3f6332d269aba3a7675ef1ff7c81c00e0d"
        },
        data:
        {
            "status":"inactive"
        }
        
    })
    // set status details
    console.log(`status code ${response.status()}`)
    console.log(`status test ${response.statusText()}`)
    expect(response.status()).toBe(200)
    expect(response.statusText()).toBe('OK')
    const patchdata = await response.json()
    console.log(patchdata)
})