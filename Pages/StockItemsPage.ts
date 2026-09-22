import { expect, Locator, Page } from "@playwright/test";

export class StockItemsPage{
    //declare properties
    page:Page
    readonly StockItemsLink:Locator
    readonly ClickStockCategory:Locator
    readonly ClickAddIcon:Locator
    readonly CategoryNameInput:Locator
    readonly ClickAddButton:Locator
    readonly ClickConfirmOk:Locator
    readonly AlertOk:Locator
    readonly SerachPanel:Locator
    readonly SerachTextbox:Locator
    readonly SearchButton:Locator
    // Constructor initialise values for properties
    constructor(page:Page)
    {
        this.page=page
        this.StockItemsLink=page.locator('#mi_a_stock_items')
        this.ClickStockCategory=page.locator('#mi_a_stock_categories')
        this.ClickAddIcon=page.locator('span[data-phrase="AddLink"]').first()
        this.CategoryNameInput=page.getByPlaceholder('Category Name')
        this.ClickAddButton=page.locator('#btnAction').first()
        this.ClickConfirmOk=page.locator('.ajs-button.btn.btn-primary').first()
        this.AlertOk=page.locator('.ajs-button.btn.btn-primary')
        this.SerachPanel=page.locator('span[data-phrase="SearchBtn"]')
        this.SerachTextbox=page.locator('#psearch')
        this.SearchButton=page.locator('#btnsubmit')
    }

        //method for navigate
        async NavigateToStockItems()
        {
            this.StockItemsLink.waitFor()
            this.StockItemsLink.click()
            this.ClickStockCategory.waitFor()
            this.ClickStockCategory.click()
            this.ClickAddIcon.waitFor()
            this.ClickAddIcon.click()
        }
        //method for stock items list
        async StokItemsDetails(CategoryName:string)
        {
            await this.CategoryNameInput.fill(CategoryName)
        }
        // method for alert messages
        async AlertMessage()
        {
        await this.ClickConfirmOk.waitFor()
        await this.ClickConfirmOk.click()
        await this.AlertOk.waitFor()
        await this.AlertOk.click()
        }

        // method for supplier search table
        
            async supplierTable() {
                if(!await this.SerachTextbox.isVisible()){
                    await this.SerachPanel.click()
                }
                await this.SerachTextbox.clear()
                //await this.SerachTextbox.fill(this.expNumber)
                await this.SearchButton.click()
                const CategoryRow = this.page.locator('#el1_a_stock_categories_checkbox')
                await expect(CategoryRow).toBeVisible()
                console.log(`category name found in table ${CategoryRow}`)
                
        
            } 
        
}