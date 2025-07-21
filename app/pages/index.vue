<template>
  <UContainer class="py-12">
    <h1 class="text-3xl font-bold mb-8">Top Coffee Roasts</h1>

    <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <UCard
        v-for="coffee in coffees"
        :key="coffee.id"
        as="div"
        class="hover:shadow-lg transition-shadow duration-300 flex flex-col"
      >
        <template #header>
          <img
            :src="coffee.image"
            :alt="coffee.name"
            class="object-cover w-full h-48 rounded-t-md"
          />
        </template>

        <h3 class="text-lg font-semibold mb-1">{{ coffee.name }}</h3>
        <p class="text-sm text-gray-500 mb-3">{{ coffee.roastery }}</p>

        <div class="flex items-center mt-auto">
          <UIcon
            v-for="i in 5"
            :key="i"
            :name="i <= Math.round(coffee.rating) ? 'i-heroicons-star-solid' : 'i-heroicons-star'"
            class="h-5 w-5"
            :class="i <= Math.round(coffee.rating) ? 'text-yellow-400' : 'text-gray-300'"
          />
          <span class="ml-2 text-sm text-gray-600">{{ coffee.rating.toFixed(1) }}</span>
        </div>
      </UCard>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import coffees from '~/data/coffees.json'
</script>

<style scoped>
/* Add any page-specific styles if needed */
</style>