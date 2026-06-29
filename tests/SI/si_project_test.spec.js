const { test } = require('@playwright/test');
const { NavigationService } = require('../../service/navigation_service');
const { SIProjectService } = require('../../service/si_project_service');

test.use({
    storageState: 'auth/vp_member_si.json'
});

test(
    'SI Project Summary Card Test',
    async ({ page }) => {

        const navigationService =
            new NavigationService(
                page,
                'vp_member_si'
            );

        const siProjectService =
            new SIProjectService(page);

        await page.goto('');
        await page
            .getByRole('button', {
                name: 'Login with Daimler ID'
            })
            .click();
        await navigationService.navigateToProject();

        await siProjectService.validateProjectSummaryCards();
    }
);

test(
    'SI Project Table Test',
    async ({ page }) => {

        const navigationService =
            new NavigationService(
                page,
                'vp_member_si'
            );

        const siProjectService =
            new SIProjectService(page);

        await page.goto('');
        await page
            .getByRole('button', {
                name: 'Login with Daimler ID'
            })
            .click();
        await navigationService.navigateToProject();

        await siProjectService.validateProjectTableHeaders();
    }


);


test(
    'Verify Project Table Pagination',
    async ({ page }) => {

        const navigationService =
            new NavigationService(
                page,
                'vp_member_si'
            );

        const siProjectService =
            new SIProjectService(page);

        await page.goto('');

        await page
            .getByRole('button', {
                name: 'Login with Daimler ID'
            })
            .click();

        await navigationService
            .navigateToProject();

        await siProjectService
            .validatePagination();
    }
);