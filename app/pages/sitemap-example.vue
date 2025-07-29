<template>
  <div class="container mx-auto px-4 py-8">
    <UContainer>
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Sitemap Component Examples</h1>
        <p class="text-lg text-gray-600">Different ways to use the Sitemap component</p>
      </div>
      
      <!-- Example 1: Auto-detect -->
      <UCard class="mb-8">
        <div class="p-6">
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">Auto-detect Pages</h2>
          <p class="text-gray-600 mb-4">The component automatically detects all pages from the router.</p>
          <Sitemap :auto-detect="true" />
        </div>
      </UCard>
      
      <!-- Example 2: Custom data -->
      <UCard class="mb-8">
        <div class="p-6">
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">Custom Sitemap Data</h2>
          <p class="text-gray-600 mb-4">Using the component with custom sitemap structure.</p>
          <Sitemap :items="customSitemap" />
        </div>
      </UCard>
      
      <!-- Example 3: Hierarchical structure -->
      <UCard>
        <div class="p-6">
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">Hierarchical Structure</h2>
          <p class="text-gray-600 mb-4">Example with nested pages and categories.</p>
          <Sitemap :items="hierarchicalSitemap" />
        </div>
      </UCard>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
// Custom sitemap data example
const customSitemap = ref([
  {
    id: 'about',
    title: 'About Us',
    path: '/about',
    description: 'Learn more about our company and mission'
  },
  {
    id: 'contact',
    title: 'Contact',
    path: '/contact',
    description: 'Get in touch with our team'
  },
  {
    id: 'blog',
    title: 'Blog',
    path: '/blog',
    description: 'Read our latest articles and updates'
  }
])

// Hierarchical sitemap example
const hierarchicalSitemap = ref([
  {
    id: 'products',
    title: 'Products',
    path: '/products',
    description: 'Browse our product catalog',
    children: [
      {
        id: 'coffee',
        title: 'Coffee',
        path: '/products/coffee',
        description: 'Premium coffee beans and roasts'
      },
      {
        id: 'accessories',
        title: 'Accessories',
        path: '/products/accessories',
        description: 'Coffee brewing equipment and tools'
      }
    ]
  },
  {
    id: 'services',
    title: 'Services',
    path: '/services',
    description: 'Professional coffee services',
    children: [
      {
        id: 'consulting',
        title: 'Consulting',
        path: '/services/consulting',
        description: 'Coffee business consulting services'
      },
      {
        id: 'training',
        title: 'Training',
        path: '/services/training',
        description: 'Barista training and workshops'
      }
    ]
  }
])
</script>