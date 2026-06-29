const {
    test,
    expect
} = require('@playwright/test');

const {
    NavigationService
} = require('../../service/navigation_service');

test.use({

    storageState: 'auth/vp_member_si.json'

});

test(
    'VP Member SI Navigation Test',
    async ({ browser }) => {

        const context = await browser.newContext();
        const page = await context.newPage();



        const navigationService =
            new NavigationService(
                page,
                'vp_member_si'
            );

        await page.goto('');
        await page
            .getByRole('button', {
                name: 'Login with Daimler ID'
            })
            .click();
        await navigationService
            .navigateToProject();
        await navigationService
            .navigateToNotifications();
        await navigationService
            .navigateToWorkOrders();
        await navigationService
            .navigateToMasterData();



    }


);
