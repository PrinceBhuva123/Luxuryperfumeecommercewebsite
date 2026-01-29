export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  category: 'men' | 'women' | 'unisex';
  type: 'eau-de-parfum' | 'eau-de-toilette' | 'cologne';
  sizes: number[];
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  description: string;
  notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
  isBestSeller?: boolean;
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Velvet Noir',
    brand: 'Essence Luxe',
    price: 189,
    originalPrice: 249,
    category: 'women',
    type: 'eau-de-parfum',
    sizes: [30, 50, 100],
    rating: 4.8,
    reviews: 234,
    image: 'luxury perfume bottle women',
    images: ['luxury perfume bottle women', 'perfume spray close', 'elegant fragrance'],
    description: 'A sophisticated blend of rich florals and warm amber, Velvet Noir embodies timeless elegance.',
    notes: {
      top: ['Bergamot', 'Pink Pepper', 'Mandarin'],
      middle: ['Rose', 'Jasmine', 'Violet'],
      base: ['Amber', 'Vanilla', 'Sandalwood']
    },
    isBestSeller: true
  },
  {
    id: '2',
    name: 'Midnight Oud',
    brand: 'Royal Scents',
    price: 229,
    category: 'men',
    type: 'eau-de-parfum',
    sizes: [50, 100],
    rating: 4.9,
    reviews: 189,
    image: 'luxury mens cologne bottle',
    images: ['luxury mens cologne bottle', 'black perfume bottle', 'masculine fragrance'],
    description: 'An intoxicating masculine scent with deep oud and leather notes.',
    notes: {
      top: ['Cardamom', 'Black Pepper', 'Grapefruit'],
      middle: ['Oud', 'Leather', 'Vetiver'],
      base: ['Musk', 'Cedar', 'Patchouli']
    },
    isBestSeller: true
  },
  {
    id: '3',
    name: 'Golden Dawn',
    brand: 'Aurora Paris',
    price: 159,
    category: 'women',
    type: 'eau-de-toilette',
    sizes: [30, 50, 100],
    rating: 4.7,
    reviews: 312,
    image: 'elegant gold perfume bottle',
    images: ['elegant gold perfume bottle', 'feminine fragrance', 'perfume with flowers'],
    description: 'A fresh and luminous fragrance that captures the essence of dawn.',
    notes: {
      top: ['Citrus', 'Peach', 'Green Apple'],
      middle: ['Peony', 'Freesia', 'Lily'],
      base: ['White Musk', 'Blonde Woods', 'Tonka Bean']
    },
    isNew: true
  },
  {
    id: '4',
    name: 'Ocean Breeze',
    brand: 'Coastal Collection',
    price: 139,
    category: 'unisex',
    type: 'eau-de-toilette',
    sizes: [50, 100],
    rating: 4.6,
    reviews: 156,
    image: 'blue aquatic perfume bottle',
    images: ['blue aquatic perfume bottle', 'fresh fragrance', 'minimalist perfume'],
    description: 'A refreshing aquatic scent perfect for any occasion.',
    notes: {
      top: ['Sea Salt', 'Mint', 'Lemon'],
      middle: ['Marine Notes', 'Lavender', 'Rosemary'],
      base: ['Driftwood', 'Amber', 'Musk']
    }
  },
  {
    id: '5',
    name: 'Rose Impériale',
    brand: 'Maison Blanc',
    price: 279,
    category: 'women',
    type: 'eau-de-parfum',
    sizes: [30, 50, 100],
    rating: 5.0,
    reviews: 421,
    image: 'pink rose perfume bottle',
    images: ['pink rose perfume bottle', 'luxury rose fragrance', 'elegant perfume'],
    description: 'The ultimate celebration of the finest roses from Grasse.',
    notes: {
      top: ['Turkish Rose', 'Litchi', 'Cassis'],
      middle: ['Centifolia Rose', 'Magnolia', 'Iris'],
      base: ['Patchouli', 'Incense', 'White Musk']
    },
    isBestSeller: true
  },
  {
    id: '6',
    name: 'Leather & Spice',
    brand: 'Heritage House',
    price: 199,
    category: 'men',
    type: 'eau-de-parfum',
    sizes: [50, 100],
    rating: 4.8,
    reviews: 267,
    image: 'brown leather perfume bottle',
    images: ['brown leather perfume bottle', 'spicy mens cologne', 'vintage fragrance'],
    description: 'A bold statement of refined masculinity with rich leather and exotic spices.',
    notes: {
      top: ['Saffron', 'Nutmeg', 'Bergamot'],
      middle: ['Leather', 'Cinnamon', 'Tobacco'],
      base: ['Oud', 'Amber', 'Cedarwood']
    }
  },
  {
    id: '7',
    name: 'Citrus Sublime',
    brand: 'Fresh & Co',
    price: 119,
    category: 'unisex',
    type: 'cologne',
    sizes: [50, 100],
    rating: 4.5,
    reviews: 198,
    image: 'yellow citrus perfume bottle',
    images: ['yellow citrus perfume bottle', 'fresh cologne', 'summer fragrance'],
    description: 'A vibrant burst of Mediterranean citrus for everyday freshness.',
    notes: {
      top: ['Lemon', 'Orange', 'Grapefruit'],
      middle: ['Neroli', 'Petitgrain', 'Basil'],
      base: ['Vetiver', 'Oakmoss', 'White Tea']
    }
  },
  {
    id: '8',
    name: 'Amber Mystique',
    brand: 'Oriental Essence',
    price: 209,
    category: 'women',
    type: 'eau-de-parfum',
    sizes: [30, 50, 100],
    rating: 4.9,
    reviews: 345,
    image: 'amber perfume bottle oriental',
    images: ['amber perfume bottle oriental', 'exotic fragrance', 'warm perfume'],
    description: 'An enchanting oriental fragrance with warm amber and exotic florals.',
    notes: {
      top: ['Star Anise', 'Orange Blossom', 'Plum'],
      middle: ['Ylang-Ylang', 'Tuberose', 'Orchid'],
      base: ['Amber', 'Vanilla', 'Benzoin']
    },
    isBestSeller: true
  },
  {
    id: '9',
    name: 'Silver Woods',
    brand: 'Nordic Scents',
    price: 169,
    category: 'men',
    type: 'eau-de-toilette',
    sizes: [50, 100],
    rating: 4.7,
    reviews: 213,
    image: 'silver modern perfume bottle',
    images: ['silver modern perfume bottle', 'woody cologne', 'contemporary fragrance'],
    description: 'A modern woody fragrance inspired by Scandinavian forests.',
    notes: {
      top: ['Juniper', 'Pine Needle', 'Bergamot'],
      middle: ['Cedar', 'Fir Balsam', 'Sage'],
      base: ['Sandalwood', 'Moss', 'Tonka Bean']
    }
  },
  {
    id: '10',
    name: 'Jasmine Nights',
    brand: 'Moonlight Parfums',
    price: 179,
    category: 'women',
    type: 'eau-de-parfum',
    sizes: [30, 50, 100],
    rating: 4.8,
    reviews: 289,
    image: 'white jasmine perfume bottle',
    images: ['white jasmine perfume bottle', 'floral night fragrance', 'romantic perfume'],
    description: 'A seductive evening fragrance with night-blooming jasmine.',
    notes: {
      top: ['Pear', 'Blackcurrant', 'Aldehydes'],
      middle: ['Jasmine Sambac', 'Orange Blossom', 'Gardenia'],
      base: ['Cashmeran', 'Vanilla', 'Musk']
    },
    isNew: true
  },
  {
    id: '11',
    name: 'Smoke & Mirrors',
    brand: 'Avant-Garde',
    price: 249,
    category: 'unisex',
    type: 'eau-de-parfum',
    sizes: [50, 100],
    rating: 4.9,
    reviews: 167,
    image: 'black smoke perfume bottle',
    images: ['black smoke perfume bottle', 'artistic fragrance', 'modern perfume'],
    description: 'An avant-garde composition that blurs the lines between masculine and feminine.',
    notes: {
      top: ['Incense', 'Pink Pepper', 'Elemi'],
      middle: ['Iris', 'Vetiver', 'Clary Sage'],
      base: ['Leather', 'Guaiac Wood', 'Labdanum']
    }
  },
  {
    id: '12',
    name: 'Tuscany Sun',
    brand: 'Mediterranean Dreams',
    price: 149,
    category: 'unisex',
    type: 'eau-de-toilette',
    sizes: [50, 100],
    rating: 4.6,
    reviews: 201,
    image: 'orange tuscany perfume bottle',
    images: ['orange tuscany perfume bottle', 'mediterranean fragrance', 'summer scent'],
    description: 'Capture the warmth of Italian summers in a bottle.',
    notes: {
      top: ['Blood Orange', 'Basil', 'Fig Leaf'],
      middle: ['Neroli', 'Jasmine', 'Rosemary'],
      base: ['Cypress', 'Amber', 'Musk']
    }
  }
];

export const giftSets = [
  {
    id: 'gift-1',
    name: 'Luxury Collection Set',
    description: 'Discover our three signature scents',
    price: 299,
    originalPrice: 399,
    image: 'luxury perfume gift set',
    items: ['Velvet Noir 30ml', 'Midnight Oud 30ml', 'Rose Impériale 30ml']
  },
  {
    id: 'gift-2',
    name: 'Travel Essentials',
    description: 'Perfect sizes for on-the-go',
    price: 149,
    image: 'perfume travel set',
    items: ['3x 10ml travel sprays', 'Luxury leather case']
  },
  {
    id: 'gift-3',
    name: "Men's Discovery Set",
    description: 'Explore masculine fragrances',
    price: 199,
    image: 'mens cologne gift set',
    items: ['Midnight Oud 50ml', 'Leather & Spice 30ml', 'Grooming kit']
  },
  {
    id: 'gift-4',
    name: "Women's Signature Set",
    description: 'Our most beloved scents',
    price: 249,
    image: 'womens perfume gift set',
    items: ['Velvet Noir 50ml', 'Rose Impériale 30ml', 'Silk scarf']
  }
];
