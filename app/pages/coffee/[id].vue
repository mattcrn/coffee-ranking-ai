<template>
  <div>
    <header class="bg-gray-100 py-6 shadow" data-testid="page-header">
      <UContainer>
        <h1 
          class="text-3xl font-bold text-center text-gray-900" 
          data-testid="coffee-name"
        >
          {{ coffee?.name }}
        </h1>
      </UContainer>
    </header>

    <UContainer class="py-10">
      <!-- Coffee Image -->
      <div class="flex justify-center mb-8">
        <NuxtImg
          v-if="coffee"
          :src="coffee.image"
          :alt="coffee.name"
          class="w-full max-w-md rounded-lg"
          data-testid="coffee-image"
        />
      </div>

      <!-- Roastery -->
      <div class="text-center mb-4">
        <UBadge 
          v-if="coffee" 
          data-testid="coffee-roastery" 
          color="primary" 
          variant="soft"
        >
          {{ coffee.roastery }}
        </UBadge>
      </div>

      <!-- Rating -->
      <div class="flex justify-center items-center">
        <div data-testid="rating-stars" class="flex items-center">
          <span 
            v-for="star in 5" 
            :key="star" 
            :class="star <= (coffee?.rating || 0) ? 'text-yellow-400' : 'text-gray-300'"
          >
            ★
          </span>
        </div>
        <span v-if="coffee" class="ml-2 text-sm text-gray-600">{{ coffee.rating }}/5</span>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from '#app'
import { coffeeRoasts, Coffee } from '~/app/utils/coffeeData'

const route = useRoute()
const coffeeId = route.params.id as string

const coffee: Coffee | undefined = coffeeRoasts.find(c => c.id === coffeeId)
</script>