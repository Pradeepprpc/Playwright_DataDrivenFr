# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ERPSingleData.spec.ts >> ERP inverntory management >> Customer module
- Location: tests\ERPSingleData.spec.ts:17:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByLabel('Customer Number') to be visible
    - waiting for "http://webapp.qedgetech.com/logout.php" navigation to finish...
    - navigated to "http://webapp.qedgetech.com/login.php"

```

# Page snapshot

```yaml
- generic [ref=f4e2]:
  - generic [ref=f4e3]:
    - link "Stock Accounting" [ref=f4e6] [cursor=pointer]:
      - /url: .
    - strong [ref=f4e9]: Stock Accounting
  - text:       
  - generic [ref=f4e13]:
    - list [ref=f4e14]:
      - listitem [ref=f4e15]:
        - link " Help (Categories)" [ref=f4e16] [cursor=pointer]:
          - /url: help_categorieslist.php
          - generic [ref=f4e17]: 
          - text: Help (Categories)
        - text:   
      - listitem [ref=f4e19]:
        - link " Login" [ref=f4e20] [cursor=pointer]:
          - /url: login.php
          - generic [ref=f4e21]: 
          - text: Login
    - list
  - generic [ref=f4e24]:
    - generic [ref=f4e27]:
      - generic [ref=f4e28] [cursor=pointer]:
        - radio "en" [checked]
        - text: en
      - generic [ref=f4e29] [cursor=pointer]:
        - radio "id"
        - text: id
    - generic:  
  - generic [ref=f4e32]:
    - text: ©2015
    - link "Masino Sinaga" [ref=f4e33] [cursor=pointer]:
      - /url: http://www.ilovephpmaker.com
    - text: . All rights reserved. |
    - link "Terms and Conditions" [ref=f4e34] [cursor=pointer]:
      - /url: javascript:void(0);
    - text: "|"
    - link "About Us" [ref=f4e35] [cursor=pointer]:
      - /url: javascript:void(0);
    - text: "|"
    - link "Back to Top" [ref=f4e36] [cursor=pointer]:
      - /url: javascript:void(0);
```

# Test source

```ts
  1   | import { expect, Locator, Page } from "@playwright/test"
  2   | 
  3   | export class CustomerPage{
  4   |     page:Page
  5   |         readonly CustomerLink:Locator
  6   |         readonly ClickAddIcon:Locator
  7   |         readonly CustomerNumber:Locator
  8   |         readonly CustomerNameInput:Locator
  9   |         readonly CustomerAddressInput:Locator
  10  |         readonly CustomerCity:Locator
  11  |         readonly CustomerCountry:Locator
  12  |         readonly CustomerContactPerson:Locator
  13  |         readonly CustomerPhoneNumber:Locator
  14  |         readonly CustomerEmail:Locator
  15  |         readonly CustomerMobileNumber:Locator
  16  |         readonly CustomerNotes:Locator
  17  |         readonly ClickAddButton:Locator
  18  |         readonly ClickConfirmOk:Locator
  19  |         readonly AlertOk:Locator
  20  |         readonly SerachPanel:Locator
  21  |         readonly SerachTextbox:Locator
  22  |         readonly SearchButton:Locator
  23  |         //readonly SupplierGrid:Locator
  24  |         private expNumber!:string
  25  | 
  26  |         // Constructor initialise values for properties
  27  |             constructor(page:Page)
  28  |             {
  29  |                 this.page=page
  30  |                 this.CustomerLink=page.locator('#mi_a_suppliers')
  31  |                 this.ClickAddIcon=page.locator('span[data-caption="Add"]').first()
  32  |                 //this.ClickAddButton=page.locator('span[data-caption="Add"]').first()
  33  |                 this.CustomerNumber=page.getByLabel('Customer Number')
  34  |                 this.CustomerNameInput=page.getByPlaceholder('Customer Name')
  35  |                 this.CustomerAddressInput=page.getByPlaceholder('Address')
  36  |                 this.CustomerCity=page.getByPlaceholder('City')
  37  |                 this.CustomerCountry=page.getByPlaceholder('Country')
  38  |                 this.CustomerContactPerson=page.getByPlaceholder('Contact Person')
  39  |                 this.CustomerPhoneNumber=page.getByPlaceholder('Phone Number')
  40  |                 this.CustomerEmail=page.getByPlaceholder('Email')
  41  |                 this.CustomerMobileNumber=page.getByPlaceholder('Mobile Number')
  42  |                 this.CustomerNotes=page.getByPlaceholder('Notes')
  43  |                 this.ClickAddButton=page.locator('#btnAction').first()
  44  |                 this.ClickConfirmOk=page.getByRole('button',{name:'OK!'})
  45  |                 this.AlertOk=page.getByRole('button',{name:'OK'})
  46  |                 this.SerachPanel=page.locator('span[data-caption="Search"]')
  47  |                 this.SerachTextbox=page.locator('#psearch')
  48  |                 this.SearchButton=page.locator('#btnsubmit')
  49  |         
  50  |             }
  51  |         // method for navigate 
  52  | 
  53  |     async NavigateToCustomer()
  54  |     {
  55  |         await this.CustomerLink.waitFor()
  56  |         await this.CustomerLink.click()
  57  |         await this.ClickAddIcon.waitFor()
  58  |         await this.ClickAddIcon.click()
  59  |     }
  60  |     // method for supplierdetails
  61  |     async CustomerDetails(CName: string,address: string,city: string,country: string,
  62  |         contactPerson: string,phoneNumber: string,email: string,mobileNumber: string,notes: string,)
  63  |     {
> 64  |         await this.CustomerNumber.waitFor()
      |                                   ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  65  |         this.expNumber = await this.CustomerNumber.inputValue()
  66  |         await this.CustomerNameInput.fill(CName)
  67  |         await this.CustomerAddressInput.fill(address)
  68  |         await this.CustomerCity.fill(city)
  69  |         await this.CustomerCountry.fill(country)
  70  |         await this.CustomerContactPerson.fill(contactPerson)
  71  |         await this.CustomerPhoneNumber.fill(phoneNumber)
  72  |         await this.CustomerEmail.fill(email)
  73  |         await this.CustomerMobileNumber.fill(mobileNumber)
  74  |         await this.CustomerNotes.fill(notes)
  75  |         await this.ClickAddButton.click()
  76  |         
  77  |     }
  78  |     //method for alert messages
  79  |     async AlertMessages()
  80  |     {
  81  |         await this.ClickConfirmOk.waitFor()
  82  |         await this.ClickConfirmOk.click()
  83  |         await this.AlertOk.waitFor()
  84  |         await this.AlertOk.click()
  85  |     }
  86  | 
  87  |     // method for supplier search table
  88  |     
  89  |         async CustomerTable() {
  90  |             if(!await this.SerachTextbox.isVisible()){
  91  |                 await this.SerachPanel.click()
  92  |             }
  93  |             await this.SerachTextbox.clear()
  94  |             await this.SerachTextbox.fill(this.expNumber)
  95  |             await this.SearchButton.click()
  96  |             const CustomerRow = this.page.locator('#tbl_a_customerslist tbody tr',{
  97  |                  hasText:this.expNumber
  98  |             })
  99  |             await expect(CustomerRow).toBeVisible()
  100 |             console.log(`supplier number found in table ${this.expNumber}`)
  101 |             await expect(CustomerRow).toContainText(this.expNumber)
  102 |     
  103 |         }  
  104 | }
```