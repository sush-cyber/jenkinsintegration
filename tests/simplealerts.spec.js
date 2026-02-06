const {test, expect} = require('@playwright/test')
test('Simple Alert', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('//button[@id="alertBtn"]').click();
    

    page.on('dialog', async dialog =>{
      
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        
        await dialog.accept();


    })
    await page.waitForTimeout(3000);
})