import { type Page } from '@playwright/test';
import { BasePage } from './/basePage.po'

const selectors = {
    loginInput: "input[data-testid=email]",
    passwordInput: "input[data-testid=password]",
    loginButton: "button[data-testid=logInButton]",
}
export class LoginPage extends BasePage {
    constructor(page: Page){
        super(page, '');
    }

    async loginToWerk8(page: Page, login: string, password: string){
        await page.locator(selectors.loginInput).fill(login);
        await page.locator(selectors.passwordInput).fill(password);
        await page.locator(selectors.loginButton).click();
    }
}