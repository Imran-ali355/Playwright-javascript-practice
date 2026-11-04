 class ConfirmationPage {
    constructor(page) {
        this.page = page;
        this.orderNoInput = page.locator('#order_no');
        this.searchButton = page.getByRole('button', { name: 'Search Hotel' });
        this.myItineraryButton = page.getByRole('button', { name: 'My Itinerary' });
        this.logoutButton = page.locator('#logout');
    }

    async clickSearch() {

        await this.searchButton.waitFor({ state: 'visible', timeout: 15000 });
        await this.searchButton.click();
    }

    async clickMyItinerary() {

        await this.myItineraryButton.waitFor({ state: 'visible', timeout: 15000 });
        await this.myItineraryButton.click();
    }

    async clickLogout() {
        await this.logoutButton.click();
    }
};
export default ConfirmationPage;