const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  await page.goto('https://store.google.com/regionpicker');

  await page.getByRole('button', { name: 'Switch store to United States' }).click();
  await expect(page).toHaveURL('https://store.google.com/regionpicker');

  await page.getByRole('button', { name: 'Clear cart and continue to United States' }).click();
  await expect(page).toHaveURL('https://store.google.com/us/?hl=en-US&regionRedirect=true');

  await page.locator('[data-test="header-search"]').click();

  await page.getByPlaceholder('Search Google Store').fill('pixel 6a');

  await page.getByPlaceholder('Search Google Store').press('Enter');
  await expect(page).toHaveURL('https://store.google.com/us/search?q=pixel%206a&hl=en-US');

  await page.getByRole('link', { name: 'Pixel 6a (result 1 of 12) Starting from $299 reduced from $449. 3 colors available' }).click();
  await expect(page).toHaveURL('https://store.google.com/us/product/pixel_6a?hl=en-US');


})();