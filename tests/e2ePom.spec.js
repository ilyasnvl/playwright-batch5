import { test } from '@playwright/test';
const { default: loginActions } = require('./pom/actions/loginActions');
const { default: atcActions } = require('./pom/actions/atcActions');
const { default: checkoutActions } = require('./pom/actions/checkoutActions')

test('E2E POM login to checkout', async ({ page }) => {
    const loginObj = new loginActions(page);
    await loginObj.goto();
    await loginObj.inputLogin();

    const clickBtnObj = new atcActions(page);
    await clickBtnObj.clickBtn();

    const CheckoutObj = new checkoutActions(page);
    await CheckoutObj.checkoutItem();
});





