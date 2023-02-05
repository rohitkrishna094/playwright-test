// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async({ page }) => {
    const res = await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);

    // @ts-ignore
    await expect(res.status()).toBe(200);
});

test('get started link', async({ page }) => {
    await page.goto('https://playwright.dev/');

    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();

    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*intro/);
});

const links = [
    'https://playwright.dev/',
    'https://httpstatus.io/',
    'https://stackoverflow.com/',
    'https://developer.mozilla.org/',
    'https://www.lambdatest.com/',
    'https://www.zdnet.com/',
    'https://developers.google.com/',
    'https://tools.pingdom.com/',
    'https://medium.com/',
    'https://gtmetrix.com/',
];

links.forEach(link => {
    test(`visiting ${link}`, async({ page }) => {
        const res = await page.goto(link);

        // @ts-ignore
        await expect(res.status()).toBe(200);
    });

});