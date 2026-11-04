class ItineraryPage {
    constructor(page) {
        this.page = page;
        this.checkAll = page.locator('#check_all');
        this.cancelSelectedBtn = page.locator('#btn_id_1');
        this.searchOrderInput = page.locator('#order_id_text');
        this.searchOrderBtn = page.locator('#search_order_id');
    }

    async cancelAllBookings() {
        await this.checkAll.click();
        await this.cancelSelectedBtn.click();
    }
};
export default ItineraryPage;