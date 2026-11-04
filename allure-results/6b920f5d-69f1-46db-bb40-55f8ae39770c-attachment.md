# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> Adactin Hotel - Login Tests  >> TC-005. Verify Forgot Password link navigation
- Location: tests\login.spec.js:54:9

# Error details

```
Test timeout of 100000ms exceeded while running "afterEach" hook.
```

# Page snapshot

```yaml
- generic [active] [ref=f1e1]:
  - table [ref=f1e2]:
    - rowgroup [ref=f1e3]:
      - row [ref=f1e4]:
        - cell [ref=f1e5]:
          - img "AdactIn Group" [ref=f1e6]
        - cell [ref=f1e7]:
          - 'img "Adactin Group: Hotel Reservation System" [ref=f1e8]'
      - row [ref=f1e9]:
        - cell [ref=f1e10]
  - table [ref=f1e11]:
    - rowgroup [ref=f1e12]:
      - row [ref=f1e13]:
        - cell [ref=f1e14]:
          - table [ref=f1e16]:
            - rowgroup [ref=f1e17]:
              - row [ref=f1e18]:
                - cell [ref=f1e19]:
                  - table [ref=f1e20]:
                    - rowgroup [ref=f1e21]:
                      - row [ref=f1e22]:
                        - cell "Forgot Password Form (Fields marked with Red asterix (*) are mandatory)" [ref=f1e23]
                        - cell [ref=f1e24]:
                          - link "Go back to Login page" [ref=f1e25] [cursor=pointer]:
                            - /url: index.php
              - row [ref=f1e26]:
                - cell "Enter Email *" [ref=f1e27]
                - cell [ref=f1e28]:
                  - textbox [ref=f1e29]
              - row [ref=f1e30]:
                - cell [ref=f1e31]
                - cell [ref=f1e32]:
                  - button "Email Password" [ref=f1e33]
                  - button "Reset" [ref=f1e34]
        - cell [ref=f1e35]:
          - table [ref=f1e36]:
            - rowgroup [ref=f1e37]:
              - row [ref=f1e38]:
                - cell [ref=f1e39]:
                  - heading "Adactin Hotel Mobile App" [level=4] [ref=f1e40]
                  - link "DOWNLOAD" [ref=f1e41] [cursor=pointer]:
                    - /url: https://adactinhotelapp.com/resources/AdactinHotelApp_SetupGuide.pdf
                  - text: the Hotel Mobile App and extend your experience. Click to know more about how to get the app on Android or IOS.
              - row [ref=f1e42]:
                - cell [ref=f1e43]:
                  - heading "HotelApp Web Services" [level=4] [ref=f1e44]
                  - text: Access Hotel App SOAP and Rest Services to learn web services testing.
                  - link "Click" [ref=f1e45] [cursor=pointer]:
                    - /url: https://adactinhotelapp.com/HotelAdactinWebServices/
                  - text: to know more.
              - row [ref=f1e46]:
                - cell [ref=f1e47]:
                  - heading "Sample TestCases" [level=4] [ref=f1e48]
                  - link "DOWNLOAD" [ref=f1e49] [cursor=pointer]:
                    - /url: http://adactinhotelapp.com/resources/Sample-TestCases_HotelApplication.pdf
                  - text: a complete set of readymade sample TEST CASES for this application. Enjoy automation!
              - row [ref=f1e50]:
                - cell [ref=f1e51]:
                  - heading "Known Defects" [level=4] [ref=f1e52]
                  - link "DOWNLOAD" [ref=f1e53] [cursor=pointer]:
                    - /url: http://adactinhotelapp.com/resources/KnownDefects_HotelApp.pdf
                  - text: list of known defects for this application.
              - row [ref=f1e54]:
                - cell [ref=f1e55]:
                  - heading "Book on Automation" [level=4] [ref=f1e56]
                  - iframe [ref=f1e57]
              - row [ref=f1e58]:
                - cell [ref=f1e59]:
                  - heading "About Adactin" [level=4] [ref=f1e60]
                  - text: Get solutions for all your testing needs. Visit
                  - link "www.adactin.com" [ref=f1e61] [cursor=pointer]:
                    - /url: http://www.adactin.com
                  - text: today!
  - table [ref=f1e62]:
    - rowgroup [ref=f1e63]:
      - row [ref=f1e64]:
        - cell [ref=f1e65]
      - row [ref=f1e66]:
        - cell [ref=f1e67]:
          - text: © 2026 -
          - link "Adactin.com" [ref=f1e68] [cursor=pointer]:
            - /url: http://www.adactin.com
          - text: . All Rights Reserved. Adactin Group Pty. Ltd.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import loginData from '../test_Data/loginData.json';
  3  | import appConfig from '../test_Data/appConfig.json';
  4  | import LoginPage from '../pages/LoginPage';
  5  | 
  6  | test.describe('Adactin Hotel - Login Tests ', () => {
  7  |     let loginPage;
  8  | 
  9  |     test.beforeEach(async ({ page }) => {
  10 |         loginPage = new LoginPage(page);
  11 |         const loginURL = appConfig.urls.loginURL || 'https://adactinhotelapp.com/';
  12 |         await page.goto(loginURL);
  13 |     });
> 14 |     test.afterEach(async ({ page }) => {
     |          ^ Test timeout of 100000ms exceeded while running "afterEach" hook.
  15 |         await page.click('text=Logout');
  16 |     });
  17 | 
  18 | 
  19 |     test('TC-001. Verify Login Page elements and title are visible', async ({ page }) => {
  20 |         await expect(page).toHaveTitle(/Adactin.com/);
  21 |         await expect(loginPage.usernameInput).toBeVisible();
  22 |         await expect(loginPage.passwordInput).toBeVisible();
  23 |         await expect(loginPage.loginButton).toBeVisible();
  24 |     });
  25 | 
  26 | 
  27 |     test.skip('TC-002. Should show "Enter Username" error when username field is empty', async ({ page }) => {
  28 |         await loginPage.loginButton.click();
  29 | 
  30 | 
  31 |         await expect(loginPage.usernameErrorSpan).toBeVisible();
  32 |         await expect(loginPage.usernameErrorSpan).toContainText('Enter Username');
  33 |     });
  34 | 
  35 | 
  36 |     test.skip('TC-003. Should show invalid login error when password is empty', async ({ page }) => {
  37 |         await loginPage.usernameInput.fill('ImranAli355');
  38 |         await loginPage.loginButton.click();
  39 | 
  40 |         await expect(loginPage.passwordErrorSpan).toBeVisible();
  41 |         await expect(loginPage.passwordErrorSpan).toContainText(/Enter Password/i);
  42 |     });
  43 | 
  44 |     loginData.invalid.forEach((data, index) => {
  45 |         test.skip(`TC-004.${index + 1} Should fail login with invalid credentials (${data.username})`, async ({ page }) => {
  46 |             await loginPage.login(data.username, data.password);
  47 | 
  48 |             await expect(loginPage.authError).toBeVisible();
  49 |             await expect(loginPage.authError).toContainText(/Invalid Login details/i);
  50 |         });
  51 |     });
  52 | 
  53 | 
  54 |     test('TC-005. Verify Forgot Password link navigation', async ({ page }) => {
  55 |         await expect(loginPage.forgotPasswordLink).toBeVisible();
  56 |         await loginPage.clickForgotPassword();
  57 |         await expect(page).toHaveURL(/ForgotPassword/);
  58 |     });
  59 | 
  60 |     test.skip('TC-006. Verify New User Registration link navigation', async ({ page }) => {
  61 |         await expect(loginPage.registerLink).toBeVisible();
  62 |         await loginPage.clickRegister();
  63 |         await expect(page).toHaveURL(/Register/);
  64 |     });
  65 | 
  66 | 
  67 |     test.skip('TC-007. Should login successfully with valid credentials and save auth session', async ({ page }) => {
  68 |         const validUser = loginData.validUser[0];
  69 | 
  70 |         await loginPage.login(validUser.username, validUser.password);
  71 | 
  72 |         await expect(page).toHaveURL(appConfig.urls.expectedSearchURL);
  73 | 
  74 | 
  75 | 
  76 |     });
  77 | 
  78 | });
```