import { test, expect } from '@playwright/test';
import loginData from '../../fixtures/loginData.json';
import { CalendarPage } from '../pageObject/calendarPage.po';
import { LoginPage } from '../pageObject/loginPage.po';

test.describe('calendar tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://dev.werk8.app/');
        const loginPage = new LoginPage(page);
        await loginPage.loginToWerk8(page, loginData.login, loginData.password);
      });

    test('should change to week view', async ({ page }) => {
        const calendarPage = new CalendarPage(page);
        await calendarPage.switchToWeekView(page);
        await expect(page).toHaveURL(/schedule\/week-view/);
    });
    
    test('should change to workspaces view', async ({ page }) => {
        const calendarPage = new CalendarPage(page);
        await calendarPage.switchToWorkspacesView(page);
        await expect(page).toHaveURL(/workspace/);
    });
})
