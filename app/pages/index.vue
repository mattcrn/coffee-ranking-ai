<template>
  <UContainer class="py-12 space-y-8">
    <h1 class="text-4xl font-bold text-center">Coffee Ranking</h1>

    <!-- Responsive grid for coffee cards -->
    <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <UCard
        v-for="coffee in coffees"
        :key="coffee.id"
        class="flex flex-col"
      >
        <!-- Image slot -->
        <template #header>
          <img
            :src="coffee.image"
            :alt="coffee.name"
            class="w-full h-48 object-cover rounded-md"
          />
        </template>

        <!-- Title slot -->
        <template #title>
          {{ coffee.name }}
        </template>

        <!-- Default content -->
        <template #default>
          <p class="text-sm text-gray-500 mb-2">{{ coffee.roastery }}</p>
          <!-- Rating stars -->
          <URating :value="coffee.rating" readonly :max="5" size="sm" />
        </template>
      </UCard>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import coffees from '@/data/coffees.json'
</script>

<style scoped>
/* Page-specific styles (optional) */
</style>