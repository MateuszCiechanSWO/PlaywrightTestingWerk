import { type Page } from '@playwright/test';
import { BasePage } from './/basePage.po'

const selectors = {
    createJobButton: "button[data-intercom-target=addJobSideMenuLink]",
    currentJobsButton: "button[data-intercom-target=currentJobsSideMenuLink]",
    garageResourcesButton: "button[data-intercom-target=garageResourcesSideMenuLink]",
    customersButton: "button[data-intercom-target=customersSideMenuLink]",
    vehiclesButton: "button[data-intercom-target=vehiclesSideMenuLink]",
    partsButton: "button[data-intercom-target=partsSideMenuLink]",
    invoicesButon: "button[data-intercom-target=invoicesSideMenuLink]",
    cannedTasksButton: "button[data-intercom-target=cannedTasksSideMenuLink]",
    //settingsButton: "", - no good locator
    //myAccountButton: "", - no good locator
}
export class LeftSideBarPage extends BasePage {
    constructor(page: Page){
        super(page, '');
    }

}