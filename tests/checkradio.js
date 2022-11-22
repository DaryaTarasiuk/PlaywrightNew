const  {firefox} = require('playwright');

(async()=>{
    const browser = await firefox.launch({headless: false, slowMo:500});
    const page = await browser.newPage();
    await page.goto ('https://www.w3schools.com/howto/howto_css_custom_checkbox.asp');
    //check the second checkbox
    const checks = await page.$$('#main div :nth-child(1) input[type="checkbox"]');
    checks[1].check();
    checks[0].uncheck();
    //select the second radio button
    const radios = await page.$$('#main div :nth-child(1) input[type="radio"]');
    await radios[1].check();
    await browser.close();

})();