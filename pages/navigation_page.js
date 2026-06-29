class NavigationPage {


    constructor(page) {

        this.page = page;
    }

    // =====================================
    // CSE LOCATORS
    // =====================================

    async clickCseProjectMenu() {

        await this.page.pause();
    }

    async clickCseDashboardMenu() {

        await this.page
            .getByRole('navigation')
            .getByText('Dashboard')
            .click();
    }

    // =====================================
    // VP MEMBER LOCATORS
    // =====================================

    async clickVpDashboardMenu() {

        await this.page.getByRole('listitem').filter({ hasText: 'Dashboard' }).click();

    }

    async clickVpProjectMenu() {

        await this.page.getByRole('listitem').filter({ hasText: 'Project' }).click();
    }
    async clickVpNotificationMenu() {


        await this.page.getByText('Notification').click();


    }
    async clickVpWorkOrderMenu() {
        await this.page.getByRole('listitem').filter({ hasText: 'Work Orders' }).click();

    }
    async clickVpMasterDataMenu() {
        await this.page.getByRole('listitem').filter({ hasText: 'Master Data' }).click();

    }


    getBreadcrumb() {
        return this.page.locator('.cms-breadcrumb');
    }



}

module.exports = {
    NavigationPage
};
