import { test, expect } from '@playwright/test';
const searchData = require('../test_Data/searchData.json');
const appConfig = require('../test_Data/appConfig.json');
import SearchPage from '../pages/Searchpage';

test.describe('Search hotel page', () => {
    let searchPage;
    test.beforeEach(async ({ page }) => {
        searchPage = new SearchPage(page);
        await page.goto(appConfig.urls.expectedSearchURL);
        await expect(page).toHaveURL(appConfig.urls.expectedSearchURL, { timeout: 90000 });
    });

    test('TC-008. Verify all search form input fields and dropdowns are visible', async ({ page }) => {
        await expect(searchPage.locationDropdown).toBeVisible();
        await expect(searchPage.hotelsDropdown).toBeVisible();
        await expect(searchPage.roomTypeDropdown).toBeVisible();
        await expect(searchPage.roomNosDropdown).toBeVisible();
        await expect(searchPage.checkInInput).toBeVisible();
        await expect(searchPage.checkOutInput).toBeVisible();
        await expect(searchPage.adultsDropdown).toBeVisible();
        await expect(searchPage.childrenDropdown).toBeVisible();
        await expect(searchPage.submitButton).toBeVisible();
    });

    searchData.validSearches.forEach((sData, index) => {
        test(`TC-OO9 ${index + 1} Should search and select hotel successfully for location: ${sData.location}`, async ({ page }) => {
            await searchPage.searchHotel(sData);

            await expect(page).toHaveURL(appConfig.urls.expectedSelectURL);

            await expect(page.locator('#select_form')).toBeVisible();
        });
    });


    test('TC-010. Should show error when Check-In date is later than Check-Out date', async ({ page }) => {
        const invalidData = searchData.invalidSearches[0];
        await searchPage.searchHotel(invalidData);

        await expect(searchPage.checkInError).toBeVisible();
        await expect(searchPage.checkInError).toContainText(invalidData.errorMsg);
    });

    test('TC-011. Verify Reset button clears or resets search form fields', async ({ page }) => {

        await searchPage.locationDropdown.selectOption('Sydney');
        await searchPage.roomTypeDropdown.selectOption('Standard');

        await searchPage.resetForm();

        await expect(searchPage.locationDropdown).toHaveValue('');
    });

    test('TC-012. Should show validation error when location is not selected', async ({ page }) => {

        await searchPage.submitButton.click();

        const locationError = page.locator('#location_span');
        await expect(locationError).toBeVisible();
        await expect(locationError).toContainText('Please Select a Location');
    });


    test('TC-013. Verify User can Logout from Search Page successfully', async ({ page }) => {
        await searchPage.logoutLink.click();
        await expect(page).toHaveURL('https://adactinhotelapp.com/Logout.php', { timeout: 90000 });
    });

});