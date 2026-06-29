import endpoints from '../../data/endpoints.json';

const { test, chromium }
  = require('@playwright/test');
test.setTimeout(300000);
const path = require('path');

const users =
  require('../../data/user.json');

test(
  'Generate auth sessions for all users',
  async () => {


    for (const role in users) {

      const user = users[role];

      console.log(
        `Creating session for ${role}`
      );

      const browser =
        await chromium.launch({

          headless: false
        });

      const context =
        await browser.newContext();

      const page =
        await context.newPage();

      // =====================================
      // OPEN APPLICATION
      // =====================================

      await page.goto(
        endpoints.baseUrl
      );

      // =====================================
      // CLICK SSO LOGIN
      // =====================================

      await page
        .getByRole('button', {
          name: 'Login with Daimler ID'
        })
        .click();

      // =====================================
      // ENTER USERNAME
      // =====================================

      await page
        .locator('input[type="email"]')
        .fill(user.username);

      await page.keyboard.press('Enter');

      // =====================================
      // ENTER PASSWORD
      // =====================================

      await page
        .locator('input[type="password"]')
        .fill(user.password);

      await page.getByRole('button', { name: 'Sign in' }).click();

      // =====================================
      // MANUAL MFA STEP
      // =====================================

      console.log(
        `Complete MFA for ${role}`
      );

      await page.waitForURL(
        '**/dashboard',
        {
          timeout: 120000
        }
      );

      // =====================================
      // SAVE AUTH SESSION
      // =====================================

      const authPath =
        path.join(
          __dirname,
          `../../auth/${role}.json`
        );

      await context.storageState({

        path: authPath
      });

      console.log(
        `Saved session: ${authPath}`
      );

      await browser.close();
    }
  }


);
