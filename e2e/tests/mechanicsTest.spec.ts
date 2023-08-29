import { test, expect } from '@playwright/test';
import loginData from '../../fixtures/loginData.json';
import mechanicData from '../../fixtures/mechanicData.json';
import { MechanicsPage, selectors as SMechanicsPage} from '../pageObject/mechanicsPage.po';
import { LoginPage } from '../pageObject/loginPage.po';

test('should add new mechanic', async ({ page }) => {
  const mechanicsPage = new MechanicsPage(page);
  const loginPage = new LoginPage(page);
  const timestamp = Date.now().toString();
  await page.goto('/');
  await loginPage.loginToWerk8(page, loginData.login, loginData.password);
  await expect(page).toHaveURL(/schedule\/day-view/);
  await page.goto('/resources/garage-mechanics');
  await page.locator(SMechanicsPage.addMechanicButton).click();
  await mechanicsPage.typeMechanicFullName(page, mechanicData.mechanicName+timestamp);
  await mechanicsPage.typePrefix(page, mechanicData.prefix);
  await mechanicsPage.typePhoneNumber(page, mechanicData.phoneNumber);
  await page.locator(SMechanicsPage.saveAndInviteButton).click();
  await page.locator('span:has-text("Done")').click();
  await page.getByRole('link', { name: 'E2 e2eMechanic'+timestamp+' CHF 100/h' }).click();
  await page.locator('span:has-text("Delete")').nth(1).click();
  await page.getByRole('button', { name: 'Delete' });
});