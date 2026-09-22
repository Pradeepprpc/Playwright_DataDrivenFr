import {test} from '../Hooks/ERPHooks'
import { SupplierPage } from "../Pages/SupplierPage";
import { CustomerPage } from "../Pages/CustomerPage";
import erpdata from '../TestData/ERPData.json'

// console.log(erpdata.Suppliers)
// console.log(erpdata.Customers)

test.describe('ERP modules',()=>{
    for(const supdata of erpdata.Suppliers){
        test(`supplier data ${supdata.supplierName}`, async({page})=>{
            const sup = new SupplierPage(page)
            await sup.NavigateToSupplier()
            await sup.SupplierDetails(supdata.supplierName,
                supdata.address,
                supdata.city,
                supdata.country,
                supdata.contactPerson,
                supdata.phoneNumber,
                supdata.email, 
                supdata.mobileNumber,
                supdata.notes  
            )
            await sup.AlertMessages()
            await sup.supplierTable()

        })
    }
    // customer details
    for(const custdata of erpdata.Customers){
        test(`customer data ${custdata.CName}`,async({page})=>{
            const cust = new CustomerPage(page)
            await cust.NavigateToCustomer()
            await cust.CustomerDetails(custdata.CName,
                custdata.address,
                custdata.city,
                custdata.contactPerson,
                custdata.country,
                custdata.email,
                custdata.mobileNumber,
                custdata.notes,
                custdata.phoneNumber
            )
            await cust.AlertMessages()
            await cust.CustomerTable()
        })
    }
})