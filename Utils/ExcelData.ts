import xlxs from 'xlsx'
export class ExcelData{
    static GetCellData(Filepath:string,Sheetname:string)
    {
        try {
           //workbook from file
           const workbook= xlxs.readFile(Filepath)
           //get all sheets form work book
           const sheet = workbook.Sheets[Sheetname]
           //convert all sheet data into excel file
           const jsondata=xlxs.utils.sheet_to_json(sheet)
           return jsondata
        } catch (error) {
            console.log(error)
            
        }
    }
}