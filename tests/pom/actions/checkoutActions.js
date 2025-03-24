import { expect } from "@playwright/test";
import checkoutLocators from "../locators/checkoutLocators";

export default class checkoutActions {
    /**
     * @param {import('@playwright/test').Page} page
     */

    constructor(page) {
        this.page = page;
        this.checkoutLocators = new checkoutLocators();
        this.btnCheckout = page.locator(this.checkoutLocators.btnCheckout);
        this.inputFirstName = page.locator(this.checkoutLocators.inputFirstName);
        this.inputLastName = page.locator(this.checkoutLocators.inputLastName);
        this.postalCode = page.locator(this.checkoutLocators.postalCode);
        this.btnSubmit = page.locator(this.checkoutLocators.btnSubmit);
        this.btnFinish = page.locator(this.checkoutLocators.btnFinish);
    };

    async checkoutItem() {
        await this.btnCheckout.click();
        await this.inputFirstName.fill('Ilyas');
        await expect(this.inputFirstName).toHaveValue('Ilyas');
        await this.inputLastName.fill('Nauval');
        await expect(this.inputLastName).toHaveValue('Nauval');
        await this.postalCode.fill('88990');
        await expect(this.postalCode).toHaveValue('88990');
        await this.btnSubmit.click();
        await this.btnFinish.click();
        await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
        await expect(page.getByText('Thank you for your orders!')).toBeVisible();
    }

}