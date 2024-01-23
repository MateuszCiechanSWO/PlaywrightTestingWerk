import { type Page } from '@playwright/test';
import { BasePage } from './/basePage.po';

export const selectors = {
    addPartsButton: "button[data-testid=addPartsButton]",
    //addPartsFromSupplierButton: "", - No proper selector
    //addPartsManuallyButton: "", - No proper selector
}

export class PartsPage extends BasePage {

    constructor(page: Page) {
        super(page, '');
    }

    async addPartToStock(partName: string, quantity: string, purchasePrice: string, salesPrice: string, partNumber: string, orderNumber: string) {
        
    }
}