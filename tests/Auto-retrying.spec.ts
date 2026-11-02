import {test, expect} from '@playwright/test'

test("Practice Fixture", async({page})=>{

    await page.goto("https://www.facebook.com/");
    await expect(page).toHaveTitle("Facebook");

})

test.only("Auto-retrying", async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")
    await expect(page).toHaveTitle("Demo We")
})