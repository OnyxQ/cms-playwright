// @ts-check

import { defineConfig, devices }
  from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  fullyParallel: false,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',

  use: {

    // =====================================
    // BASE URL
    // =====================================

    baseURL:
      'https://fsac-staging.cloud.tbintra.net/spear-int',

    // =====================================
    // HEAD MODE
    // =====================================

    headless: false,

    // =====================================

    // =====================================
    // DEBUGGING
    // =====================================

    trace: 'on-first-retry',

    screenshot: 'only-on-failure',

    video: 'retain-on-failure'
  },

  projects: [

    // =====================================
    // AUTH SETUP
    // =====================================

    {
      name: 'setup',

      testMatch:
        /.*auth\.setup\.spec\.js/,
    },

    // =====================================
    // MAIN CHROMIUM TESTS
    // =====================================

    {
      name: 'chromium',

      use: {

        ...devices['Desktop Chrome'],
      },

      dependencies: ['setup'],
    },
  ],


});
