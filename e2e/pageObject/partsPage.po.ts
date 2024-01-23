import { type Page } from '@playwright/test';

export const selectors = {
    addPartsButton: "button[data-testid=addPartsButton]",
    //addPartsFromSupplierButton: "", - No proper selector
    //addPartsManuallyButton: "", - No proper selector
}

export class PartsPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async addPartToStock(partName: string, quantity: string, purchasePrice: string, salesPrice: string, partNumber: string, orderNumber: string) {
        
    }
}