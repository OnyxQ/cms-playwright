class ProjectPage {

    constructor(page) {
        this.page = page;
    }

    getSummaryCard(title) {
        return this.page.locator('mat-card').filter({
            hasText: title
        });
    }

    getTableHeader(headerName) {
        return this.page.getByRole('columnheader', {
            name: headerName,
            exact: true
        });
    }

    getPaginationControl() {
        return this.page.locator('.mat-mdc-paginator');
    }

    getProjectRows() {
        return this.page.locator('tr.mat-mdc-row');
    }
}

module.exports = { ProjectPage };