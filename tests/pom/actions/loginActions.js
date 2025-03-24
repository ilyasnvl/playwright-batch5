import { expect } from "@playwright/test";
import loginLocators from "../locators/loginLocators";

export default class loginActions {
    /**
     * @param {import('@playwright/test').Page} page
     */

    constructor(page) {
        this.page = page;
        this.loginLocators = new loginLocators();
        this.inputUserName = page.locator(this.loginLocators.inputUserName);
        this.inputPassword = page.locator(this.loginLocators.inputPassword);
        this.btnLogin = page.locator(this.loginLocators.btnLogin);
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
      }
    async inputLogin() {
        await this.inputUserName.fill('standard_user');
        await expect(this.inputUserName).toHaveValue('standard_user');
        await this.inputPassword.fill('secret_sauce');
        await expect(this.inputPassword).toHaveValue('secret_sauce');
        await this.btnLogin.click();
    }

}