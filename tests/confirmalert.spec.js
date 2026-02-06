const {test, expect} = require('@playwright/test')
test('Simple Alert', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('//button[@id="confirmBtn"]').click();
    await page.waitForTimeout(5000);

    page.on('dialog', async dialog=>{
        
        expect(dialog.type()).toContain('confirm');
       
        expect(dialog.message()).toContain('Press a button!');

        await dialog.dismiss();

    })
//  await page.locator('//button[@id="confirmBtn"]').click();
await page.waitForTimeout(3000);
})