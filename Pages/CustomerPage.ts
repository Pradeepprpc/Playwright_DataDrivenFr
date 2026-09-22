import { expect, Locator, Page } from "@playwright/test"

export class CustomerPage{
    page:Page
        readonly CustomerLink:Locator
        readonly ClickAddIcon:Locator
        readonly CustomerNumber:Locator
        readonly CustomerNameInput:Locator
        readonly CustomerAddressInput:Locator
        readonly CustomerCity:Locator
        readonly CustomerCountry:Locator
        readonly CustomerContactPerson:Locator
        readonly CustomerPhoneNumber:Locator
        readonly CustomerEmail:Locator
        readonly CustomerMobileNumber:Locator
        readonly CustomerNotes:Locator
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
                this.CustomerLink=page.locator('#mi_a_customers')
                this.ClickAddIcon=page.locator('span[data-caption="Add"]').first()
                this.ClickAddButton=page.locator('span[data-caption="Add"]').first()
                this.CustomerNumber=page.getByLabel('Customer Number')
                this.CustomerNameInput=page.getByPlaceholder('Customer Name')
                this.CustomerAddressInput=page.getByPlaceholder('Address')
                this.CustomerCity=page.getByPlaceholder('City')
                this.CustomerCountry=page.getByPlaceholder('Country')
                this.CustomerContactPerson=page.getByPlaceholder('Contact Person')
                this.CustomerPhoneNumber=page.getByPlaceholder('Phone Number')
                this.CustomerEmail=page.getByPlaceholder('Email')
                this.CustomerMobileNumber=page.getByPlaceholder('Mobile Number')
                this.CustomerNotes=page.getByPlaceholder('Notes')
                this.ClickAddButton=page.locator('#btnAction').first()
                this.ClickConfirmOk=page.getByRole('button',{name:'OK!'})
                this.AlertOk=page.getByRole('button',{name:'OK'})
                this.SerachPanel=page.locator('span[data-caption="Search"]')
                this.SerachTextbox=page.locator('#psearch')
                this.SearchButton=page.locator('#btnsubmit')
        
            }
        // method for navigate 

    async NavigateToCustomer()
    {
        await this.CustomerLink.waitFor()
        await this.CustomerLink.click()
        await this.ClickAddIcon.waitFor()
        await this.ClickAddIcon.click()
    }
    // method for supplierdetails
    async CustomerDetails(CName: string,address: string,city: string,country: string,
        contactPerson: string,phoneNumber: string,email: string,mobileNumber: string,notes: string,)
    {
        await this.CustomerNumber.waitFor()
        this.expNumber = await this.CustomerNumber.inputValue()
        await this.CustomerNameInput.fill(CName)
        await this.CustomerAddressInput.fill(address)
        await this.CustomerCity.fill(city)
        await this.CustomerCountry.fill(country)
        await this.CustomerContactPerson.fill(contactPerson)
        await this.CustomerPhoneNumber.fill(phoneNumber)
        await this.CustomerEmail.fill(email)
        await this.CustomerMobileNumber.fill(mobileNumber)
        await this.CustomerNotes.fill(notes)
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
    
        async CustomerTable() {
            if(!await this.SerachTextbox.isVisible()){
                await this.SerachPanel.click()
            }
            await this.SerachTextbox.clear()
            await this.SerachTextbox.fill(this.expNumber)
            await this.SearchButton.click()
            const CustomerRow = this.page.locator('#tbl_a_customerslist tbody tr',{
                 hasText:this.expNumber
            })
            await expect(CustomerRow).toBeVisible()
            console.log(`supplier number found in table ${this.expNumber}`)
            await expect(CustomerRow).toContainText(this.expNumber)
    
        }  
}