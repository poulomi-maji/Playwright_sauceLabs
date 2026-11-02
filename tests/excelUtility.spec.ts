import {test} from "@playwright/test"
import {readExcel} from "../Utilities/excelUtility"

test('excel utility execution',async()=>{
    let value= await readExcel("C:\Users\lenovo\Desktop\Playwright\Excel\exceljs.xlsx","sheet1")

    console.log(value)
})