import { test, expect, type Page } from '@playwright/test';

const selectors = {
    loginInput: "input[data-testid=email]",
    passwordInput: "input[data-testid=password]",
    loginButton: "button[data-testid=logInButton]",
}
export class LoginPage{
    readonly page: Page;

    constructor(page: Page)
    {
        this.page = page;
    }

    async loginToWerk8(page: Page, login: string, password: string){
        await page.locator(selectors.loginInput).fill(login);
        await page.locator(selectors.passwordInput).fill(password);
        await page.locator(selectors.loginButton).click();
    }
}