<script setup lang="ts">
// Define the sitemap structure
interface SitemapItem {
  id: string
  title: string
  path: string
  description?: string
  children?: SitemapItem[]
}

// Define props for the sitemap data
const props = defineProps<{
  items?: SitemapItem[]
  autoDetect?: boolean
}>()

// Default sitemap structure based on the current project
const defaultSitemap = ref<SitemapItem[]>([
  {
    id: 'home',
    title: 'Home',
    path: '/',
    description: 'Main landing page with coffee rankings'
  },
  {
    id: 'nuxt-ui-example',
    title: 'Nuxt UI Example',
    path: '/nuxt-ui-example',
    description: 'Example page showcasing Nuxt UI components'
  },
  {
    id: 'sitemap',
    title: 'Sitemap',
    path: '/sitemap',
    description: 'Site structure and navigation overview'
  }
])

// Auto-detect pages from the router
const router = useRouter()
const autoDetectedItems = computed(() => {
  if (!props.autoDetect) return []
  
  const routes = router.getRoutes()
  return routes
    .filter(route => route.path !== '/' && !route.path.includes('[') && !route.path.includes(']'))
    .map(route => ({
      id: route.name?.toString() || route.path.slice(1).replace(/\//g, '-'),
      title: route.name?.toString().replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || route.path.slice(1).replace(/\//g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      path: route.path,
      description: `Page: ${route.path}`
    }))
})

// Use provided items, auto-detected items, or fall back to default
const sitemapItems = computed(() => {
  if (props.items) return props.items
  if (props.autoDetect && autoDetectedItems.value.length > 0) {
    return [
      {
        id: 'home',
        title: 'Home',
        path: '/',
        description: 'Main landing page with coffee rankings'
      },
      ...autoDetectedItems.value
    ]
  }
  return defaultSitemap.value
})

// Reactive search functionality
const searchQuery = ref('')
const filteredItems = computed(() => {
  if (!searchQuery.value) return sitemapItems.value
  
  return sitemapItems.value.filter(item => 
    item.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    item.description?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    item.path.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})
</script>

<template>
  <div class="sitemap-container">
    <UContainer>
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">Site Map</h1>
        <p class="text-lg text-gray-600">Navigate through our site structure</p>
      </div>
      
      <!-- Search Bar -->
      <UCard class="mb-6">
        <div class="p-6">
          <div class="flex items-center space-x-4">
            <UIcon name="i-heroicons-magnifying-glass" class="w-5 h-5 text-gray-400" />
            <UInput
              v-model="searchQuery"
              placeholder="Search pages..."
              class="flex-1"
              size="lg"
            />
            <UBadge 
              v-if="searchQuery"
              color="gray" 
              variant="soft"
              class="text-sm"
            >
              {{ filteredItems.length }} results
            </UBadge>
          </div>
        </div>
      </UCard>
      
      <!-- Site Structure Tree -->
      <UCard class="mb-6">
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-xl font-semibold text-gray-900">Site Structure</h2>
            <UBadge 
              color="blue" 
              variant="soft"
              class="text-sm"
            >
              {{ filteredItems.length }} pages
            </UBadge>
          </div>
          
          <div v-if="filteredItems.length === 0" class="text-center py-8">
            <UIcon name="i-heroicons-magnifying-glass" class="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p class="text-gray-500">No pages found matching your search.</p>
          </div>
          
          <div v-else class="space-y-2">
            <div 
              v-for="item in filteredItems" 
              :key="item.id"
              class="sitemap-item level-0"
            >
              <div class="flex items-center space-x-3 py-2">
                <UIcon name="i-heroicons-document-text" class="w-4 h-4 text-gray-400" />
                <NuxtLink 
                  :to="item.path"
                  class="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  {{ item.title }}
                </NuxtLink>
                <UIcon 
                  v-if="item.path.startsWith('http')"
                  name="i-heroicons-arrow-top-right-on-square"
                  class="w-4 h-4 text-gray-400"
                />
              </div>
              
              <p v-if="item.description" class="text-sm text-gray-600 mt-1 ml-5">
                {{ item.description }}
              </p>
              
              <!-- Render children recursively -->
              <div v-if="item.children && item.children.length > 0" class="mt-2">
                <div 
                  v-for="child in item.children" 
                  :key="child.id"
                  class="sitemap-item level-1 ml-6"
                >
                  <div class="flex items-center space-x-3 py-2">
                    <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <UIcon name="i-heroicons-document-text" class="w-4 h-4 text-gray-400" />
                    <NuxtLink 
                      :to="child.path"
                      class="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                    >
                      {{ child.title }}
                    </NuxtLink>
                    <UIcon 
                      v-if="child.path.startsWith('http')"
                      name="i-heroicons-arrow-top-right-on-square"
                      class="w-4 h-4 text-gray-400"
                    />
                  </div>
                  
                  <p v-if="child.description" class="text-sm text-gray-600 mt-1 ml-5">
                    {{ child.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UCard>
      
      <!-- Quick Links Grid -->
      <UCard>
        <div class="p-6">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">Quick Links</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <UCard 
              v-for="item in filteredItems" 
              :key="`quick-${item.id}`"
              class="hover:shadow-md transition-shadow cursor-pointer"
              @click="$router.push(item.path)"
            >
              <div class="p-4">
                <div class="flex items-center space-x-2 mb-2">
                  <UIcon name="i-heroicons-document-text" class="w-4 h-4 text-gray-400" />
                  <h3 class="font-semibold text-gray-900">{{ item.title }}</h3>
                </div>
                <p v-if="item.description" class="text-sm text-gray-600 mb-3">
                  {{ item.description }}
                </p>
                <UBadge 
                  color="primary" 
                  variant="soft"
                  class="text-xs"
                >
                  {{ item.path }}
                </UBadge>
              </div>
            </UCard>
          </div>
        </div>
      </UCard>
    </UContainer>
  </div>
</template>

<style scoped>
.sitemap-container {
  @apply py-8;
}

.sitemap-item {
  @apply border-l-2 border-gray-200 pl-4;
}

.sitemap-item.level-0 {
  @apply border-l-blue-500;
}

.sitemap-item.level-1 {
  @apply border-l-green-500;
}

.sitemap-item.level-2 {
  @apply border-l-yellow-500;
}

.sitemap-item.level-3 {
  @apply border-l-red-500;
}

.sitemap-item:hover {
  @apply border-l-blue-600;
}
</style>