import { test as setup, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

const loginData = require('../test_Data/loginData.json');

setup.use({
  storageState: { cookies: [], origins: [] }
});

setup('authenticate', async ({ page, browserName }) => {
  const loginPage = new LoginPage(page);
  const user = loginData.validUser[0];

  await loginPage.goto();
  await loginPage.login(user.username, user.password);

  await expect(page).toHaveURL(user.expectedSearchURL, {
    timeout: 90000
  });

  await page.context().storageState({
    path: `auth-${browserName}.json`
  });
});


// import { test as setup, expect } from '@playwright/test';
// import LoginPage from '../pages/LoginPage';
// const loginData = require('../test_Data/loginData.json');

// setup('authenticate', async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     await loginPage.goto();

//     await loginPage.login(loginData.validUser[0].username, loginData.validUser[0].password);

//     await expect(page).toHaveURL(loginData.validUser[0].expectedSearchURL, { timeout: 90000 });

//     const browserName = page.context().browser().browserType().name();
//     await page.context().storageState({ path: `auth-${browserName}.json`});
// });
