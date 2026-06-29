const { test, chromium } = require('@playwright/test');


const path = require('path');

test('Use saved session', async () => {
    const authFile = path.join(__dirname, '../../auth/cse.json');

    const browser = await chromium.launch({ headless: false });


    // 👇 Load session here
    const context = await browser.newContext({
        storageState: authFile
    });

    const page = await context.newPage();

    await page.goto('https://fsac-staging.cloud.tbintra.net/spear-int');

    // Click SSO login
    await page.getByRole('button', {
        name: 'Login with Daimler ID'
    }).click();

    // You are already logged in 🎉
    console.log('Session reused successfully');

    await page.getByRole('navigation').getByText('Project').click();
    await page.getByRole('button', { name: 'Create New Project' }).click();
    await page.locator('#mat-select-4 svg').click();
    await page.getByRole('option', { name: 'MDT' }).click();
    await page.locator('#mat-select-value-5').click();
    await page.getByRole('option', { name: 'Diesel' }).click();
    await page.locator('#mat-select-value-6').click();
    await page.getByRole('option', { name: 'Domestic' }).click();
    await page.locator('#mat-select-value-7').click();
    await page.getByRole('option', { name: 'BU' }).click();
    await page.locator('#mat-select-value-9').click();
    await page.getByRole('option', { name: 'Sample' }).click();
    await page.locator('#mat-select-value-8').click();
    await page.getByRole('option', { name: 'Cluster I', exact: true }).click();
    await page.getByRole('textbox', { name: 'Project Name *' }).click();
    await page.getByRole('textbox', { name: 'Project Name *' }).fill('TestAuto1');
    await page.getByRole('textbox', { name: 'Manufacturing Location *' }).click();
    await page.getByRole('textbox', { name: 'Manufacturing Location *' }).fill('Kawasaki');
    await page.locator('#mat-select-value-10').click();
    await page.getByRole('option', { name: 'Japan' }).click();
    await page.getByRole('option', { name: 'India' }).locator('mat-pseudo-checkbox').click();
    // await page.locator('.cdk-overlay-backdrop').click();
    await page.getByRole('textbox', { name: 'Region *' }).fill('Japan');
    await page.getByRole('textbox', { name: 'RR Market *' }).fill('r!@#$%');
    await page.getByRole('textbox', { name: 'D-Code *' }).fill('D1234');
    await page.getByRole('textbox', { name: 'Model Year *' }).fill('2926');
    // await page.locator('#mat-select-11 > .mat-mdc-select-trigger > .mat-mdc-select-arrow-wrapper > .mat-mdc-select-arrow > svg').click();
    await page.pause();
    await page.gestByRole('option', { name: 'QG5' }).click();
    await page.getByRole('textbox', { name: 'QG9 *' }).fill('2026-06-18');
    await page.getByRole('textbox', { name: 'QG8 *' }).fill('2026-05-20');
    await page.getByRole('textbox', { name: 'QG7 *' }).fill('2026-05-22');
    await page.getByRole('textbox', { name: 'QG8 *' }).fill('2026-06-20');
    await page.getByRole('textbox', { name: 'QG7 *' }).fill('2026-06-22');
    await page.getByRole('textbox', { name: 'QG6 *' }).fill('2026-07-23');
    await page.getByRole('textbox', { name: 'QG5 *' }).fill('2026-07-30');
    await page.getByRole('textbox', { name: 'QG7 *' }).fill('2026-08-05');
    await page.getByRole('textbox', { name: 'QG4 *' }).fill('2026-08-31');


    await browser.close();
});
