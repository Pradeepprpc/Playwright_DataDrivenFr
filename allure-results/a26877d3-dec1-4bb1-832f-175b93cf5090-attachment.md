# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UsingExcelData.spec.ts >> ERP module with excel >> Stock data Meta
- Location: tests\UsingExcelData.spec.ts:59:13

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('aol_x_Category')
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
  1   | import { expect, Locator, Page } from "@playwright/test";
  2   | 
  3   | export class StockPage{
  4   |     //declare properties for stock
  5   |     page:Page
  6   |     readonly StockLink:Locator
  7   |     readonly ClickAddIcon:Locator
  8   |     readonly AddCategory:Locator
  9   |     readonly CategoryNameInput:Locator
  10  |     readonly ClickCategoryAdd:Locator
  11  |     readonly SupplierNumber:Locator
  12  |     readonly StockNumber:Locator
  13  |     readonly StockNameInput:Locator
  14  |     readonly AddUnitOfMeasurement:Locator
  15  |     readonly UOMID:Locator
  16  |     readonly UOMDescription:Locator
  17  |     readonly ClickUOMAdd:Locator
  18  |     readonly PurchasingPriceInput:Locator 
  19  |     readonly SellingPrice:Locator
  20  |     readonly Notes:Locator
  21  |     readonly ClickAddButton:Locator 
  22  |     readonly ClickConfirmOk:Locator
  23  |     readonly AlertOk:Locator
  24  |     readonly SerachPanel:Locator
  25  |     readonly SerachTextbox:Locator
  26  |     readonly SearchButton:Locator
  27  |     private expNumber!:string
  28  |     
  29  |     //constructor initialise values for properties
  30  |     constructor(page:Page)
  31  |     {
  32  |         this.page = page
  33  |         this.StockLink = page.locator('#mi_a_stock_items')
  34  |         this.ClickAddIcon = page.locator('span[data-phrase="AddLink"]').first()
  35  |         this.AddCategory = page.locator('aol_x_Category')
  36  |         this.CategoryNameInput = page.locator('x_Category_Name')
  37  |         this.ClickCategoryAdd = page.getByRole('button',{name:'Add'})
  38  |         this.SupplierNumber = page.locator('#x_Supplier_Number')
  39  |         //this.SupplierNumber = page.locator('#x_Supplier_Number').selectOption('Supplier-0000000455');
  40  |         this.StockNumber = page.getByPlaceholder('Stock-000000057')
  41  |         this.StockNameInput = page.locator('')
  42  |         this.AddUnitOfMeasurement = page.locator('#x_Stock_Number')
  43  |         this.UOMID = page.getByPlaceholder('UOM ID')
  44  |         this.UOMDescription = page.getByPlaceholder('UOM Description')
  45  |         this.ClickUOMAdd = page.getByRole('button',{name:'Add'})
  46  |         this.PurchasingPriceInput = page.getByPlaceholder('Purchasing Price')
  47  |         this.SellingPrice = page.getByPlaceholder('Selling Price')
  48  |         this.Notes = page.getByPlaceholder('Notes')
  49  |         this.ClickAddButton=page.locator('#btnAction').first()
  50  |         this.ClickConfirmOk=page.getByRole('button',{name:'OK!'})
  51  |         this.AlertOk=page.getByRole('button',{name:'OK'})
  52  |         this.SerachPanel=page.locator('span[data-caption="Search"]')
  53  |         this.SerachTextbox=page.locator('#psearch')
  54  |         this.SearchButton=page.locator('#btnsubmit')
  55  | 
  56  |     }
  57  |     //method for navigate
  58  |     async NavigateToStockItem()
  59  |     {
  60  |         await this.StockLink.waitFor()
  61  |         await this.StockLink.click()
  62  |         await this.ClickAddIcon.waitFor()
  63  |         await this.ClickAddIcon.click()
  64  |     }
  65  |     //method for stockitem details
  66  |     async StockItemDetails(AddCategory:string,CategoryNameInput:string,SupplierNumber:string,
  67  |         StockNumber:string,StockNameInput:string,
  68  |         UOMID:string,UOMDescription:string,PurchasingPriceInput:string,
  69  |         SellingPrice:string,Notes:string)
  70  |     {
> 71  |         await this.AddCategory.fill(CategoryNameInput)
      |                                ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  72  |         await this.SupplierNumber.selectOption('Supplier-0000000455')
  73  |         await this.SupplierNumber.waitFor()
  74  |         this.expNumber = await this.SupplierNumber.inputValue()
  75  |         await this.StockNameInput.fill(StockNameInput)
  76  |         await this.AddUnitOfMeasurement.fill(UOMID)
  77  |         await this.AddUnitOfMeasurement.fill(UOMDescription)
  78  |         await this.PurchasingPriceInput.fill(PurchasingPriceInput)
  79  |         await this.SellingPrice.fill(SellingPrice)
  80  |         await this.Notes.fill(Notes)
  81  |         await this.ClickAddButton.click()
  82  |     }
  83  |     ////method for alert messages
  84  |     async AlertMessages()
  85  |     {
  86  |         await this.ClickConfirmOk.waitFor()
  87  |         await this.ClickConfirmOk.click()
  88  |         await this.AlertOk.waitFor()
  89  |         await this.AlertOk.click()
  90  |     }
  91  |     // method for supplier search table
  92  |     
  93  |         async StockTable() {
  94  |             if(!await this.SerachTextbox.isVisible()){
  95  |                 await this.SerachPanel.click()
  96  |             }
  97  |             await this.SerachTextbox.clear()
  98  |             await this.SerachTextbox.fill(this.expNumber)
  99  |             await this.SearchButton.click()
  100 |             const StockRow = this.page.locator('#tbl_a_stock_itemslist tbody tr',{
  101 |                  hasText:this.expNumber
  102 |             })
  103 |             await expect(StockRow).toBeVisible()
  104 |             console.log(`stock number found in table ${this.expNumber}`)
  105 |             await expect(StockRow).toContainText(this.expNumber)
  106 |     
  107 |         } 
  108 | }
```