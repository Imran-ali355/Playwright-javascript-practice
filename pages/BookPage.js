class BookPage {
    constructor(page) {
        this.page = page;
        this.firstName = page.locator('#first_name');
        this.lastName = page.locator('#last_name');
        this.address = page.locator('#address');
        this.ccNum = page.locator('#cc_num');
        this.ccTypeSelect = page.locator('#cc_type');
        this.expMonth = page.locator('#cc_exp_month');
        this.expYear = page.locator('#cc_exp_year');
        this.cvv = page.locator('#cc_cvv');
        // this.bookNowBtn = page.getByRole('button', { name: 'Book Now' });
        this.bookNowBtn = page.locator('#book_now');
        this.cancelBtn = page.locator('#cancel');
        this.orderNo = page.locator('#order_no');
      this.logoutBtn = page.getByRole('link', { name: 'Logout' });
        this.indexLink = page.locator('a[href="index.php"]');
        this.firstNameError = page.locator('#first_name_span');
        this.ccNumError = page.locator('#cc_num_span');
        this.ccCvvError = page.locator('#cc_cvv_span');
    }

    async bookHotel(data, expiryMonth, fullExpiryYear) {
        await this.firstName.fill(data.firstname);
        await this.lastName.fill(data.lastname);
        await this.address.fill(data.billingaddress);
        await this.ccNum.fill(data.creditcardnumber);
        await this.ccTypeSelect.selectOption(data.creditcardtype);

        const monthIndex = Number(expiryMonth);
        if (!Number.isNaN(monthIndex) && monthIndex >= 1 && monthIndex <= 12) {
            await this.expMonth.selectOption({ index: monthIndex - 1 });
        } else {
            await this.expMonth.selectOption({ label: expiryMonth });
        }

        await this.expYear.selectOption({ label: fullExpiryYear });
        await this.cvv.fill(data.cvv);
        await this.bookNowBtn.click();
    }

        async logoutAndReturn() {
        await this.logoutBtn.click();
        await this.indexLink.click();
    }
};
export default BookPage;