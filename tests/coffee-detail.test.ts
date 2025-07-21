import { expect, test } from '@nuxt/test-utils/playwright'

// Ensure the detail page correctly renders coffee information

test('Coffee detail page displays coffee information correctly', async ({ page, goto }) => {
  await goto('/coffee/ethiopian-yirgacheffe', { waitUntil: 'hydration' })

  // Header and name
  await expect(page.locator('[data-testid="page-header"]')).toBeVisible()
  await expect(page.locator('[data-testid="coffee-name"]')).toHaveText('Ethiopian Yirgacheffe')

  // Roastery badge
  await expect(page.locator('[data-testid="coffee-roastery"]')).toHaveText('Blue Bottle Coffee')

  // Rating stars visible
  await expect(page.locator('[data-testid="rating-stars"]')).toBeVisible()

  // Image visibility & alt attribute
  const image = page.locator('[data-testid="coffee-image"]')
  await expect(image).toBeVisible()
  await expect(image).toHaveAttribute('alt', 'Ethiopian Yirgacheffe')
})