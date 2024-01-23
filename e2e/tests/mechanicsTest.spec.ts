import { test, expect } from '@playwright/test';
import loginData from '../../fixtures/loginData.json';
import mechanicData from '../../fixtures/mechanicData.json';
import { MechanicsPage, selectors as SMechanicsPage} from '../pageObject/mechanicsPage.po';
import { LoginPage } from '../pageObject/loginPage.po';

test.describe('Mechanic tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://dev.werk8.app/');
    const loginPage = new LoginPage(page);
    await loginPage.loginToWerk8(page, loginData.login, loginData.password);
  });

  test.only('should add and delete new mechanic', async ({ page }) => {
    const mechanicsPage = new MechanicsPage(page);
    const timestamp = Date.now().toString();
    await page.goto('https://dev.werk8.app/resources/garage-mechanics');
    await page.locator(SMechanicsPage.addMechanicButton).click();
    await mechanicsPage.typeMechanicFullName(page, mechanicData.mechanicName+timestamp);
    await mechanicsPage.typePrefix(page, mechanicData.prefix);
    await mechanicsPage.typePhoneNumber(page, mechanicData.phoneNumber);
    await page.locator(SMechanicsPage.saveAndInviteButton).click();
    await page.locator('span:has-text("Done")').click();
    await page.getByRole('link', { name: 'E2 e2eMechanic'+timestamp+' CHF 100/h' }).click();
    await page.locator('span:has-text("Delete")').nth(1).click();
    await page.getByRole('button', { name: 'Delete' }).click();
  });

})

