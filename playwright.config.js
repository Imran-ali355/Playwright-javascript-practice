// 

// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 100 * 1000,
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 1,
  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['list'],
    ['allure-playwright', { outputFolder: 'allure-results' }],
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ],

  use: {
    baseURL: 'https://adactinhotelapp.com/',
    screenshot: 'only-on-failure',
    trace: 'on-first-retry'
  },

  projects: [
    {
      name: 'setup',
      testMatch: /auth\.setup\.js$/,
      use: {
        ...devices['Desktop Chrome'],
        storageState: { cookies: [], origins: [] }
      }
    },
    {
      name: 'chromium',
      testIgnore: /.*\.setup\.js$/,
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'auth-chromium.json'
      },
      dependencies: ['setup']
    },

    {
      name: 'setup-firefox',
      testMatch: /auth\.setup\.js$/,
      use: {
        ...devices['Desktop Firefox'],
        storageState: { cookies: [], origins: [] }
      }
    },
    {
      name: 'firefox',
      testIgnore: /.*\.setup\.js$/,
      use: {
        ...devices['Desktop Firefox'],
        storageState: 'auth-firefox.json'
      },
      dependencies: ['setup-firefox']
    },

    {
      name: 'setup-webkit',
      testMatch: /auth\.setup\.js$/,
      use: {
        ...devices['Desktop Safari'],
        storageState: { cookies: [], origins: [] }
      }
    },
    {
      name: 'webkit',
      testIgnore: /.*\.setup\.js$/,
      use: {
        ...devices['Desktop Safari'],
        storageState: 'auth-webkit.json'
      },
      dependencies: ['setup-webkit']
    }
  ]
});