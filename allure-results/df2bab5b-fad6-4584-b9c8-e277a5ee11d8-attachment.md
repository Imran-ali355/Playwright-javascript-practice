# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EndToEnd.spec.js >> Login and book hotel
- Location: tests\EndToEnd.spec.js:50:5

# Error details

```
TypeError: Cannot read properties of undefined (reading '0')
```

# Test source

```ts
  1  | // import { test, expect } from '@playwright/test';
  2  | // const loginData = require('../test_Data/loginData.json');
  3  | // import { LoginPage } from '../pages/LoginPage';
  4  | // import { SearchPage } from '../pages/Searchpage';
  5  | // import { BookPage } from '../pages/BookPage';
  6  | // import { ItineraryPage } from '../pages/ItineraryPage';
  7  | 
  8  | 
  9  | // loginData.validUser.forEach((data) => {
  10 | //     test(`Login and book hotel`, async ({ page }) => {
  11 | //         const loginPage = new LoginPage(page);
  12 | //         const searchPage = new SearchPage(page);
  13 | //         const bookPage = new BookPage(page);
  14 | 
  15 | //         await loginPage.goto();
  16 | //         await loginPage.login(data.username, data.password);
  17 | 
  18 |        
  19 | //             const [expiryMonth, fullExpiryYear] = data.expirydate.split('/');
  20 | 
  21 | //             await expect(page).toHaveURL(data.expectedSearchURL, { timeout: 80000 });
  22 | 
  23 | //             await searchPage.searchHotel(data);
  24 | //             await expect(page).toHaveURL(data.expectedSelectURL);
  25 | 
  26 | //             await searchPage.selectAndContinue();
  27 | //             await expect(page).toHaveURL(data.expectedBookURL);
  28 | 
  29 | //             await bookPage.bookHotel(data, expiryMonth, fullExpiryYear);
  30 | //             await expect(page).toHaveURL(data.expectedConfirmURL, { timeout: 80000 });
  31 | 
  32 | //             await expect(bookPage.orderNo).not.toHaveValue('');
  33 | 
  34 | //             await bookPage.logoutAndReturn();
  35 | //             await expect(page).toHaveURL(data.expectedindexURL);
  36 |         
  37 | //     });
  38 | // });
  39 | 
  40 | import { test, expect } from '@playwright/test';
  41 | const searchData = require('../test_Data/searchData.json');
  42 | const bookData = require('../test_Data/bookData.json');
  43 | const appConfig = require('../test_Data/appConfig.json');
  44 | import SearchPage from '../pages/Searchpage';;
  45 | import BookPage from '../pages/BookPage';
  46 | 
  47 | 
  48 | test.use({ storageState: 'auth.json' });
  49 | 
  50 | test('Login and book hotel', async ({ page }) => {
  51 | 
  52 |     const searchPage = new SearchPage(page);
  53 |     const bookPage = new BookPage(page);
  54 | 
> 55 |     const sData = searchData.search[0];
     |                                    ^ TypeError: Cannot read properties of undefined (reading '0')
  56 |     const bData = bookData.booking[0];
  57 |     
  58 |     await page.goto(appConfig.urls.expectedSearchURL);
  59 |     await expect(page).toHaveURL(appConfig.urls.expectedSearchURL, { timeout: 90000 });
  60 | 
  61 |     await searchPage.searchHotel(sData);
  62 |     await expect(page).toHaveURL(appConfig.urls.expectedSelectURL);
  63 | 
  64 |     await searchPage.selectAndContinue();
  65 |     await expect(page).toHaveURL(appConfig.urls.expectedBookURL);
  66 | 
  67 |     const [expiryMonth, fullExpiryYear] = bData.expirydate.split('/');
  68 | 
  69 |     await bookPage.bookHotel(bData, expiryMonth, fullExpiryYear);
  70 |     await expect(page).toHaveURL(appConfig.urls.expectedConfirmURL, { timeout: 90000 });
  71 | 
  72 |     await expect(bookPage.orderNo).not.toHaveValue('');
  73 | 
  74 |     await bookPage.logoutAndReturn();
  75 |     await expect(page).toHaveURL(appConfig.urls.expectedindexURL);
  76 | });
  77 |    
```