import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Eye, Star } from 'lucide-react';

interface ProductGridProps {
  category: string;
  sortBy: string;
  priceRange: number[];
  selectedTags: string[];
  selectedCategories: string[];
  inStockOnly: boolean;
}

const ProductGrid = ({ category, sortBy, priceRange, selectedTags, selectedCategories, inStockOnly }: ProductGridProps) => {
  // Sample products data - in real implementation, this would come from your database
  const allProducts = {
    aerosols: [
      {
        id: 1,
        name: 'FirePro FP-40 Aerosol Fire Suppression Generator',
        price: 299.99,
        originalPrice: 349.99,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 24,
        inStock: true,
        tags: ['Automatic', 'Professional'],
        category: 'Aerosol Systems',
        description: 'Compact aerosol fire suppression system for enclosed spaces'
      },
      {
        id: 2,
        name: 'Portable Aerosol Fire Extinguisher 600g',
        price: 89.99,
        originalPrice: null,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 18,
        inStock: true,
        tags: ['Portable', 'Manual'],
        category: 'Portable Aerosols',
        description: 'Lightweight portable aerosol fire extinguisher'
      },
      {
        id: 3,
        name: 'Industrial Aerosol Suppression Unit',
        price: 459.99,
        originalPrice: 519.99,
        image: '/placeholder.svg',
        rating: 4.9,
        reviews: 31,
        inStock: false,
        tags: ['Heavy Duty', 'Professional'],
        category: 'Fixed Systems',
        description: 'Heavy-duty aerosol fire suppression for industrial use'
      },
      {
        id: 4,
        name: 'Compact Emergency Aerosol Device',
        price: 149.99,
        originalPrice: null,
        image: '/placeholder.svg',
        rating: 4.5,
        reviews: 12,
        inStock: true,
        tags: ['Compact', 'Emergency Use'],
        category: 'Emergency Use',
        description: 'Compact aerosol device for emergency situations'
      },
      {
        id: 5,
        name: 'Multi-Purpose Aerosol Fire Suppressor',
        price: 199.99,
        originalPrice: 229.99,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 28,
        inStock: true,
        tags: ['Automatic', 'Compact'],
        category: 'Aerosol Systems',
        description: 'Versatile aerosol fire suppression for multiple applications'
      },
      {
        id: 6,
        name: 'Professional Grade Aerosol System',
        price: 699.99,
        originalPrice: null,
        image: '/placeholder.svg',
        rating: 4.9,
        reviews: 45,
        inStock: true,
        tags: ['Professional', 'Heavy Duty'],
        category: 'Fixed Systems',
        description: 'Top-tier aerosol fire suppression system'
      }
    ],
    alarms: [
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
    ],
    sachets: [
      {
        id: 1,
        name: 'Emergency Fire Suppression Sachet 50g',
        price: 24.99,
        originalPrice: 29.99,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 18,
        inStock: true,
        tags: ['Emergency', 'Portable'],
        category: 'Emergency Sachets',
        description: 'Compact emergency fire suppression sachet for quick response'
      },
      {
        id: 2,
        name: 'Professional Fire Retardant Powder Sachet',
        price: 39.99,
        originalPrice: null,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 24,
        inStock: true,
        tags: ['Professional', 'Powder'],
        category: 'Professional Sachets',
        description: 'High-grade fire retardant powder in convenient sachet form'
      },
      {
        id: 3,
        name: 'Multi-Purpose Fire Suppressant Sachet Pack',
        price: 89.99,
        originalPrice: 104.99,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 31,
        inStock: false,
        tags: ['Multi-Purpose', 'Pack'],
        category: 'Sachet Packs',
        description: 'Pack of 6 multi-purpose fire suppressant sachets'
      },
      {
        id: 4,
        name: 'Compact Vehicle Fire Sachet',
        price: 19.99,
        originalPrice: null,
        image: '/placeholder.svg',
        rating: 4.4,
        reviews: 15,
        inStock: true,
        tags: ['Vehicle', 'Compact'],
        category: 'Vehicle Sachets',
        description: 'Specially designed fire suppressant sachet for vehicle use'
      },
      {
        id: 5,
        name: 'Heavy Duty Industrial Fire Sachet',
        price: 59.99,
        originalPrice: 69.99,
        image: '/placeholder.svg',
        rating: 4.9,
        reviews: 28,
        inStock: true,
        tags: ['Heavy Duty', 'Industrial'],
        category: 'Industrial Sachets',
        description: 'Industrial-grade fire suppressant sachet for heavy-duty applications'
      },
      {
        id: 6,
        name: 'Home Safety Fire Suppressant Sachet',
        price: 16.99,
        originalPrice: null,
        image: '/placeholder.svg',
        rating: 4.5,
        reviews: 42,
        inStock: true,
        tags: ['Home Safety', 'Easy Use'],
        category: 'Home Safety',
        description: 'User-friendly fire suppressant sachet for home safety'
      }
    ]
  };

  const products = allProducts[category as keyof typeof allProducts] || [];

  // Filter and sort products based on current filters
  let filteredProducts = products.filter(product => {
    if (inStockOnly && !product.inStock) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    if (selectedTags.length > 0 && !selectedTags.some(tag => product.tags.includes(tag))) return false;
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) return false;
    return true;
  });

  // Sort products
  switch (sortBy) {
    case 'popularity':
      filteredProducts.sort((a, b) => b.reviews - a.reviews);
      break;
    case 'rating':
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
    case 'latest':
      filteredProducts.sort((a, b) => b.id - a.id);
      break;
    case 'price-low':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
  }

  return (
    <div>
      <div className="mb-4 text-sm text-gray-600">
        Showing {filteredProducts.length} results
      </div>
      
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm border border-white/50 hover:bg-white/80">
            <CardContent className="p-0">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {!product.inStock && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
                    Out of Stock
                  </div>
                )}
                {product.originalPrice && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
                    Sale
                  </div>
                )}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
                  <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="sm" className="bg-red-500 hover:bg-red-600" disabled={!product.inStock}>
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-red-600">
                      £{product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        £{product.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {product.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No products match your current filters.</p>
          <p className="text-sm text-gray-400 mt-2">Try adjusting your filter criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
