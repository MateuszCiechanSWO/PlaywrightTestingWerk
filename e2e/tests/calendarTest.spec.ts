import { test, expect } from '@playwright/test';
import loginData from '../../fixtures/loginData.json';
import { CalendarPage } from '../pageObject/calendarPage.po';
import { LoginPage } from '../pageObject/loginPage.po';

test('should change to week view', async ({ page }) => {
    const testPage = new CalendarPage(page);
    const loginPage = new LoginPage(page);
    await page.goto('/');
    await loginPage.loginToWerk8(page, loginData.login, loginData.password);
    await expect(page).toHaveURL(/schedule\/day-view/);
    await testPage.switchToWeekView(page);
    await expect(page).toHaveURL(/schedule\/week-view/);
});

test('should change to workspaces view', async ({ page }) => {
    const testPage = new CalendarPage(page);
    const loginPage = new LoginPage(page);
    await page.goto('/');
    await loginPage.loginToWerk8(page, loginData.login, loginData.password);
    await expect(page).toHaveURL(/schedule\/day-view/);
    await testPage.switchToWorkspacesView(page);
    await expect(page).toHaveURL(/workspace/);
});