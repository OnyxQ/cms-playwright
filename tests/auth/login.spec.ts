import playwright, { test, expect } from '@playwright/test';

test.describe('Login Page', () => { });

test('should display login form', async () => {
  const page = await playwright.chromium.launch();
  const context = await page.newContext();
  const loginPage = await context.newPage();