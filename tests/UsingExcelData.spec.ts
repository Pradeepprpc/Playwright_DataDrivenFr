import { SupplierPage } from "../Pages/SupplierPage";
import { CustomerPage } from "../Pages/CustomerPage";
import { StockPage } from "../Pages/StockPage";
import {test} from '../Hooks/ERPHooks'
import { ExcelData } from "../Utils/ExcelData";
import path from "path";

let supdata:any
let custdata:any
let stockdata:any
//read path of excel data file
const Excelpath = path.join(__dirname,'../TestData/ERPExcelData.xlsx')
try {
    //store supplier data
     supdata = ExcelData.GetCellData(Excelpath,'supplier') 
    // store customer data
     custdata = ExcelData.GetCellData(Excelpath,'customer')
     // store stockdata
     stockdata = ExcelData.GetCellData(Excelpath,'stock')

} catch (error) {
    console.log(error)
    
}
// console.log(supdata)
// console.log(custdata)
//console.log(stockdata)
test.describe('ERP module with excel',()=>{
    //supplier data
    for(const supplier of supdata)
    {
        test(`Supplier data ${supplier.suppliername}`,async({page})=>{
            const sup = new SupplierPage(page)
            await sup.NavigateToSupplier()
            await sup.SupplierDetails(supplier.suppliername, supplier.Address,supplier.City,supplier.Country,
                supplier.Contactperson, supplier.phoneNumber, supplier.Email, supplier.MobileNumber,supplier.Notes
            )
            await sup.AlertMessages()
            await sup.supplierTable()
        })
    }
    //customer data
    for(const customer of custdata)
    {
        test(`Customer data ${customer.customername}`,async({page})=>{
            const cust = new CustomerPage(page)
            await cust.NavigateToCustomer()
            await cust.CustomerDetails(customer.customername,customer.Address,customer.City,
                customer.Country,customer.contactPerson,customer.PhoneNumber,
                customer.Email,customer.MobileNumber,customer.Notes
            )
            await cust.AlertMessages()
            await cust.CustomerTable()
        })
    }
    //Stock Items data
    for(const stockitem of stockdata)
    {
        test(`Stock data ${stockitem.CategoryNameInput}`,async({page})=>{
            const stock = new StockPage(page)
            await stock.NavigateToStockItem()
            await stock.StockItemDetails(stockitem.AddCategory,stockitem.CategoryNameInput,stockitem.SupplierNumber,
                stockitem.StockNumber,stockitem.StockNameInput,stockitem.UOMID,
                stockitem.UOMDescription,stockitem.PurchasingPriceInput,stockitem.SellingPrice,stockitem.Notes)
            await stock.AlertMessages()
            await stock.StockTable()
        })
    }

})
