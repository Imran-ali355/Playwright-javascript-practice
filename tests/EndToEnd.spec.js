// import { test, expect } from '@playwright/test';
// const loginData = require('../test_Data/loginData.json');
// import { LoginPage } from '../pages/LoginPage';
// import { SearchPage } from '../pages/Searchpage';
// import { BookPage } from '../pages/BookPage';
// import { ItineraryPage } from '../pages/ItineraryPage';


// loginData.validUser.forEach((data) => {
//     test(`Login and book hotel`, async ({ page }) => {
//         const loginPage = new LoginPage(page);
//         const searchPage = new SearchPage(page);
//         const bookPage = new BookPage(page);

//         await loginPage.goto();
//         await loginPage.login(data.username, data.password);

       
//             const [expiryMonth, fullExpiryYear] = data.expirydate.split('/');

//             await expect(page).toHaveURL(data.expectedSearchURL, { timeout: 80000 });

//             await searchPage.searchHotel(data);
//             await expect(page).toHaveURL(data.expectedSelectURL);

//             await searchPage.selectAndContinue();
//             await expect(page).toHaveURL(data.expectedBookURL);

//             await bookPage.bookHotel(data, expiryMonth, fullExpiryYear);
//             await expect(page).toHaveURL(data.expectedConfirmURL, { timeout: 80000 });

//             await expect(bookPage.orderNo).not.toHaveValue('');

//             await bookPage.logoutAndReturn();
//             await expect(page).toHaveURL(data.expectedindexURL);
        
//     });
// });

import { test, expect } from '@playwright/test';
const searchData = require('../test_Data/searchData.json');
const bookData = require('../test_Data/bookData.json');
const appConfig = require('../test_Data/appConfig.json');
import SearchPage from '../pages/Searchpage';;
import BookPage from '../pages/BookPage';


test.use({ storageState: 'auth.json' });

test('Login and book hotel', async ({ page }) => {

    const searchPage = new SearchPage(page);
    const bookPage = new BookPage(page);

    const sData = searchData.search[0];
    const bData = bookData.booking[0];
    
    await page.goto(appConfig.urls.expectedSearchURL);
    await expect(page).toHaveURL(appConfig.urls.expectedSearchURL, { timeout: 90000 });

    await searchPage.searchHotel(sData);
    await expect(page).toHaveURL(appConfig.urls.expectedSelectURL);

    await searchPage.selectAndContinue();
    await expect(page).toHaveURL(appConfig.urls.expectedBookURL);

    const [expiryMonth, fullExpiryYear] = bData.expirydate.split('/');

    await bookPage.bookHotel(bData, expiryMonth, fullExpiryYear);
    await expect(page).toHaveURL(appConfig.urls.expectedConfirmURL, { timeout: 90000 });

    await expect(bookPage.orderNo).not.toHaveValue('');

    await bookPage.logoutAndReturn();
    await expect(page).toHaveURL(appConfig.urls.expectedindexURL);
});
   