import test, { expect } from "@playwright/test";
import { request } from "http";

test('Post method',async({request})=>{
    // set url
    const response = await request.post('https://gorest.in/public/v2/users',{
        headers:
        {
            "Content-Type": "application/json",
            "Authorization": "Bearer 36b8c6b51910ce4599c174e19a6f7f3f6332d269aba3a7675ef1ff7c81c00e0d"
        },
        data:
        {
            "name":"Naveen Reddy",
            "email":"nk122@test.com",
            "gender":"male",
            "status":"active"
        }
    })
    // set status detail
    console.log(`status code ${response.status()}`)
    console.log(`status test ${response.statusText}`)
    expect(response.status()).toBe(201)
    expect(response.statusText()).toBe('Created')
    const userdata = await response.json()
    console.log(userdata)
    const username = await userdata.name
    const useremail = await userdata.email
    console.log(`user name ${username}`)
    console.log(`user email ${useremail}`)
})