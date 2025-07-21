export interface Coffee {
  id: number
  name: string
  roastery: string
  image: string
  rating: number
}

const coffees: Coffee[] = [
  {
    id: 1,
    name: 'Ethiopia Yirgacheffe',
    roastery: 'Blue Bottle Coffee',
    image:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=60',
    rating: 5,
  },
  {
    id: 2,
    name: 'Colombia Huila',
    roastery: 'Intelligentsia',
    image:
      'https://images.unsplash.com/photo-1523362628745-0c100150b9c1?auto=format&fit=crop&w=800&q=60',
    rating: 4,
  },
  {
    id: 3,
    name: 'Kenya AA',
    roastery: 'Stumptown',
    image:
      'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=60',
    rating: 5,
  },
  {
    id: 4,
    name: 'Guatemala Antigua',
    roastery: 'Verve Coffee Roasters',
    image:
      'https://images.unsplash.com/photo-1562183241-b937fa3ce102?auto=format&fit=crop&w=800&q=60',
    rating: 4,
  },
  {
    id: 5,
    name: 'Costa Rica Tarrazu',
    roastery: 'Sightglass Coffee',
    image:
      'https://images.unsplash.com/photo-1582691569828-2f36ec9b2a40?auto=format&fit=crop&w=800&q=60',
    rating: 4,
  },
  {
    id: 6,
    name: 'Brazil Santos',
    roastery: 'Onyx Coffee Lab',
    image:
      'https://images.unsplash.com/photo-1530023367847-cc1eee537225?auto=format&fit=crop&w=800&q=60',
    rating: 3,
  },
]

export default coffees