
import { Product } from '../productsData';

export const alarmProducts: Product[] = [
  {
    id: 1,
    name: 'Optical Smoke Detector with Battery Backup',
    price: 79.99,
    originalPrice: 94.99,
    image: '/placeholder.svg',
    rating: 4.7,
    reviews: 42,
    inStock: true,
    tags: ['Battery Backup', 'Optical'],
    category: 'Smoke Detectors',
    description: 'High-sensitivity optical smoke detector with long-life battery'
  },
  {
    id: 2,
    name: 'Wireless Heat Detector Network',
    price: 129.99,
    originalPrice: null,
    image: '/placeholder.svg',
    rating: 4.6,
    reviews: 28,
    inStock: true,
    tags: ['Wireless', 'Heat Detection'],
    category: 'Heat Detectors',
    description: 'Wireless networked heat detection system'
  },
  {
    id: 3,
    name: 'Multi-Sensor Fire Alarm Panel',
    price: 399.99,
    originalPrice: 459.99,
    image: '/placeholder.svg',
    rating: 4.8,
    reviews: 35,
    inStock: false,
    tags: ['Multi-Sensor', 'Professional'],
    category: 'Control Panels',
    description: 'Advanced multi-sensor fire alarm control panel'
  },
  {
    id: 4,
    name: 'Ionisation Smoke Alarm',
    price: 64.99,
    originalPrice: null,
    image: '/placeholder.svg',
    rating: 4.4,
    reviews: 18,
    inStock: true,
    tags: ['Ionisation', 'Compact'],
    category: 'Smoke Detectors',
    description: 'Fast-response ionisation smoke alarm'
  },
  {
    id: 5,
    name: 'Addressable Fire Alarm System',
    price: 599.99,
    originalPrice: 679.99,
    image: '/placeholder.svg',
    rating: 4.9,
    reviews: 52,
    inStock: true,
    tags: ['Addressable', 'Professional'],
    category: 'Control Panels',
    description: 'Complete addressable fire alarm system'
  },
  {
    id: 6,
    name: 'Carbon Monoxide Detector Combo',
    price: 89.99,
    originalPrice: null,
    image: '/placeholder.svg',
    rating: 4.5,
    reviews: 22,
    inStock: true,
    tags: ['CO Detection', 'Combo'],
    category: 'Combination Detectors',
    description: 'Smoke and carbon monoxide detector combination'
  }
];
