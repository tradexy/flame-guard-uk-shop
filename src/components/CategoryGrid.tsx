
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const CategoryGrid = () => {
  const categories = [
    {
      title: 'Aerosols',
      description: 'Advanced aerosol fire suppression systems for automatic fire protection',
      image: '/placeholder.svg',
      path: '/product-category/aerosol'
    },
    {
      title: 'Alarms',
      description: 'Fire detection and alarm systems for early warning and safety',
      image: '/placeholder.svg',
      path: '/product-category/alarms'
    },
    {
      title: 'Sachets',
      description: 'Portable fire suppression sachets for immediate response',
      image: '/placeholder.svg',
      path: '/product-category/sachets'
    },
    {
      title: 'Extinguishers',
      description: 'Traditional and modern fire extinguishers for all fire classes',
      image: '/placeholder.svg',
      path: '/product-category/extinguishers'
    },
    {
      title: 'Ancillary Products',
      description: 'Supporting equipment and accessories for fire safety systems',
      image: '/placeholder.svg',
      path: '/product-category/ancillary-products'
    },
    {
      title: 'Servicing Products',
      description: 'Maintenance and servicing equipment for fire safety systems',
      image: '/placeholder.svg',
      path: '/product-category/servicing-products'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Shop By Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of fire safety products designed to protect lives and property
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <Link key={index} to={category.path}>
              <Card className="group hover:shadow-lg transition-all duration-300 bg-white/70 backdrop-blur-sm border border-white/50 hover:bg-white/80 h-full">
                <CardContent className="p-4 text-center">
                  <div className="relative overflow-hidden mb-3">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-20 object-cover group-hover:scale-105 transition-transform duration-300 rounded-md"
                    />
                  </div>
                  <h3 className="text-sm font-bold mb-2 text-gray-800">{category.title}</h3>
                  <div className="flex items-center justify-center text-red-600 text-xs font-medium group-hover:text-red-700 transition-colors">
                    View Products
                    <svg className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
