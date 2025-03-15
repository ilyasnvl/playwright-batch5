import { test, expect } from '@playwright/test';

//test.use({ storageState: 'auth.json'});

test('Add item', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');
    await expect(page).toHaveTitle('Swag Labs');

    const btnAtc = page.locator('#add-to-cart-sauce-labs-backpack');
    await btnAtc.click();

});