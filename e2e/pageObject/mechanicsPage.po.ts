import { type Page } from '@playwright/test';
import { BasePage } from './basePage.po';

export const selectors = {
    addMechanicButton: "div.add",
    fullMechanicNameInput: "input[data-testid=mechanicName]",
    prefixInput: "input[data-testid=prefix]",
    phoneNumberInput: "input[data-testid=phoneNumber]",
    saveButton: "button[data-testid=save-mechanic-button]",
    saveAndInviteButton: "button[data-testid=invite-mechanic-button]",
}

export class MechanicsPage extends BasePage {

    constructor(page: Page){
        super(page, '');
    }
    
    async typeMechanicFullName(page: Page, mechanicName: string){
        await page.locator(selectors.fullMechanicNameInput).fill(mechanicName);
    }

    async typePrefix(page: Page, prefix: string){
        await page.locator(selectors.prefixInput).click();
        await page.locator(selectors.prefixInput).fill(prefix);
    }

    async typePhoneNumber(page: Page, phoneNumber: string){
        await page.locator(selectors.phoneNumberInput).fill(phoneNumber);
    }
}