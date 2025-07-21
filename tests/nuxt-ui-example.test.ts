import { expect, test } from '@nuxt/test-utils/playwright'

test('nuxt-ui-example page displays all components correctly', async ({ page, goto }) => {
  await goto('/nuxt-ui-example', { waitUntil: 'hydration' })
  
  // Check page title
  await expect(page.getByRole('heading', { name: 'Nuxt UI Example Page' })).toBeVisible()
  
  // Check all buttons are displayed
  await expect(page.getByRole('button', { name: 'Primary' })).toBeVisible()
  await expect(page.getByRole('button', { name: 'Outline' })).toBeVisible()
  await expect(page.getByRole('button', { name: 'Ghost' })).toBeVisible()
  await expect(page.getByRole('button', { name: 'Action' })).toBeVisible()
  
  // Check card content
  await expect(page.getByRole('heading', { name: 'Card Header' })).toBeVisible()
  await expect(page.getByText('This is a simple card created with')).toBeVisible()
  await expect(page.getByText('UCard')).toBeVisible()
  await expect(page.getByText('@nuxt/ui')).toBeVisible()
  
  // Check input field
  await expect(page.getByPlaceholder('Type your name…')).toBeVisible()
})

test('nuxt-ui-example page handles name input interaction', async ({ page, goto }) => {
  await goto('/nuxt-ui-example', { waitUntil: 'hydration' })
  
  const nameInput = page.getByPlaceholder('Type your name…')
  
  // Initially, greeting should not be visible
  await expect(page.getByText('Hello,')).not.toBeVisible()
  
  // Type a name and check greeting appears
  await nameInput.fill('John')
  await expect(page.getByText('Hello, John!')).toBeVisible()
  
  // Clear input and check greeting disappears
  await nameInput.clear()
  await expect(page.getByText('Hello, John!')).not.toBeVisible()
  
  // Type another name and check greeting updates
  await nameInput.fill('Jane')
  await expect(page.getByText('Hello, Jane!')).toBeVisible()
})

test('nuxt-ui-example page input logic with "Hello, name" functionality', async ({ page, goto }) => {
  await goto('/nuxt-ui-example', { waitUntil: 'hydration' })
  
  const nameInput = page.getByPlaceholder('Type your name…')
  
  // Test 1: Empty input - no greeting should appear
  await expect(page.getByText('Hello,')).not.toBeVisible()
  
  // Test 2: Single character
  await nameInput.fill('A')
  await expect(page.getByText('Hello, A!')).toBeVisible()
  
  // Test 3: Multiple words
  await nameInput.fill('John Doe')
  await expect(page.getByText('Hello, John Doe!')).toBeVisible()
  
  // Test 4: Special characters
  await nameInput.fill('John@123')
  await expect(page.getByText('Hello, John@123!')).toBeVisible()
  
  // Test 5: Numbers only
  await nameInput.fill('12345')
  await expect(page.getByText('Hello, 12345!')).toBeVisible()
  
  // Test 6: Emoji and unicode
  await nameInput.fill('José 😊')
  await expect(page.getByText('Hello, José 😊!')).toBeVisible()
  
  // Test 7: Very long name
  await nameInput.fill('This is a very long name that should still work correctly')
  await expect(page.getByText('Hello, This is a very long name that should still work correctly!')).toBeVisible()
  
  // Test 8: Clear input and verify greeting disappears
  await nameInput.clear()
  await expect(page.getByText('Hello,')).not.toBeVisible()
  
  // Test 9: Type and delete character by character
  await nameInput.type('Alice')
  await expect(page.getByText('Hello, Alice!')).toBeVisible()
  
  // Delete one character at a time
  await nameInput.press('Backspace')
  await expect(page.getByText('Hello, Alic!')).toBeVisible()
  
  await nameInput.press('Backspace')
  await expect(page.getByText('Hello, Ali!')).toBeVisible()
  
  await nameInput.press('Backspace')
  await expect(page.getByText('Hello, Al!')).toBeVisible()
  
  await nameInput.press('Backspace')
  await expect(page.getByText('Hello, A!')).toBeVisible()
  
  await nameInput.press('Backspace')
  await expect(page.getByText('Hello,')).not.toBeVisible()
  
  // Test 10: Real-time typing
  await nameInput.type('Bob')
  await expect(page.getByText('Hello, Bob!')).toBeVisible()
  
  // Test 11: Replace content
  await nameInput.fill('Charlie')
  await expect(page.getByText('Hello, Charlie!')).toBeVisible()
  
  // Test 12: Empty string after having content
  await nameInput.fill('')
  await expect(page.getByText('Hello, Charlie!')).not.toBeVisible()
})

test('nuxt-ui-example page buttons are interactive', async ({ page, goto }) => {
  await goto('/nuxt-ui-example', { waitUntil: 'hydration' })
  
  // Test that all buttons are enabled and clickable
  const primaryButton = page.getByRole('button', { name: 'Primary' })
  const outlineButton = page.getByRole('button', { name: 'Outline' })
  const ghostButton = page.getByRole('button', { name: 'Ghost' })
  const actionButton = page.getByRole('button', { name: 'Action' })
  
  await expect(primaryButton).toBeEnabled()
  await expect(outlineButton).toBeEnabled()
  await expect(ghostButton).toBeEnabled()
  await expect(actionButton).toBeEnabled()
  
  // Click buttons to ensure they don't cause errors
  await primaryButton.click()
  await outlineButton.click()
  await ghostButton.click()
  await actionButton.click()
  
  // Verify we're still on the same page after clicking
  await expect(page.getByRole('heading', { name: 'Nuxt UI Example Page' })).toBeVisible()
})

test('nuxt-ui-example page has responsive layout', async ({ page, goto }) => {
  await goto('/nuxt-ui-example', { waitUntil: 'hydration' })
  
  // Test desktop view
  await page.setViewportSize({ width: 1200, height: 800 })
  await expect(page.getByRole('heading', { name: 'Nuxt UI Example Page' })).toBeVisible()
  
  // Test tablet view
  await page.setViewportSize({ width: 768, height: 1024 })
  await expect(page.getByRole('heading', { name: 'Nuxt UI Example Page' })).toBeVisible()
  
  // Test mobile view
  await page.setViewportSize({ width: 375, height: 667 })
  await expect(page.getByRole('heading', { name: 'Nuxt UI Example Page' })).toBeVisible()
})
