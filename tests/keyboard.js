const  {chromium} = require('playwright');

(async()=>{
    const browser = await chromium.launch({headless: false, slowMo:100});
    const page = await browser.newPage();
    await page.goto ('https://the-internet.herokuapp.com/key_presses');

    await page.click('input');
    await page.keyboard.type ('victory lies in persistence');
    await page.keyboard.down('Shift');
    for (let i=0; i<'persistence'.length; i++){
        await page.keyboard.press('ArrowLeft');
    }
    await page.keyboard.up('Shift');
    await page.keyboard.press('Backspace');
    await page.keyboard.type('preparation')

    await browser.close();

})();