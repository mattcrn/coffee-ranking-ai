import { expect, test } from '@nuxt/test-utils/playwright'

test('index page displays coffee roasts in cards', async ({ page, goto }) => {
  await goto('/', { waitUntil: 'hydration' })
  
  // Test main page elements
  await expect(page.getByRole('heading', { name: 'Coffee Rankings' })).toBeVisible()
  
  // Test that coffee cards are displayed
  const coffeeCards = page.locator('[data-testid="coffee-card"]')
  await expect(coffeeCards).toHaveCount(6) // We'll have 6 dummy coffee roasts
  
  // Test first coffee card content
  const firstCard = coffeeCards.first()
  await expect(firstCard.getByText('Ethiopian Yirgacheffe')).toBeVisible()
  await expect(firstCard.getByText('Blue Bottle Coffee')).toBeVisible()
  
  // Test that rating stars are displayed
  const ratingStars = firstCard.locator('[data-testid="rating-stars"]')
  await expect(ratingStars).toBeVisible()
})

test('index page displays responsive grid layout', async ({ page, goto }) => {
  await goto('/', { waitUntil: 'hydration' })
  
  // Test grid container
  const gridContainer = page.locator('[data-testid="coffee-grid"]')
  await expect(gridContainer).toBeVisible()
  
  // Test that cards are arranged in a grid
  const coffeeCards = page.locator('[data-testid="coffee-card"]')
  await expect(coffeeCards).toHaveCount(6)
  
  // Test responsive behavior by checking grid classes
  const gridElement = page.locator('[data-testid="coffee-grid"]')
  await expect(gridElement).toHaveClass(/grid/)
})

test('coffee cards display all required information', async ({ page, goto }) => {
  await goto('/', { waitUntil: 'hydration' })
  
  // Test that each card has image, name, roastery, and rating
  const coffeeCards = page.locator('[data-testid="coffee-card"]')
  
  for (let i = 0; i < 6; i++) {
    const card = coffeeCards.nth(i)
    
    // Test image is present
    const image = card.locator('img')
    await expect(image).toBeVisible()
    
    // Test coffee name is present
    const name = card.locator('[data-testid="coffee-name"]')
    await expect(name).toBeVisible()
    
    // Test roastery is present
    const roastery = card.locator('[data-testid="coffee-roastery"]')
    await expect(roastery).toBeVisible()
    
    // Test rating stars are present
    const rating = card.locator('[data-testid="rating-stars"]')
    await expect(rating).toBeVisible()
  }
})

test('index page handles different screen sizes', async ({ page, goto }) => {
  await goto('/', { waitUntil: 'hydration' })
  
  // Test desktop view
  await page.setViewportSize({ width: 1200, height: 800 })
  const desktopCards = page.locator('[data-testid="coffee-card"]')
  await expect(desktopCards).toHaveCount(6)
  
  // Test tablet view
  await page.setViewportSize({ width: 768, height: 1024 })
  const tabletCards = page.locator('[data-testid="coffee-card"]')
  await expect(tabletCards).toHaveCount(6)
  
  // Test mobile view
  await page.setViewportSize({ width: 375, height: 667 })
  const mobileCards = page.locator('[data-testid="coffee-card"]')
  await expect(mobileCards).toHaveCount(6)
}) 