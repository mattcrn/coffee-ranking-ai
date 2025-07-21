import { expect, test } from '@nuxt/test-utils/playwright'

test('CoffeeCard component displays coffee information correctly', async ({ page, goto }) => {
  // Create a test page that uses the CoffeeCard component
  await page.goto('data:text/html,<html><body><div id="app"></div></body></html>')
  
  // We'll test the component through the index page since it uses the component
  await goto('/', { waitUntil: 'hydration' })
  
  // Test that the first coffee card displays all required information
  const firstCard = page.locator('[data-testid="coffee-card"]').first()
  
  // Test coffee name
  await expect(firstCard.locator('[data-testid="coffee-name"]')).toBeVisible()
  await expect(firstCard.getByText('Ethiopian Yirgacheffe')).toBeVisible()
  
  // Test roastery
  await expect(firstCard.locator('[data-testid="coffee-roastery"]')).toBeVisible()
  await expect(firstCard.getByText('Blue Bottle Coffee')).toBeVisible()
  
  // Test rating stars
  await expect(firstCard.locator('[data-testid="rating-stars"]')).toBeVisible()
  
  // Test image
  const image = firstCard.locator('img')
  await expect(image).toBeVisible()
  await expect(image).toHaveAttribute('alt', 'Ethiopian Yirgacheffe')
})

test('CoffeeCard component handles different coffee data', async ({ page, goto }) => {
  await goto('/', { waitUntil: 'hydration' })
  
  // Test that all coffee cards are displayed
  const coffeeCards = page.locator('[data-testid="coffee-card"]')
  await expect(coffeeCards).toHaveCount(6)
  
  // Test that each card has the required elements
  for (let i = 0; i < 6; i++) {
    const card = coffeeCards.nth(i)
    
    // Each card should have name, roastery, rating, and image
    await expect(card.locator('[data-testid="coffee-name"]')).toBeVisible()
    await expect(card.locator('[data-testid="coffee-roastery"]')).toBeVisible()
    await expect(card.locator('[data-testid="rating-stars"]')).toBeVisible()
    await expect(card.locator('img')).toBeVisible()
  }
}) 