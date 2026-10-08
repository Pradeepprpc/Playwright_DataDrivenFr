import test, { expect } from "@playwright/test";
import { request } from "http";

test('Put method',async({request})=>{
    // set url
    const response = await request.put('https://reqres.in/api/users/2',{
        headers:
        {
            "Content-Type": "application/json"
        },
        data:
        {
            "name":"morpheus",
            "job":"zion resident"
        }
    })
    // set status
        console.log(`status code ${response.status()}`)
        console.log(`status test ${response.statusText()}`)
        expect(response.status()).toBe(200)
        expect(response.statusText()).toBe('OK')
        const putdata = await response.json()
        console.log(putdata)
})