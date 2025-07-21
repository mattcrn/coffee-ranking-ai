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
// Import coffee data
interface Coffee {
  id: string
  name: string
  roastery: string
  image: string
  rating: number
}

const coffeeRoasts = ref<Coffee[]>([
  {
    "id": "ethiopian-yirgacheffe",
    "name": "Ethiopian Yirgacheffe",
    "roastery": "Blue Bottle Coffee",
    "image": "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop",
    "rating": 4.5
  },
  {
    "id": "colombian-huila",
    "name": "Colombian Huila",
    "roastery": "Stumptown Coffee",
    "image": "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop",
    "rating": 4.2
  },
  {
    "id": "guatemala-antigua",
    "name": "Guatemala Antigua",
    "roastery": "Intelligentsia Coffee",
    "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
    "rating": 4.7
  },
  {
    "id": "kenyan-aa",
    "name": "Kenyan AA",
    "roastery": "Counter Culture Coffee",
    "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop",
    "rating": 4.3
  },
  {
    "id": "brazilian-santos",
    "name": "Brazilian Santos",
    "roastery": "Peet's Coffee",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop",
    "rating": 4.0
  },
  {
    "id": "sumatra-mandheling",
    "name": "Sumatra Mandheling",
    "roastery": "Starbucks Reserve",
    "image": "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=400&h=300&fit=crop",
    "rating": 4.1
  }
])
</script> 