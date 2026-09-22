import { expect, Locator, Page } from "@playwright/test";

export class StockPage{
    //declare properties for stock
    page:Page
    readonly StockLink:Locator
    readonly ClickAddIcon:Locator
    //readonly AddCategory:Locator
    readonly CategoryNameInput:Locator
    readonly ClickCategoryAdd:Locator
    readonly SupplierNumber:Locator
    readonly StockNumber:Locator
    readonly StockNameInput:Locator
    readonly AddUnitOfMeasurement:Locator
    readonly UOMID:Locator
    readonly UOMDescription:Locator
    readonly ClickUOMAdd:Locator
    readonly PurchasingPriceInput:Locator 
    readonly SellingPrice:Locator
    readonly Notes:Locator
    readonly ClickAddButton:Locator 
    readonly ClickConfirmOk:Locator
    readonly AlertOk:Locator
    readonly SerachPanel:Locator
    readonly SerachTextbox:Locator
    readonly SearchButton:Locator
    private expNumber!:string
    
    //constructor initialise values for properties
    constructor(page:Page)
    {
        this.page = page
        this.StockLink = page.locator('#mi_a_stock_items')
        this.ClickAddIcon = page.locator('span[data-phrase="AddLink"]').first()
        //this.AddCategory = page.locator('aol_x_Category')
        this.CategoryNameInput = page.getByPlaceholder('Category Name')
        this.ClickCategoryAdd = page.getByRole('button',{name:'Add'})
        this.SupplierNumber = page.locator('#x_Supplier_Number')
        //this.SupplierNumber = page.locator('#x_Supplier_Number').selectOption('Supplier-0000000455');
        this.StockNumber = page.getByPlaceholder('Stock-000000057')
        this.StockNameInput = page.locator('')
        this.AddUnitOfMeasurement = page.locator('#x_Stock_Number')
        this.UOMID = page.getByPlaceholder('UOM ID')
        this.UOMDescription = page.getByPlaceholder('UOM Description')
        this.ClickUOMAdd = page.getByRole('button',{name:'Add'})
        this.PurchasingPriceInput = page.getByPlaceholder('Purchasing Price')
        this.SellingPrice = page.getByPlaceholder('Selling Price')
        this.Notes = page.getByPlaceholder('Notes')
        this.ClickAddButton=page.locator('#btnAction').first()
        this.ClickConfirmOk=page.getByRole('button',{name:'OK!'})
        this.AlertOk=page.getByRole('button',{name:'OK'})
        this.SerachPanel=page.locator('span[data-caption="Search"]')
        this.SerachTextbox=page.locator('#psearch')
        this.SearchButton=page.locator('#btnsubmit')

    }
    //method for navigate
    async NavigateToStockItem()
    {
        await this.StockLink.waitFor()
        await this.StockLink.click()
        await this.ClickAddIcon.waitFor()
        await this.ClickAddIcon.click()
    }
    //method for stockitem details
    async StockItemDetails(AddCategory:string,CategoryNameInput:string,SupplierNumber:string,
        StockNumber:string,StockNameInput:string,
        AddUnitOfMeasurement:string,PurchasingPriceInput:string,
        SellingPrice:string,Notes:string)
    {
        //await this.AddCategory.fill(CategoryNameInput)
        await this.SupplierNumber.selectOption('Supplier-0000000455')
        await this.SupplierNumber.waitFor()
        this.expNumber = await this.SupplierNumber.inputValue()
        await this.StockNameInput.fill(StockNameInput)
        await this.AddUnitOfMeasurement.click()
        await this.AddUnitOfMeasurement.selectOption(AddUnitOfMeasurement)
        //await this.AddUnitOfMeasurement.fill(UOMDescription)
        await this.PurchasingPriceInput.fill(PurchasingPriceInput)
        await this.SellingPrice.fill(SellingPrice)
        await this.Notes.fill(Notes)
        await this.ClickAddButton.click()
    }


    ////method for alert messages
    async AlertMessages()
    {
        await this.ClickConfirmOk.waitFor()
        await this.ClickConfirmOk.click()
        await this.AlertOk.waitFor()
        await this.AlertOk.click()
    }
    // method for supplier search table
    
        async StockTable() {
            if(!await this.SerachTextbox.isVisible()){
                await this.SerachPanel.click()
            }
            await this.SerachTextbox.clear()
            await this.SerachTextbox.fill(this.expNumber)
            await this.SearchButton.click()
            const StockRow = this.page.locator('#tbl_a_stock_itemslist tbody tr',{
                 hasText:this.expNumber
            })
            await expect(StockRow).toBeVisible()
            console.log(`stock number found in table ${this.expNumber}`)
            await expect(StockRow).toContainText(this.expNumber)
    
        } 
}