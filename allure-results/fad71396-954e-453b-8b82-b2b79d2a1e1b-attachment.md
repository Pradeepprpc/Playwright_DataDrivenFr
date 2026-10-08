# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Patch.spec.ts >> Patch method
- Location: tests\Patch.spec.ts:4:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Created"
Received: "OK"
```

# Test source

```ts
  1  | import test, { expect } from "@playwright/test";
  2  | import { request } from "http";
  3  | 
  4  | test('Patch method', async({request})=>{
  5  |     const response = await request.patch('https://gorest.in/public/v2/users/1001',{
  6  |         headers:
  7  |         {
  8  |             "Content-Type": "application/json",
  9  |             "Authorization": "Bearer 36b8c6b51910ce4599c174e19a6f7f3f6332d269aba3a7675ef1ff7c81c00e0d"
  10 |         },
  11 |         data:
  12 |         {
  13 |             "status":"inactive"
  14 |         }
  15 |         
  16 |     })
  17 |     // set status details
  18 |     console.log(`status code ${response.status()}`)
  19 |     console.log(`status test ${response.statusText}`)
  20 |     expect(response.status()).toBe(200)
> 21 |     expect(response.statusText()).toBe('Created')
     |                                   ^ Error: expect(received).toBe(expected) // Object.is equality
  22 |     const patchdata = await response.json()
  23 |     console.log(patchdata)
  24 | })
```