# Coffee Ranking Index Page

## Overview
The index page displays a collection of coffee roasts in an attractive card layout. Each card shows the coffee roast image, name, producing roastery, and rating displayed as stars. The layout is fully responsive and uses Nuxt UI components for consistent styling and user experience.

## Features
- **Responsive Grid Layout**: Cards adapt to different screen sizes (desktop, tablet, mobile)
- **Coffee Cards**: Each card displays coffee image, name, roastery, and star rating
- **Nuxt UI Integration**: Uses Nuxt UI components for consistent design
- **Data-Driven**: Loads coffee data from JSON file for easy integration with external data sources

## Usage
The index page is accessible at the root route (`/`) and automatically displays all available coffee roasts in a grid layout.

### Data Structure
Coffee roasts are defined in `data/coffee-roasts.json` with the following structure:

```json
{
  "id": "unique-id",
  "name": "Coffee Roast Name",
  "roastery": "Producing Roastery",
  "image": "/images/coffee-image.jpg",
  "rating": 4.5
}
```

## API Reference

### Components Used
- `CoffeeCard`: Reusable component for displaying coffee roasts
- `UCard`: Main container for each coffee roast (used within CoffeeCard)
- `UAvatar`: Displays coffee roast image (used within CoffeeCard)
- `UBadge`: Shows roastery name (used within CoffeeCard)

### Data Attributes
- `data-testid="coffee-grid"`: Main grid container
- `data-testid="coffee-card"`: Individual coffee card
- `data-testid="coffee-name"`: Coffee name element
- `data-testid="coffee-roastery"`: Roastery name element
- `data-testid="rating-stars"`: Rating stars element

## Examples

### Basic Coffee Card Structure
```vue
<CoffeeCard :coffee="coffee" />
```

### CoffeeCard Component Props
```vue
<script setup lang="ts">
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
```

### Responsive Grid Layout
```vue
<div data-testid="coffee-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Coffee cards here -->
</div>
```

## Testing
Reference to the corresponding test files:
- `tests/index.test.ts` - Main index page tests
- `tests/coffee-card.test.ts` - CoffeeCard component tests

The tests cover:
- Display of coffee roasts in cards
- Responsive grid layout
- All required information (image, name, roastery, rating)
- Different screen sizes and viewports
- CoffeeCard component functionality in isolation

## Future Enhancements
- Integration with external data sources (API, CMS)
- Filtering and sorting options
- Search functionality
- Detailed coffee roast pages
- User reviews and ratings 