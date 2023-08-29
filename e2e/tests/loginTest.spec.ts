import { test, expect } from '@playwright/test';
import loginData from '../../fixtures/loginData.json';
import { LoginPage } from '../pageObject/loginPage.po';

test('login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto('/');
  await loginPage.loginToWerk8(page, loginData.login, loginData.password);
  await expect(page).toHaveURL(/schedule\/day-view/);
});

