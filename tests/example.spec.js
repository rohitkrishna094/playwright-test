// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async({ page }) => {
    const res = await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);

    // @ts-ignore
    await expect(res.status()).toBe(201);
});

test('get started link', async({ page }) => {
    await page.goto('https://playwright.dev/');

    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();

    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*intro/);
});

const links = ['https://playwright.dev/'];