import { test } from '../Hooks/ERPHooks';
import { SupplierPage } from "../Pages/SupplierPage";
import { CustomerPage } from "../Pages/CustomerPage";

test.describe('ERP inverntory management',()=>{
    // first test case for supplier module
    test('Supper with single data',async({page})=>{
        const sup = new SupplierPage(page)
        await sup.NavigateToSupplier()
        await sup.SupplierDetails("Jolie","Syndey","NSW","Australia","Sample","838383838",
            "abc@gmail.com","389384938","New supplier")
        await sup.AlertMessages()
        await sup.supplierTable()
    })

    // customer module
    test('Customer module', async({page})=>{
        const cust = new CustomerPage(page)
        await cust.NavigateToCustomer()
        await cust.CustomerDetails("Angelina","USA","LosAngles","USA","Deep","723782732","AngDee@gmail.com","3283928392","Couples")
        await cust.AlertMessages()
        await cust.CustomerTable()
    })
})



