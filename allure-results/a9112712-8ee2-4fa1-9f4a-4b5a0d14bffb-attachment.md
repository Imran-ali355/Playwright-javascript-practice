# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: search.spec.js >> Search hotel page >> TC-OO9 2 Should search and select hotel successfully for location: Melbourne
- Location: tests\search.spec.js:33:13

# Error details

```
Test timeout of 100000ms exceeded while running "beforeEach" hook.
```

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://adactinhotelapp.com/SearchHotel.php"
Received: "https://adactinhotelapp.com/index.php"
Timeout:  90000ms

Call log:
  - Expect "toHaveURL" with timeout 90000ms
    176 × locator resolved to <html xmlns="http://www.w3.org/1999/xhtml">…</html>
        - unexpected value "https://adactinhotelapp.com/index.php"

```

```yaml
- table:
  - rowgroup:
    - 'row "AdactIn Group Adactin Group: Hotel Reservation System"':
      - cell "AdactIn Group":
        - img "AdactIn Group"
      - 'cell "Adactin Group: Hotel Reservation System"':
        - 'img "Adactin Group: Hotel Reservation System"'
    - row:
      - cell
- table:
  - rowgroup:
    - 'row "Adactin Launches The Adactin Hotel App! Hotel Image 3 The best Free learning platform for Software Testing Now available to download for free on IOS and Android. Existing User Login - Build 1 Username Password Forgot Password? Login New User Register Here Important Note: Hotel Application has 2 builds: Build 1 Has been developed with known defects. Thus, functional test cases and automation scripts will fail on this build. Build 2 Known defects have been fixed. Thus, functional test cases and automation test scripts should pass when executed on this build. Go to Build 2 For any queries/issues please email: info@adactin.com"':
      - cell "Adactin Launches The Adactin Hotel App! Hotel Image 3 The best Free learning platform for Software Testing Now available to download for free on IOS and Android.":
        - paragraph: Adactin Launches The Adactin Hotel App!
        - table:
          - rowgroup:
            - row "Hotel Image 3":
              - cell "Hotel Image 3":
                - img "Hotel Image 3"
            - row "The best Free learning platform for Software Testing Now available to download for free on IOS and Android.":
              - cell "The best Free learning platform for Software Testing Now available to download for free on IOS and Android."
        - table:
          - rowgroup:
            - row:
              - cell:
                - link:
                  - /url: https://testflight.apple.com/join/Ai3nVPMD
                  - img
              - cell:
                - link:
                  - /url: https://play.google.com/store/apps/details?id=com.adactin.education.hotelbooking
                  - img
      - 'cell "Existing User Login - Build 1 Username Password Forgot Password? Login New User Register Here Important Note: Hotel Application has 2 builds: Build 1 Has been developed with known defects. Thus, functional test cases and automation scripts will fail on this build. Build 2 Known defects have been fixed. Thus, functional test cases and automation test scripts should pass when executed on this build. Go to Build 2 For any queries/issues please email: info@adactin.com"':
        - table:
          - rowgroup:
            - row "Existing User Login - Build 1":
              - cell "Existing User Login - Build 1"
            - row "Username":
              - cell "Username"
              - cell:
                - textbox
            - row "Password":
              - cell "Password"
              - cell:
                - textbox
            - row "Forgot Password?":
              - cell
              - cell "Forgot Password?":
                - link "Forgot Password?":
                  - /url: ForgotPassword.php
            - row:
              - cell
              - cell
            - row "Login":
              - cell
              - cell "Login":
                - button "Login"
            - row "New User Register Here":
              - cell "New User Register Here":
                - link "New User Register Here":
                  - /url: Register.php
        - table:
          - rowgroup:
            - row "Important Note:":
              - cell "Important Note:"
            - 'row "Hotel Application has 2 builds: Build 1 Has been developed with known defects. Thus, functional test cases and automation scripts will fail on this build. Build 2 Known defects have been fixed. Thus, functional test cases and automation test scripts should pass when executed on this build. Go to Build 2"':
              - 'cell "Hotel Application has 2 builds: Build 1 Has been developed with known defects. Thus, functional test cases and automation scripts will fail on this build. Build 2 Known defects have been fixed. Thus, functional test cases and automation test scripts should pass when executed on this build. Go to Build 2"':
                - text: "Hotel Application has 2 builds:"
                - list:
                  - listitem:
                    - strong: Build 1
                    - text: Has been developed with known defects. Thus, functional test cases and automation scripts will fail on this build.
                  - listitem:
                    - strong: Build 2
                    - text: Known defects have been fixed. Thus, functional test cases and automation test scripts should pass when executed on this build.
                    - link "Go to Build 2":
                      - /url: ../HotelAppBuild2
                      - strong: Go to Build 2
            - 'row "For any queries/issues please email: info@adactin.com"':
              - 'cell "For any queries/issues please email: info@adactin.com"':
                - text: "For any queries/issues please email:"
                - link "info@adactin.com":
                  - /url: mailto:info@adactin.com
