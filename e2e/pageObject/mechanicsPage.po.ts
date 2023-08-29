import { test, expect, type Page } from '@playwright/test';

export const selectors = {
    addMechanicButton: "div.add",
    fullMechanicNameInput: "input[data-testid=mechanicName]",
    prefixInput: "input[data-testid=prefix]",
    phoneNumberInput: "input[data-testid=phoneNumber]",
    saveButton: "button[data-testid=save-mechanic-button]",
    saveAndInviteButton: "button[data-testid=invite-mechanic-button]",
}

export class MechanicsPage{
    readonly page: Page;

    constructor(page: Page)
    {
        this.page = page;
    }
    
    async typeMechanicFullName(page: Page, mechanicName: string){
        await page.locator(selectors.fullMechanicNameInput).fill(mechanicName);
    }

    async typePrefix(page: Page, prefix: string){
        await page.locator(selectors.prefixInput).fill(prefix);
    }

    async typePhoneNumber(page: Page, phoneNumber: string){
        await page.locator(selectors.phoneNumberInput).fill(phoneNumber);
    }
}