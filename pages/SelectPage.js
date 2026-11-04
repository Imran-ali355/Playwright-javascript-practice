class SelectHotelPage {
    constructor(page) {
        this.page = page;
        this.firstRadioButton = page.locator('#radiobutton_1');
        this.continueButton = page.locator('#continue');
    }

    async selectHotel() {
        await this.firstRadioButton.click();
        await this.continueButton.click();
    }
}

export default SelectHotelPage;