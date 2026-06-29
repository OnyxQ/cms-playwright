const {
    NavigationPage
} = require('../pages/navigation_page');
const { expect } = require('@playwright/test');
class NavigationService {

    constructor(page, role) {

        this.page = page;

        this.role = role;

        this.navigationPage =
            new NavigationPage(page);
    }


    async navigateToProject() {
        let expectedUrl;

        switch (this.role) {

            case 'cse':

                await this.navigationPage
                    .clickCseProjectMenu();

                break;

            case 'vp_member_si':

                await this.navigationPage
                    .clickVpProjectMenu();
                expectedUrl = "https://fsac-staging.cloud.tbintra.net/spear-int/projects";
                break;

            default:

                throw new Error(
                    `Unsupported role: ${this.role} `
                );
        }
        await this.validateNavigation(expectedUrl);
        await this.validateBreadcrumb('Dashboard', 'Project');
    }

    async navigateToDashboard() {
        let expectedUrl
        switch (this.role) {

            case 'cse':

                await this.navigationPage
                    .clickCseDashboardMenu();

                break;

            case 'vp_member_si':

                await this.navigationPage
                    .clickVpDashboardMenu();
                expectedUrl = "https://fsac-staging.cloud.tbintra.net/spear-int/dashboard";
                break;

            default:

                throw new Error(
                    `Unsupported role: ${this.role} `
                );
        }
        await this.validateNavigation(expectedUrl);
    }
    async navigateToNotifications() {
        let expectedUrl;

        switch (this.role) {

            case 'cse':

                await this.navigationPage
                    .clickCseDashboardMenu();

                break;

            case 'vp_member_si':

                await this.navigationPage
                    .clickVpNotificationMenu();
                expectedUrl = "https://fsac-staging.cloud.tbintra.net/spear-int/notification";
                break;

            default:

                throw new Error(
                    `Unsupported role: ${this.role} `
                );
        }
        await this.validateNavigation(expectedUrl);
        await this.validateBreadcrumb('Dashboard', 'Notifications');

    }
    async navigateToWorkOrders() {
        let expectedUrl;
        switch (this.role) {

            case 'cse':

                await this.navigationPage
                    .clickCseDashboardMenu();

                break;

            case 'vp_member_si':

                await this.navigationPage
                    .clickVpWorkOrderMenu();
                expectedUrl = "https://fsac-staging.cloud.tbintra.net/spear-int/work-order";
                break;

            default:

                throw new Error(
                    `Unsupported role: ${this.role} `
                );
        }
        await this.validateNavigation(expectedUrl);
        await this.validateBreadcrumb('Dashboard', 'Work Order');


    }
    async navigateToMasterData() {
        let expectedUrl;
        switch (this.role) {

            case 'cse':

                await this.navigationPage
                    .clickCseDashboardMenu();

                break;

            case 'vp_member_si':

                await this.navigationPage
                    .clickVpMasterDataMenu();
                expectedUrl = "https://fsac-staging.cloud.tbintra.net/spear-int/master-data";
                break;

            default:

                throw new Error(
                    `Unsupported role: ${this.role} `
                );
        }
        await this.validateNavigation(expectedUrl);
        await this.validateBreadcrumb('Dashboard', 'Master Data');


    }

    async validateNavigation(expectedUrl) {

        // Verify URL
        await expect(this.page).toHaveURL(expectedUrl);

        // Verify no error messages
        await expect(this.page.locator('.error-message')).toHaveCount(0);

        // Verify no alert banners
        await expect(this.page.locator('[role="alert"]')).toHaveCount(0);

        // Optional: check common application error text
        await expect(
            this.page.locator('text=Something went wrong')
        ).toHaveCount(0);
    }
    async validateBreadcrumb(...items) {

        const breadcrumb =
            this.navigationPage.getBreadcrumb();

        for (const item of items) {
            await expect(breadcrumb)
                .toContainText(item);
        }
    }

}




module.exports = {
    NavigationService
};


