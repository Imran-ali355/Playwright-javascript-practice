import { test as setup, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import { getAdactinCredentials } from '../utils/test-credentials.js';
const loginData = require('../test_Data/loginData.json');

setup('authenticate', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const credentials = getAdactinCredentials();
    await loginPage.goto();

    await loginPage.login(credentials.username, credentials.password);

    await expect(page).toHaveURL(loginData.validUser[0].expectedSearchURL, { timeout: 90000 });

    const browserName = page.context().browser().browserType().name();
    await page.context().storageState({ path: `auth-${browserName}.json`});
});