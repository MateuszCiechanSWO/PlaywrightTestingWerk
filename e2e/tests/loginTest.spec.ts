import { test, expect } from '@playwright/test';
import loginData from '../../fixtures/loginData.json';
import { LoginPage } from '../pageObject/loginPage.po';

test.describe('Login tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://dev.werk8.app/');
  })

  test('login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.loginToWerk8(page, loginData.login, loginData.password);
    await expect(page).toHaveURL(/schedule\/week-view/);
  });

})
