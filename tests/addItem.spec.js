import { test, expect } from '@playwright/test';

//test.use({ storageState: 'auth.json'});

test('Add item from item detail', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');
    await expect(page).toHaveTitle('Swag Labs')

    const linkProductDetail = page.locator('#item_4_title_link > div');
    await linkProductDetail.click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=4');
});

test('Add item from item list', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');
    await expect(page).toHaveTitle('Swag Labs');

    const btnAtc = page.locator('#add-to-cart-sauce-labs-fleece-jacket');
    await btnAtc.click();

    //verify text di button berubah setelah atc
    const btnRemove = page.locator('#remove-sauce-labs-fleece-jacket');
    await expect(btnRemove).toHaveText('Remove');
});