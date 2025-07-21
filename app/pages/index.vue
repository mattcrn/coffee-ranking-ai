<template>
  <UContainer class="py-12 text-center">
    <h1 class="text-4xl font-bold mb-6" data-testid="main-heading">Welcome to Nuxt with Playwright</h1>
    <p class="text-lg text-gray-600 mb-8" data-testid="description">
      This is a simple Nuxt.js application with Playwright testing setup.
    </p>
    <div class="space-x-4">
      <UButton to="/nuxt-ui-example" data-testid="example-link">
        View Example Page
      </UButton>
      <UButton variant="outline" data-testid="test-button">
        Test Button
      </UButton>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
// Simple homepage setup
useHead({
  title: 'Nuxt with Playwright - Home',
  meta: [
    { name: 'description', content: 'A Nuxt.js app with Playwright testing' }
  ]
})
</script>