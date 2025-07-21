export interface Coffee {
  id: string
  name: string
  roastery: string
  image: string
  rating: number
}

export const coffeeRoasts: Coffee[] = [
  {
    id: 'ethiopian-yirgacheffe',
    name: 'Ethiopian Yirgacheffe',
    roastery: 'Blue Bottle Coffee',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop',
    rating: 4.5
  },
  {
    id: 'colombian-huila',
    name: 'Colombian Huila',
    roastery: 'Stumptown Coffee',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop',
    rating: 4.2
  },
  {
    id: 'guatemala-antigua',
    name: 'Guatemala Antigua',
    roastery: 'Intelligentsia Coffee',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop',
    rating: 4.7
  },
  {
    id: 'kenyan-aa',
    name: 'Kenyan AA',
    roastery: 'Counter Culture Coffee',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop',
    rating: 4.3
  },
  {
    id: 'brazilian-santos',
    name: 'Brazilian Santos',
    roastery: "Peet's Coffee",
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop',
    rating: 4.0
  },
  {
    id: 'sumatra-mandheling',
    name: 'Sumatra Mandheling',
    roastery: 'Starbucks Reserve',
    image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=400&h=300&fit=crop',
    rating: 4.1
  }
];