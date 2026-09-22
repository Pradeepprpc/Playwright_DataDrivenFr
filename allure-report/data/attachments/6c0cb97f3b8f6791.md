# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ERPSingleData.spec.ts >> ERP inverntory management >> Supper with single data
- Location: tests\ERPSingleData.spec.ts:7:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Search Panel' })
    - waiting for "http://webapp.qedgetech.com/logout.php" navigation to finish...
    - navigated to "http://webapp.qedgetech.com/login.php"

```

# Page snapshot

```yaml
- generic [ref=f5e2]:
  - generic [ref=f5e3]:
    - link "Stock Accounting" [ref=f5e6] [cursor=pointer]:
      - /url: .
    - strong [ref=f5e9]: Stock Accounting
  - text:       
  - generic [ref=f5e13]:
    - list [ref=f5e14]:
      - listitem [ref=f5e15]:
        - link " Help (Categories)" [ref=f5e16] [cursor=pointer]:
          - /url: help_categorieslist.php
          - generic [ref=f5e17]: 
          - text: Help (Categories)
        - text:   
      - listitem [ref=f5e19]:
        - link " Login" [ref=f5e20] [cursor=pointer]:
          - /url: login.php
          - generic [ref=f5e21]: 
          - text: Login
    - list
  - generic [ref=f5e24]:
    - generic [ref=f5e27]:
      - generic [ref=f5e28] [cursor=pointer]:
        - radio "en" [checked]
        - text: en
      - generic [ref=f5e29] [cursor=pointer]:
        - radio "id"
        - text: id
    - generic:  
  - generic [ref=f5e32]:
    - text: ©2015
    - link "Masino Sinaga" [ref=f5e33] [cursor=pointer]:
      - /url: http://www.ilovephpmaker.com
    - text: . All rights reserved. |
    - link "Terms and Conditions" [ref=f5e34] [cursor=pointer]:
      - /url: javascript:void(0);
    - text: "|"
    - link "About Us" [ref=f5e35] [cursor=pointer]:
      - /url: javascript:void(0);
    - text: "|"
    - link "Back to Top" [ref=f5e36] [cursor=pointer]:
      - /url: javascript:void(0);
```

# Test source

```ts
  1   | import { expect, Locator, Page } from "@playwright/test";
  2   | 
  3   | export class SupplierPage{
  4   |     // declare properties for suppliers
  5   |     page:Page
  6   |     readonly SupplierLink:Locator
  7   |     readonly ClickAddIcon:Locator
  8   |     readonly SupplierNumber:Locator
  9   |     readonly SupplierNameInput:Locator
  10  |     readonly SupplierAddressInput:Locator
  11  |     readonly SupplierCity:Locator
  12  |     readonly SupplierCountry:Locator
  13  |     readonly SupplierContactPerson:Locator
  14  |     readonly SupplierPhoneNumber:Locator
  15  |     readonly SupplierEmail:Locator
  16  |     readonly SupplierMobileNumber:Locator
  17  |     readonly SupplierNotes:Locator
  18  |     readonly ClickAddButton:Locator
  19  |     readonly ClickConfirmOk:Locator
  20  |     readonly AlertOk:Locator
  21  |     readonly SerachPanel:Locator
  22  |     readonly SerachTextbox:Locator
  23  |     readonly SearchButton:Locator
  24  |     //readonly SupplierGrid:Locator
  25  |     private expNumber!:string
  26  |     // Constructor initialise values for properties
  27  |     constructor(page:Page)
  28  |     {
  29  |         this.page=page
  30  |         this.SupplierLink=page.locator('#mi_a_suppliers')
  31  |         this.ClickAddIcon=page.locator('span[data-caption="Add"]').first()
  32  |         this.ClickAddButton=page.locator('span[data-caption="Add"]').first()
  33  |         this.SupplierNumber=page.getByLabel('Supplier Number')
  34  |         this.SupplierNameInput=page.getByPlaceholder('Supplier Name')
  35  |         this.SupplierAddressInput=page.getByPlaceholder('Address')
  36  |         this.SupplierCity=page.getByPlaceholder('City')
  37  |         this.SupplierCountry=page.getByPlaceholder('Country')
  38  |         this.SupplierContactPerson=page.getByPlaceholder('Contact Person')
  39  |         this.SupplierPhoneNumber=page.getByPlaceholder('Phone Number')
  40  |         this.SupplierEmail=page.getByPlaceholder('Email')
  41  |         this.SupplierMobileNumber=page.getByPlaceholder('Mobile Number')
  42  |         this.SupplierNotes=page.getByPlaceholder('Notes')
  43  |         this.ClickAddButton=page.locator('#btnAction').first()
  44  |         this.ClickConfirmOk=page.getByRole('button',{name:'OK!'})
  45  |         this.AlertOk=page.getByRole('button',{name:'OK'})
  46  |         this.SerachPanel=page.getByRole('button',{name:'Search Panel'})
  47  |         this.SerachTextbox=page.locator('#psearch')
  48  |         this.SearchButton=page.getByRole('button',{name:'Search'})
  49  |         
  50  |         
  51  |     }
  52  |     // method for navigate 
  53  | 
  54  |     async NavigateToSupplier()
  55  |     {
  56  |         await this.SupplierLink.waitFor()
  57  |         await this.SupplierLink.click()
  58  |         await this.ClickAddIcon.waitFor()
  59  |         await this.ClickAddIcon.click()
  60  |     }
  61  |     // method for supplierdetails
  62  |     async SupplierDetails(supplierName: string,address: string,city: string,country: string,
  63  |         contactPerson: string,phoneNumber: string,email: string,mobileNumber: string,notes: string,)
  64  |     {
  65  |         await this.SupplierNumber.waitFor()
  66  |         this.expNumber = await this.SupplierNumber.inputValue()
  67  |         await this.SupplierNameInput.fill(supplierName)
  68  |         await this.SupplierAddressInput.fill(address)
  69  |         await this.SupplierCity.fill(city)
  70  |         await this.SupplierCountry.fill(country)
  71  |         await this.SupplierContactPerson.fill(contactPerson)
  72  |         await this.SupplierPhoneNumber.fill(phoneNumber)
  73  |         await this.SupplierEmail.fill(email)
  74  |         await this.SupplierMobileNumber.fill(mobileNumber)
  75  |         await this.SupplierNotes.fill(notes)
  76  |         await this.ClickAddButton.click()
  77  |         
  78  |     }
  79  |     //method for alert messages
  80  |     async AlertMessages()
  81  |     {
  82  |         await this.ClickConfirmOk.waitFor()
  83  |         await this.ClickConfirmOk.click()
  84  |         await this.AlertOk.waitFor()
  85  |         await this.AlertOk.click()
  86  |     }
  87  | 
  88  |     // method for supplier search table
  89  | 
  90  |     async supplierTable() {
  91  |         if(!await this.SerachTextbox.isVisible()){
> 92  |             await this.SerachPanel.click()
      |                                    ^ Error: locator.click: Test timeout of 30000ms exceeded.
  93  |         }
  94  |         await this.SerachTextbox.clear()
  95  |         await this.SerachTextbox.fill(this.expNumber)
  96  |         await this.SearchButton.click()
  97  |         const SupplierRow = this.page.locator('#tbl_a_supplierslist tbody tr',{
  98  |              hasText:this.expNumber
  99  |         })
  100 |         await expect(SupplierRow).toBeVisible()
  101 |         console.log(`supplier number found in table ${this.expNumber}`)
  102 |         await expect(SupplierRow).toContainText(this.expNumber)
  103 | 
  104 |     }   
  105 | }
```