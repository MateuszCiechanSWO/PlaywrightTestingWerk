import { type Page } from '@playwright/test'

export abstract class BasePage {
  readonly page: Page
  readonly url: string

  protected constructor (page: Page, url: string) {
    this.page = page;
    this.url = url;
  }

  async navigateToURL (waitForNetworkIdle = false): Promise<void> {
    if (waitForNetworkIdle)
      await this.page.goto(this.url, { waitUntil: 'networkidle' });
    else
      await this.page.goto(this.url);
  }
}