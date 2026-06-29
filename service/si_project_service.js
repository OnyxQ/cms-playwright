const { expect } = require('@playwright/test');
const { ProjectPage } = require('../pages/si_project_page');

class SIProjectService {

    constructor(page) {
        this.page = page;
        this.projectPage = new ProjectPage(page);
    }

    async validateProjectSummaryCards() {

        const cards = [
            'Total Projects',
            'Creating',
            'Awaiting Approval',
            'In Progress',
            'On Hold',
            'Dropped'
        ];

        for (const card of cards) {
            await expect(
                this.projectPage.getSummaryCard(card)
            ).toBeVisible();
        }
    }
    async validateProjectTableHeaders() {

        const headers = [
            'Project',
            'SOP Date',
            'Status',
            'Project Category',
            'Vehicle Segment'
        ];

        for (const header of headers) {
            await expect(
                this.projectPage.getTableHeader(header)
            ).toBeVisible();
        }
    }
    async validatePagination() {

        const paginator =
            this.projectPage.getPaginationControl();

        const pageSizes = [5, 10, 25];

        for (const pageSize of pageSizes) {

            await paginator
                .locator('.mat-mdc-paginator-touch-target')
                .click();

            await this.page
                .getByRole('option', {
                    name: `${pageSize}`,
                    exact: true
                })
                .click();

            const rangeLabel =
                await paginator
                    .locator('.mat-mdc-paginator-range-label')
                    .textContent();

            const match = rangeLabel.match(
                /(\d+)\s*[-–]\s*(\d+)\s*of\s*(\d+)/
            );

            const start = Number(match[1]);
            const end = Number(match[2]);

            const expectedRows =
                end - start + 1;
            await this.page.waitForTimeout(2000);
            const actualRows =
                await this.projectPage
                    .getProjectRows()
                    .count();

            expect(actualRows)
                .toBe(expectedRows);
        }
    }









}

module.exports = {
    SIProjectService
};