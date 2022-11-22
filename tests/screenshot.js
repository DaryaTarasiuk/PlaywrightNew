const  {chromium} = require('playwright');

(async()=>{
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto ('https://applitools.com/');
    //take screenshot code

    await page.screenshot({path:'screenshot.png'})
    //take a screenshot of one element ob the page
    const logo = await page.$('.logo');
    await logo.screenshot ({path:'logo.png'})
    //take a screenshot of the whole page 
    await page.screenshot({path:'fullpage.png', fullPage:true});
    await browser.close();

})();