- table:
  - rowgroup:
    - row:
      - cell
    - row "© 2026 - Adactin.com. All Rights Reserved. Adactin Group Pty. Ltd.":
      - cell "© 2026 - Adactin.com. All Rights Reserved. Adactin Group Pty. Ltd.":
        - text: © 2026 -
        - link "Adactin.com":
          - /url: http://www.adactin.com
        - text: . All Rights Reserved. Adactin Group Pty. Ltd.
```

```
Test timeout of 100000ms exceeded while running "afterEach" hook.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | const searchData = require('../test_Data/searchData.json');
  3  | const appConfig = require('../test_Data/appConfig.json');
  4  | import SearchPage from '../pages/Searchpage';
  5  | 
  6  | test.use({ storageState: 'auth.json' });
  7  | 
  8  | test.describe('Search hotel page', () => {
  9  |     let searchPage;
  10 |     test.beforeEach(async ({ page }) => {
  11 |         searchPage = new SearchPage(page);
  12 |         await page.goto(appConfig.urls.expectedSearchURL);
  13 |         await expect(page).toHaveURL(appConfig.urls.expectedSearchURL, { timeout: 90000 });
  14 |     });
  15 | 
> 16 |     test.afterEach(async ({ page }) => {
     |          ^ Test timeout of 100000ms exceeded while running "afterEach" hook.
  17 |         await page.click('text=Logout');
  18 |     });
  19 | 
  20 |     test('TC-008. Verify all search form input fields and dropdowns are visible', async ({ page }) => {
  21 |         await expect(searchPage.locationDropdown).toBeVisible();
  22 |         await expect(searchPage.hotelsDropdown).toBeVisible();
  23 |         await expect(searchPage.roomTypeDropdown).toBeVisible();
  24 |         await expect(searchPage.roomNosDropdown).toBeVisible();
  25 |         await expect(searchPage.checkInInput).toBeVisible();
  26 |         await expect(searchPage.checkOutInput).toBeVisible();
  27 |         await expect(searchPage.adultsDropdown).toBeVisible();
  28 |         await expect(searchPage.childrenDropdown).toBeVisible();
  29 |         await expect(searchPage.submitButton).toBeVisible();
  30 |     });
  31 | 
  32 |     searchData.validSearches.forEach((sData, index) => {
  33 |         test(`TC-OO9 ${index + 1} Should search and select hotel successfully for location: ${sData.location}`, async ({ page }) => {
  34 |             await searchPage.searchHotel(sData);
  35 | 
  36 |             await expect(page).toHaveURL(appConfig.urls.expectedSelectURL);
  37 | 
  38 |             await expect(page.locator('#select_form')).toBeVisible();
  39 |         });
  40 |     });
  41 | 
  42 | 
  43 |     test('TC-010. Should show error when Check-In date is later than Check-Out date', async ({ page }) => {
  44 |         const invalidData = searchData.invalidSearches[0];
  45 |         await searchPage.searchHotel(invalidData);
  46 | 
  47 |         await expect(searchPage.checkInError).toBeVisible();
  48 |         await expect(searchPage.checkInError).toContainText(invalidData.errorMsg);
  49 |     });
  50 | 
  51 |     test('TC-011. Verify Reset button clears or resets search form fields', async ({ page }) => {
  52 | 
  53 |         await searchPage.locationDropdown.selectOption('Sydney');
  54 |         await searchPage.roomTypeDropdown.selectOption('Standard');
  55 | 
  56 |         await searchPage.resetForm();
  57 | 
  58 |         await expect(searchPage.locationDropdown).toHaveValue('');
  59 |     });
  60 | 
  61 |     test('TC-012. Should show validation error when location is not selected', async ({ page }) => {
  62 | 
  63 |         await searchPage.submitButton.click();
  64 | 
  65 |         const locationError = page.locator('#location_span');
  66 |         await expect(locationError).toBeVisible();
  67 |         await expect(locationError).toContainText('Please Select a Location');
  68 |     });
  69 | 
  70 | 
  71 |     test('TC-013. Verify User can Logout from Search Page successfully', async ({ page }) => {
  72 |         await searchPage.logoutLink.click();
  73 |         await expect(page).toHaveURL('https://adactinhotelapp.com/Logout.php', { timeout: 90000 });
  74 |     });
  75 | 
  76 | });
```