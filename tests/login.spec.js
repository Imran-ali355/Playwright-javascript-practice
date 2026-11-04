import { test, expect } from '@playwright/test';
import loginData from '../test_Data/loginData.json';
import appConfig from '../test_Data/appConfig.json';
import LoginPage from '../pages/LoginPage';

test.describe('Adactin Hotel - Login Tests ', () => {
    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        const loginURL = appConfig.urls.loginURL || 'https://adactinhotelapp.com/';
        await page.goto(loginURL);
    });
    test('TC-001. Verify Login Page elements and title are visible', async ({ page }) => {
        await expect(page).toHaveTitle(/Adactin.com/);
        await expect(loginPage.usernameInput).toBeVisible();
        await expect(loginPage.passwordInput).toBeVisible();
        await expect(loginPage.loginButton).toBeVisible();
    });


    test.skip('TC-002. Should show "Enter Username" error when username field is empty', async ({ page }) => {
        await loginPage.loginButton.click();


        await expect(loginPage.usernameErrorSpan).toBeVisible();
        await expect(loginPage.usernameErrorSpan).toContainText('Enter Username');
    });


    test.skip('TC-003. Should show invalid login error when password is empty', async ({ page }) => {
        await loginPage.usernameInput.fill('ImranAli355');
        await loginPage.loginButton.click();

        await expect(loginPage.passwordErrorSpan).toBeVisible();
        await expect(loginPage.passwordErrorSpan).toContainText(/Enter Password/i);
    });

    loginData.invalid.forEach((data, index) => {
        test.skip(`TC-004.${index + 1} Should fail login with invalid credentials (${data.username})`, async ({ page }) => {
            await loginPage.login(data.username, data.password);

            await expect(loginPage.authError).toBeVisible();
            await expect(loginPage.authError).toContainText(/Invalid Login details/i);
        });
    });


    test('TC-005. Verify Forgot Password link navigation', async ({ page }) => {
        await expect(loginPage.forgotPasswordLink).toBeVisible();
        await loginPage.clickForgotPassword();
        await expect(page).toHaveURL(/ForgotPassword/);
    });

    test.skip('TC-006. Verify New User Registration link navigation', async ({ page }) => {
        await expect(loginPage.registerLink).toBeVisible();
        await loginPage.clickRegister();
        await expect(page).toHaveURL(/Register/);
    });


    test.skip('TC-007. Should login successfully with valid credentials and save auth session', async ({ page }) => {
        const validUser = loginData.validUser[0];

        await loginPage.login(validUser.username, validUser.password);

        await expect(page).toHaveURL(appConfig.urls.expectedSearchURL);



    });

});