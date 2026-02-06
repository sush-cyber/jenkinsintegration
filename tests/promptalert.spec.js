const {test, expect} = require('@playwright/test')
test('Simple Alert', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('//button[@id="promptBtn"]').click();
    
    await page.waitForTimeout(6000);
    page.on('dialog', async dialog=>{

    expect(dialog.type()).toContain('prompt');
    expect(dialog.message()).toContain('Please enter your name:');

    expect(dialog.defaultValue()).toContain('Harry Potter');
    
    await dialog.accept('Sush');


    })
// await page.locator('//button[@id="promptBtn"]').click();

await page.waitForTimeout(5000);

})