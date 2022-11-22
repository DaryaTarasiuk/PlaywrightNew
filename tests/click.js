const  {chromium} = require('playwright');

(async()=>{
    const browser = await chromium.launch({headless: false, slowMo:500});
    const page = await browser.newPage();
    await page.goto ('http://www.apronus.com/music/lessons/unit01.htm');
    //click 
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1) > button');
    await browser.close();

})();