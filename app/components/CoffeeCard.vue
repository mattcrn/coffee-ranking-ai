<script setup lang="ts">
// Define props for the coffee data
interface Coffee {
  id: string
  name: string
  roastery: string
  image: string
  rating: number
}

defineProps<{
  coffee: Coffee
}>()
</script>

<template>
  <UCard data-testid="coffee-card" class="h-full">
    <div class="flex flex-col h-full">
      <!-- Coffee Image -->
      <div class="relative mb-4">
        <NuxtImg 
          :src="coffee.image" 
          :alt="coffee.name"
          class="w-full h-48 object-cover rounded-lg"
          loading="lazy"
          format="webp"
        />
      </div>
      
      <!-- Coffee Information -->
      <div class="flex-1 flex flex-col">
        <h3 
          data-testid="coffee-name" 
          class="text-xl font-semibold text-gray-900 mb-2"
        >
          {{ coffee.name }}
        </h3>
        
        <UBadge 
          data-testid="coffee-roastery"
          color="primary"
          variant="soft"
          class="mb-3"
        >
          {{ coffee.roastery }}
        </UBadge>
        
        <!-- Rating -->
        <div class="mt-auto flex items-center">
          <div data-testid="rating-stars" class="flex items-center">
            <div class="flex">
              <span 
                v-for="star in 5" 
                :key="star"
                class="text-yellow-400"
                :class="star <= coffee.rating ? 'text-yellow-400' : 'text-gray-300'"
              >
                ★
              </span>
            </div>
          </div>
          <span class="ml-2 text-sm text-gray-600">{{ coffee.rating }}/5</span>
        </div>
      </div>
    </div>
  </UCard>
</template> 