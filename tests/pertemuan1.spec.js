// @ts-check
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
});

test('Login with invalid username', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');

    const inputUserName = await page.locator('#user-name');
    await inputUserName.fill('usernotvalid');
    await expect(inputUserName).toHaveValue('usernotvalid');

    const inputPassword = await page.locator('#password');
    await inputPassword.fill('secret_sauce');
    await expect(inputPassword).toHaveValue('secret_sauce');

    const btnLogin = page.locator('#login-button');
    await btnLogin.click();

    //Verify error message is shown
    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
});

test('Login with invalid password', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');

    const inputUserName = await page.locator('#user-name');
    await inputUserName.fill('standard_user');
    await expect(inputUserName).toHaveValue('standard_user');

    const inputPassword = await page.locator('#password');
    await inputPassword.fill('password');
    await expect(inputPassword).toHaveValue('password');

    const btnLogin = page.locator('#login-button');
    await btnLogin.click();

    //Verify error message is shown
    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
});

test('Login without fill username', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');

    const inputUserName = await page.locator('#user-name');
    await inputUserName.fill('');
    await expect(inputUserName).toHaveValue('');

    const inputPassword = await page.locator('#password');
    await inputPassword.fill('secret_sauce');
    await expect(inputPassword).toHaveValue('secret_sauce');

    const btnLogin = page.locator('#login-button');
    await btnLogin.click();

    //Verify error message is shown
    await expect(page.getByText('Epic sadface: Username is required')).toBeVisible();
});

test('Login without fill password', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');

    const inputUserName = await page.locator('#user-name');
    await inputUserName.fill('standard_user');
    await expect(inputUserName).toHaveValue('standard_user');

    const inputPassword = await page.locator('#password');
    await inputPassword.fill('');
    await expect(inputPassword).toHaveValue('');

    const btnLogin = page.locator('#login-button');
    await btnLogin.click();

    //Verify error message is shown
    await expect(page.getByText('Epic sadface: Password is required')).toBeVisible();
});

test('Login without fill credential username and password', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');

    const inputUserName = await page.locator('#user-name');
    await inputUserName.fill('');
    await expect(inputUserName).toHaveValue('');

    const inputPassword = await page.locator('#password');
    await inputPassword.fill('');
    await expect(inputPassword).toHaveValue('');

    const btnLogin = page.locator('#login-button');
    await btnLogin.click();

    //Verify error message is shown
    await expect(page.getByText('Epic sadface: Username is required')).toBeVisible();
});