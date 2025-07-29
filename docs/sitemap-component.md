# Sitemap Component

A flexible and feature-rich sitemap component for Nuxt.js applications that can automatically detect pages or use custom data.

## Features

- **Auto-detection**: Automatically detects pages from the router
- **Custom data**: Support for custom sitemap structures
- **Search functionality**: Built-in search to filter pages
- **Hierarchical display**: Support for nested page structures
- **Responsive design**: Works on all screen sizes
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Visual indicators**: Icons and color-coded levels

## Usage

### Basic Usage

```vue
<template>
  <Sitemap />
</template>
```

### Auto-detect Pages

```vue
<template>
  <Sitemap :auto-detect="true" />
</template>
```

### Custom Data

```vue
<template>
  <Sitemap :items="customSitemap" />
</template>

<script setup lang="ts">
const customSitemap = ref([
  {
    id: 'about',
    title: 'About Us',
    path: '/about',
    description: 'Learn more about our company'
  },
  {
    id: 'contact',
    title: 'Contact',
    path: '/contact',
    description: 'Get in touch with us'
  }
])
</script>
```

### Hierarchical Structure

```vue
<template>
  <Sitemap :items="hierarchicalSitemap" />
</template>

<script setup lang="ts">
const hierarchicalSitemap = ref([
  {
    id: 'products',
    title: 'Products',
    path: '/products',
    description: 'Browse our products',
    children: [
      {
        id: 'coffee',
        title: 'Coffee',
        path: '/products/coffee',
        description: 'Premium coffee beans'
      },
      {
        id: 'accessories',
        title: 'Accessories',
        path: '/products/accessories',
        description: 'Brewing equipment'
      }
    ]
  }
])
</script>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `SitemapItem[]` | `undefined` | Custom sitemap data |
| `autoDetect` | `boolean` | `false` | Enable automatic page detection |

## SitemapItem Interface

```typescript
interface SitemapItem {
  id: string
  title: string
  path: string
  description?: string
  children?: SitemapItem[]
}
```

## Features

### Search Functionality
The component includes a search bar that filters pages by title, description, or path.

### Visual Hierarchy
- Level 0: Blue border
- Level 1: Green border
- Level 2: Yellow border
- Level 3: Red border

### Quick Links
A grid view of all pages for easy navigation.

### Responsive Design
The component adapts to different screen sizes with appropriate grid layouts.

## Examples

### Auto-detection Example
Visit `/sitemap` to see the component with auto-detection enabled.

### Custom Data Example
Visit `/sitemap-example` to see various usage examples.

## Styling

The component uses Tailwind CSS classes and is compatible with @nuxt/ui. You can customize the appearance by modifying the scoped styles in the component.

## Accessibility

- Proper heading hierarchy
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader friendly structure

## Browser Support

- Modern browsers with ES6+ support
- Vue 3 compatible
- Nuxt 4 ready