const  {chromium, devices} = require('playwright');
const iPhone = devices['iPhone 11'];

(async()=>{
    const browser = await chromium.launch({headless: false, slowMo:300});
    const context = await browser.newContext({
        ...iPhone,
        permissions: ['geolocation'],
        geolocation: {latitude: 54.72442, longitude: 28.07447},
        locale: 'by-BY'
    });
    const page = await context.newPage();
    await page.goto ('https://www.google.com/maps');
    await page.waitForTimeout(5000);
    await browser.close();

})();