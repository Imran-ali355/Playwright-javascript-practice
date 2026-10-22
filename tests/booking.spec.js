import { test, expect } from '@playwright/test';
const searchData = require('../test_Data/searchData.json');
const bookData = require('../test_Data/bookData.json');
const appConfig = require('../test_Data/appConfig.json');
import SearchPage from '../pages/Searchpage';
import BookPage from '../pages/BookPage';

//test.use({ storageState: 'auth.json' });

test.describe('Adactin Hotel - ', () => {
    let searchPage;
    let bookPage;
    const sData = searchData.validSearches[0];


    test.beforeEach(async ({ page }) => {
        searchPage = new SearchPage(page);
        bookPage = new BookPage(page);

        await page.goto(appConfig.urls.expectedSearchURL);
        await expect(page).toHaveURL(appConfig.urls.expectedSearchURL, { timeout: 90000 });

        await searchPage.searchHotel(sData);

        await expect(page).toHaveURL(appConfig.urls.expectedSelectURL);

        await searchPage.selectAndContinue();
        await expect(page).toHaveURL(appConfig.urls.expectedBookURL);
    });

    test.afterEach(async ({ page }) => {
        await page.click('text=Logout');
    });


    test('TC-014. Successful Hotel Booking with Valid Data', async ({ page }) => {
        const bData = bookData.booking[0];
        const [expiryMonth, fullExpiryYear] = bData.expirydate.split('/');

        await bookPage.bookHotel(bData, expiryMonth, fullExpiryYear);
        await expect(page).toHaveURL(appConfig.urls.expectedConfirmURL, { timeout: 150000 });

        await expect(bookPage.orderNo).not.toHaveValue('');
    });



    test('TC-015. Verify Error Message when First Name is Empty', async ({ page }) => {

        const bData = { ...bookData.booking[0], firstname: '' };
        const [expiryMonth, fullExpiryYear] = bData.expirydate.split('/');

        await bookPage.bookHotel(bData, expiryMonth, fullExpiryYear);

        const firstNameError = page.locator('#first_name_span');
        await expect(firstNameError).toBeVisible();
    });


    test('TC-016. Verify Error Message when Last Name is Empty', async ({ page }) => {
        const bData = { ...bookData.booking[0], lastname: '' };
        const [expiryMonth, fullExpiryYear] = bData.expirydate.split('/');

        await bookPage.bookHotel(bData, expiryMonth, fullExpiryYear);

        const lastNameError = page.locator('#last_name_span');
        await expect(lastNameError).toBeVisible();
    });


    test('TC-017. Verify Error Message with Invalid Credit Card Number', async ({ page }) => {
        const bData = { ...bookData.booking[0], creditcardnumber: '12345' };
        const [expiryMonth, fullExpiryYear] = bData.expirydate.split('/');

        await bookPage.bookHotel(bData, expiryMonth, fullExpiryYear);

        const ccError = page.locator('#cc_num_span');
        await expect(ccError).toContainText('Please Enter your 16 Digit Credit Card Number');
    });


    test('TC-018. Verify Hotel Summary Details are Displayed on Booking Page', async ({ page }) => {
        await expect(page.locator('#hotel_name_dis')).not.toHaveValue('');
        await expect(page.locator('#location_dis')).not.toHaveValue('');
        await expect(page.locator('#room_num_dis')).not.toHaveValue('');
        await expect(page.locator('#total_price_dis')).not.toHaveValue('');
    });


    test('TC-019. Verify Cancel Button redirects back to Select Page', async ({ page }) => {
        const cancelButton = page.locator('#cancel');
        if (await cancelButton.isVisible()) {
            await cancelButton.click();
            await expect(page).toHaveURL(appConfig.urls.expectedSelectURL);
        }
    });



    test.skip('TC-020. Verify User can Logout directly from Booking Page', async ({ page }) => {
        await bookPage.logoutAndReturn();
        await expect(page).toHaveURL(appConfig.urls.expectedindexURL);
    });

});