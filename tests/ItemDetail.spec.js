import { test, expect} from '@playwright/test';

test('Check to item detail', async ({ page })  => {
    await page.goto('https://www.saucedemo.com/inventory.html');
    await expect(page).toHaveTitle('Swag Labs');

    const ctaProduct = page.locator('#item_4_title_link > div');
    await ctaProduct.click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=4');

    //verify item detail name
    const itemDetail = await page.locator('#inventory_item_container > div > div > div.inventory_details_desc_container > div.inventory_details_name.large_size');
    await expect(itemDetail).toContainText('Sauce Labs Backpack');

    //verify item detail description
    const itemDesc = await page.locator('.inventory_details_desc.large_size');
    await expect(itemDesc).toContainText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');

    //verify item detail price
    const itemDetailPrice = page.locator('#inventory_item_container > div > div > div.inventory_details_desc_container > div.inventory_details_price');
    await expect(itemDetailPrice).toContainText('29.99')

    //verify button atc is shown    
    const btnDetailAtc  = page.locator('#add-to-cart');
    await expect(btnDetailAtc).toBeVisible();
})