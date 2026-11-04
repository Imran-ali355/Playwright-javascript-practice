# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> Adactin Hotel - Login Tests  >> TC-001. Verify Login Page elements and title are visible
- Location: tests\login.spec.js:19:9

# Error details

```
Test timeout of 100000ms exceeded while running "afterEach" hook.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - table [ref=e2]:
    - rowgroup [ref=e3]:
      - row [ref=e4]:
        - cell [ref=e5]:
          - img "AdactIn Group" [ref=e6]
        - cell [ref=e7]:
          - 'img "Adactin Group: Hotel Reservation System" [ref=e8]'
      - row [ref=e9]:
        - cell [ref=e10]
  - table [ref=e11]:
    - rowgroup [ref=e12]:
      - row [ref=e13]:
        - cell [ref=e14]:
          - paragraph [ref=e15]: Adactin Launches The Adactin Hotel App!
          - table [ref=e16]:
            - rowgroup [ref=e17]:
              - row [ref=e18]:
                - cell [ref=e19]:
                  - img "Hotel Image 3" [ref=e20]
              - row [ref=e21]:
                - cell "The best Free learning platform for Software Testing Now available to download for free on IOS and Android." [ref=e22]: The best Free learning platform for Software TestingNow available to download for free on IOS and Android.
          - table [ref=e23]:
            - rowgroup [ref=e24]:
              - row [ref=e25]:
                - cell [ref=e26]:
                  - link [ref=e27] [cursor=pointer]:
                    - /url: https://testflight.apple.com/join/Ai3nVPMD
                - cell [ref=e29]:
                  - link [ref=e30] [cursor=pointer]:
                    - /url: https://play.google.com/store/apps/details?id=com.adactin.education.hotelbooking
        - cell [ref=e32]:
          - table [ref=e34]:
            - rowgroup [ref=e35]:
              - row [ref=e36]:
                - cell "Existing User Login - Build 1" [ref=e37]
              - row [ref=e38]:
                - cell "Username" [ref=e39]
                - cell [ref=e40]:
                  - textbox [ref=e41]
              - row [ref=e42]:
                - cell "Password" [ref=e43]
                - cell [ref=e44]:
                  - textbox [ref=e45]
              - row [ref=e46]:
                - cell [ref=e47]
                - cell [ref=e48]:
                  - link "Forgot Password?" [ref=e50] [cursor=pointer]:
                    - /url: ForgotPassword.php
              - row [ref=e51]:
                - cell [ref=e52]
                - cell [ref=e53]
              - row [ref=e54]:
                - cell [ref=e55]
                - cell [ref=e56]:
                  - button "Login" [ref=e57]
              - row [ref=e58]:
                - cell [ref=e59]:
                  - link "New User Register Here" [ref=e60] [cursor=pointer]:
                    - /url: Register.php
          - table [ref=e61]:
            - rowgroup [ref=e62]:
              - row [ref=e63]:
                - cell "Important Note:" [ref=e64]
              - row [ref=e65]:
                - cell [ref=e66]:
                  - text: "Hotel Application has 2 builds:"
                  - list [ref=e67]:
                    - listitem [ref=e68]:
                      - strong [ref=e69]: Build 1
                      - text: Has been developed with known defects. Thus, functional test cases and automation scripts will fail on this build.
                    - listitem [ref=e70]:
                      - strong [ref=e71]: Build 2
                      - text: Known defects have been fixed. Thus, functional test cases and automation test scripts should pass when executed on this build.
                      - link [ref=e72] [cursor=pointer]:
                        - /url: ../HotelAppBuild2
                        - strong [ref=e73]: Go to Build 2
              - row [ref=e74]:
                - cell [ref=e75]:
                  - text: "For any queries/issues please email:"
                  - link "info@adactin.com" [ref=e76] [cursor=pointer]:
                    - /url: mailto:info@adactin.com
  - table [ref=e77]:
    - rowgroup [ref=e78]:
      - row [ref=e79]:
        - cell [ref=e80]
      - row [ref=e81]:
        - cell [ref=e82]:
          - text: © 2026 -
          - link "Adactin.com" [ref=e83] [cursor=pointer]:
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