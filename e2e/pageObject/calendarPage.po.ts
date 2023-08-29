import { test, expect, type Page } from '@playwright/test';

const selectors = {
    dayViewButton: "button[data-testid=day-view-button]",
    weekViewButton: "button[data-testid=week-view-button]",
    mechanicsViewButton: "button[data-testid=mechanics-button]",
    workspacesViewButton: "button[data-testid=workspaces-button]",
}

export class CalendarPage{
    readonly page: Page;

    constructor(page: Page)
    {
        this.page = page;
    }
    
    async switchToDayView(page: Page){
        await page.locator(selectors.dayViewButton).click();
    }
    
    async switchToWeekView(page: Page){
        await page.locator(selectors.weekViewButton).click();
    }
    
    async switchToMechanicsView(page: Page){
        await page.locator(selectors.mechanicsViewButton).click();
    }
    
    async switchToWorkspacesView(page: Page){
        await page.locator(selectors.workspacesViewButton).click();
    }
}

