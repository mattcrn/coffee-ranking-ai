import { test, expect } from '@playwright/test';

test.describe('Basic Playwright Test', () => {
  test('should load the homepage with correct content', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/');
    
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Check that the page title contains our expected text
    const title = await page.title();
    expect(title).toContain('Nuxt with Playwright');
    
    // Check that the main heading is visible
    const heading = page.getByTestId('main-heading');
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText('Welcome to Nuxt with Playwright');
    
    // Check that the description is visible
    const description = page.getByTestId('description');
    await expect(description).toBeVisible();
    await expect(description).toContain('Nuxt.js application');
  });

  test('should have interactive buttons', async ({ page }) => {
    await page.goto('/');
    
    // Check that buttons are visible and clickable
    const exampleLink = page.getByTestId('example-link');
    await expect(exampleLink).toBeVisible();
    
    const testButton = page.getByTestId('test-button');
    await expect(testButton).toBeVisible();
    
    // Test that buttons are clickable (hover should work)
    await testButton.hover();
  });

  test('should navigate to example page', async ({ page }) => {
    await page.goto('/');
    
    // Click the example link
    const exampleLink = page.getByTestId('example-link');
    await exampleLink.click();
    
    // Wait for navigation
    await page.waitForURL('**/nuxt-ui-example');
    
    // Verify we're on the example page
    await expect(page.locator('h1')).toContain('Nuxt UI Example Page');
  });

  test('should take screenshots successfully', async ({ page }) => {
    await page.goto('/');
    
    // Take a screenshot to verify visual rendering works
    await page.screenshot({ path: 'tests/screenshots/homepage.png', fullPage: true });
    
    // Navigate to example page and take another screenshot
    await page.goto('/nuxt-ui-example');
    await page.screenshot({ path: 'tests/screenshots/example-page.png', fullPage: true });
    
    // This test passes if no error is thrown during screenshots
    expect(true).toBe(true);
  });
});