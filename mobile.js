const  {chromium, devices} = require('playwright');
const iPhone = devices['iPhone 11'];

(async()=>{
    const browser = await chromium.launch({headless: false, slowMo:300});
    const context = await browser.newContext({
        ...iPhone,
        permissions: ['geolocation'],
        geolocation: {latitude: 53.88397, longitude: 27.53874},
        locale: 'by-BY'
    });
    const page = await context.newPage();
    await page.goto ('https://www.google.com/maps');
    await page.waitForTimeout(5000);
    await browser.close();

})();