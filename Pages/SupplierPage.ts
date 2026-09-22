import { expect, Locator, Page } from "@playwright/test";

export class SupplierPage{
    // declare properties for suppliers
    page:Page
    readonly SupplierLink:Locator
    readonly ClickAddIcon:Locator
    readonly SupplierNumber:Locator
    readonly SupplierNameInput:Locator
    readonly SupplierAddressInput:Locator
    readonly SupplierCity:Locator
    readonly SupplierCountry:Locator
    readonly SupplierContactPerson:Locator
    readonly SupplierPhoneNumber:Locator
    readonly SupplierEmail:Locator
    readonly SupplierMobileNumber:Locator
    readonly SupplierNotes:Locator
    readonly ClickAddButton:Locator
    readonly ClickConfirmOk:Locator
    readonly AlertOk:Locator
    readonly SerachPanel:Locator
    readonly SerachTextbox:Locator
    readonly SearchButton:Locator
    //readonly SupplierGrid:Locator
    private expNumber!:string
    // Constructor initialise values for properties
    constructor(page:Page)
    {
        this.page=page
        this.SupplierLink=page.locator('#mi_a_suppliers')
        this.ClickAddIcon=page.locator('span[data-caption="Add"]').first()
        this.ClickAddButton=page.locator('span[data-caption="Add"]').first()
        this.SupplierNumber=page.getByLabel('Supplier Number')
        this.SupplierNameInput=page.getByPlaceholder('Supplier Name')
        this.SupplierAddressInput=page.getByPlaceholder('Address')
        this.SupplierCity=page.getByPlaceholder('City')
        this.SupplierCountry=page.getByPlaceholder('Country')
        this.SupplierContactPerson=page.getByPlaceholder('Contact Person')
        this.SupplierPhoneNumber=page.getByPlaceholder('Phone Number')
        this.SupplierEmail=page.getByPlaceholder('Email')
        this.SupplierMobileNumber=page.getByPlaceholder('Mobile Number')
        this.SupplierNotes=page.getByPlaceholder('Notes')
        this.ClickAddButton=page.locator('#btnAction').first()
        this.ClickConfirmOk=page.getByRole('button',{name:'OK!'})
        this.AlertOk=page.getByRole('button',{name:'OK'})
        this.SerachPanel=page.locator('span[data-caption="Search"]')
        this.SerachTextbox=page.locator('#psearch')
        this.SearchButton=page.locator('#btnsubmit')
        
        
    }
    // method for navigate 

    async NavigateToSupplier()
    {
        await this.SupplierLink.waitFor()
        await this.SupplierLink.click()
        await this.ClickAddIcon.waitFor()
        await this.ClickAddIcon.click()
    }
    // method for supplierdetails
    async SupplierDetails(supplierName: string,address: string,city: string,country: string,
        contactPerson: string,phoneNumber: string,email: string,mobileNumber: string,notes: string,)
    {
        await this.SupplierNumber.waitFor()
        this.expNumber = await this.SupplierNumber.inputValue()
        await this.SupplierNameInput.fill(supplierName)
        await this.SupplierAddressInput.fill(address)
        await this.SupplierCity.fill(city)
        await this.SupplierCountry.fill(country)
        await this.SupplierContactPerson.fill(contactPerson)
        await this.SupplierPhoneNumber.fill(phoneNumber)
        await this.SupplierEmail.fill(email)
        await this.SupplierMobileNumber.fill(mobileNumber)
        await this.SupplierNotes.fill(notes)
        await this.ClickAddButton.click()
        
    }
    //method for alert messages
    async AlertMessages()
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
        await this.SerachTextbox.fill(this.expNumber)
        await this.SearchButton.click()
        const SupplierRow = this.page.locator('#tbl_a_supplierslist tbody tr',{
             hasText:this.expNumber
        })
        await expect(SupplierRow).toBeVisible()
        console.log(`supplier number found in table ${this.expNumber}`)
        await expect(SupplierRow).toContainText(this.expNumber)

    }   
}