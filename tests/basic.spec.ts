import { test, expect } from '@playwright/test';

test.describe('Basic Playwright Setup Test', () => {
  test('should be able to create a page and navigate to google', async ({ page }) => {
    // This is a simple test to verify Playwright is working
    await page.goto('https://www.google.com');
    
    // Check that we can find the Google search box
    const searchBox = page.locator('input[name="q"]');
    await expect(searchBox).toBeVisible();
    
    // Get the page title
    const title = await page.title();
    expect(title).toContain('Google');
  });

  test('should be able to take screenshots', async ({ page }) => {
    await page.goto('https://example.com');
    
    // Take a screenshot
    await page.screenshot({ path: 'tests/screenshots/example-dot-com.png' });
    
    // Check that the example.com page loaded
    await expect(page.locator('h1')).toContain('Example Domain');
  });

  test('should verify browser context is working', async ({ page }) => {
    // Test basic browser functionality
    await page.goto('data:text/html,<h1>Hello Playwright!</h1>');
    
    // Verify we can interact with the page
    await expect(page.locator('h1')).toHaveText('Hello Playwright!');
    
    // Test JavaScript execution
    const result = await page.evaluate(() => {
      return 'Playwright is working!';
    });
    expect(result).toBe('Playwright is working!');
  });
});