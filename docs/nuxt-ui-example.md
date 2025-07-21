# Nuxt UI Example

## Overview
The Nuxt UI Example page demonstrates the usage of various Nuxt UI components including buttons, cards, and input fields. This page serves as a reference for how to implement common UI patterns using the `@nuxt/ui` library.

## Usage
Navigate to `/nuxt-ui-example` to view the example page.

## Components Demonstrated

### Buttons
- **Primary Button**: Large primary button with default styling
- **Outline Button**: Gray button with outline variant
- **Ghost Button**: Red button with ghost variant
- **Action Button**: Primary button within card footer

### Card Component
- **Header**: Contains a title "Card Header"
- **Content**: Displays descriptive text about the UCard component
- **Footer**: Contains an action button

### Input Field
- **Interactive Input**: Text input with placeholder "Type your name…"
- **Dynamic Greeting**: Displays "Hello, [name]!" when text is entered
- **Real-time Updates**: Greeting updates as user types

## Code Structure

```vue
<template>
  <UContainer class="py-12 space-y-8">
    <h1 class="text-4xl font-bold">Nuxt UI Example Page</h1>
    
    <!-- Button Examples -->
    <div class="flex flex-wrap gap-4">
      <UButton color="primary" size="lg">Primary</UButton>
      <UButton color="gray" variant="outline">Outline</UButton>
      <UButton color="red" variant="ghost">Ghost</UButton>
    </div>
    
    <!-- Card Example -->
    <UCard class="max-w-md">
      <template #header>
        <h2 class="text-xl font-semibold">Card Header</h2>
      </template>
      <p>Card content...</p>
      <template #footer>
        <UButton color="primary">Action</UButton>
      </template>
    </UCard>
    
    <!-- Input Example -->
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
```

## API Reference

### UButton Props
- `color`: Button color variant (primary, gray, red, etc.)
- `variant`: Button style variant (default, outline, ghost)
- `size`: Button size (default, lg, sm)

### UCard Slots
- `header`: Content for card header
- `default`: Main card content
- `footer`: Content for card footer

### UInput Props
- `v-model`: Two-way data binding for input value
- `placeholder`: Placeholder text for the input field

## Examples

### Creating a Button
```vue
<UButton color="primary" size="lg">Click Me</UButton>
```

### Creating a Card
```vue
<UCard>
  <template #header>
    <h3>My Card</h3>
  </template>
  <p>Card content goes here</p>
</UCard>
```

### Creating an Interactive Input
```vue
<template>
  <UInput v-model="value" placeholder="Enter text..." />
  <div v-if="value">You typed: {{ value }}</div>
</template>

<script setup>
const value = ref('')
</script>
```

## Testing
This feature is tested in `tests/nuxt-ui-example.test.ts` with comprehensive end-to-end tests covering:
- Component display and visibility
- User interactions and input handling
- Button functionality
- Responsive design
- Input logic with "Hello, name" functionality

## Responsive Design
The page is designed to work across different screen sizes:
- Desktop (1200px+)
- Tablet (768px)
- Mobile (375px)

All components maintain their functionality and appearance across these viewport sizes. 