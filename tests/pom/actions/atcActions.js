import { expect } from "@playwright/test";
import atcLocators from "../locators/atcLocators";

export default class atcActions {
    /**
     * @param {import('@playwright/test').Page} page
     */

    constructor(page) {
        this.page = page;
        this.atcLocators = new atcLocators();
        this.btnAtc = page.locator(this.atcLocators.btnAtc);
        this.iconCart = page.locator(this.atcLocators.iconCart);
    };

    async clickBtn() {
        await this.btnAtc.click();
        await this.iconCart.click();
    }

}