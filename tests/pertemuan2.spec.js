import { test, expect } from '@playwright/test';

test('Login with valid data', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');

    const inputUserName = await page.locator('#user-name');
    await inputUserName.fill('standard_user');
    await expect(inputUserName).toHaveValue('standard_user');

    const inputPassword = await page.locator('#password');
    await inputPassword.fill('secret_sauce');
    await expect(inputPassword).toHaveValue('secret_sauce');

    const btnLogin = page.locator('#login-button');
    await btnLogin.click();

    //Verify succesfully login and move to next page
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

    const btnAtc = page.locator('#add-to-cart-sauce-labs-backpack');
    await btnAtc.click();

    const btnCart = page.locator('#shopping_cart_container > a');
    await btnCart.click();

    const btnCheckout = page.locator('#checkout');
    await btnCheckout.click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');

    const inputFirstName = await page.locator('#first-name');
    await inputFirstName.fill('Ilyas');
    await expect(inputFirstName).toHaveValue('Ilyas');

    const inputLastName = await page.locator('#last-name');
    await inputLastName.fill('Nauval');
    await expect(inputLastName).toHaveValue('Nauval');

    const postalCode = await page.locator('#postal-code');
    await postalCode.fill('12345');
    await expect(postalCode).toHaveValue('12345');

    const btnSubmit = page.locator('#continue');
    await btnSubmit.click()
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');

    const btnFinish = page.locator('#finish');
    await btnFinish.click()
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
    //await expect(page.getByAltText('Thank you for your order!'));
});