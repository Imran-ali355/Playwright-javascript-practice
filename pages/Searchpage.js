class SearchPage {
    constructor(page) {
        this.page = page;
        this.locationDropdown = page.locator('#location');
        this.hotelsDropdown = page.locator('#hotels');
        this.roomTypeDropdown = page.locator('#room_type');
        this.roomNosDropdown = page.locator('#room_nos');
        this.checkInInput = page.locator('#datepick_in');
        this.checkOutInput = page.locator('#datepick_out');
        this.adultsDropdown = page.locator('#adult_room');
        this.childrenDropdown = page.locator('#child_room');
        this.submitButton = page.locator('#Submit');
        this.resetButton = page.locator('#Reset');
        this.checkInError = page.locator('#checkin_span');
        this.checkOutError = page.locator('#checkout_span');
        this.logoutLink = page.getByRole('link', { name: 'Logout' });
    }

    async searchHotel(sData) {
        await this.locationDropdown.selectOption(sData.location);
        await this.hotelsDropdown.selectOption(sData.hotels);
        await this.roomTypeDropdown.selectOption(sData.roomType);
        await this.roomNosDropdown.selectOption(sData.roomNos);
        
        await this.checkInInput.fill('');
        await this.checkInInput.fill(sData.dateIn);
        
        await this.checkOutInput.fill('');
        await this.checkOutInput.fill(sData.dateOut);
        
        await this.adultsDropdown.selectOption(sData.adults);
        await this.childrenDropdown.selectOption(sData.children);
        
        await this.submitButton.click();
    }

    async selectAndContinue() {
        await this.page.locator('#radiobutton_0').click();
        await this.page.locator('#continue').click();
    }

    async resetForm() {
        await this.resetButton.click();
    }
}

export default SearchPage;