<template>
  <UContainer class="py-12 space-y-8">
    <h1 class="text-4xl font-bold">Nuxt UI Example Page</h1>

    <div class="flex flex-wrap gap-4">
      <UButton color="primary" size="lg">Primary</UButton>
      <UButton color="gray" variant="outline">Outline</UButton>
      <UButton color="red" variant="ghost">Ghost</UButton>
    </div>

    <UCard class="max-w-md">
      <template #header>
        <h2 class="text-xl font-semibold">Card Header</h2>
      </template>

      <p>
        This is a simple card created with <code>UCard</code> from <code>@nuxt/ui</code>. It shows how easy
        it is to build beautiful interfaces with ready-made components.
      </p>

      <template #footer>
        <UButton color="primary">Action</UButton>
      </template>
    </UCard>

    <div class="space-y-2">
      <UInput v-model="name" placeholder="Type your name…" />
      <div v-if="name" class="text-lg">Hello, {{ name }}!</div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
</script>

<style scoped>
/* Add any page-specific styles here if needed */
</style>