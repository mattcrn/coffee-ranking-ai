<template>
  <div class="container mx-auto px-4 py-8">
    <UContainer>
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Coffee Rankings</h1>
        <p class="text-lg text-gray-600">Discover the best coffee roasts from around the world</p>
      </div>
      
      <div 
        data-testid="coffee-grid" 
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <CoffeeCard 
          v-for="coffee in coffeeRoasts" 
          :key="coffee.id"
          :coffee="coffee"
        />
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { coffeeRoasts } from '~/app/utils/coffeeData'
</script> 