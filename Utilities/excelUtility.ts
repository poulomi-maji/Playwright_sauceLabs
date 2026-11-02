import ExcelJS from "exceljs";

/**
 * 1- readExcel --> it will read the whole excel file
 * 2- getRowValues --> it will read a specific row
 * 3- getCellValues --> it will read a specific cell
 * 4- writeExcel --> it will update the existing excel file
 */

export async function readExcel(
    filePath:string,
    sheetname:string
) {
    let book = new ExcelJS.Workbook();
    await book.xlsx.readFile(filePath)
    let sheet = await book.getWorksheet(sheetname)
    let data: any[][]=[]
    sheet!.eachRow((row)=>{
        let rowdata:any[]=[]
        row.eachCell((cell)=>{
            rowdata.push(cell.toString())
        })
        data.push(rowdata)
    })
    return data
    
}