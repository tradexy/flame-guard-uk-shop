
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
      path: '/product-category/ancillary'
    },
    {
      title: 'Servicing Products',
      description: 'Maintenance and servicing equipment for fire safety systems',
      image: '/placeholder.svg',
      path: '/product-category/servicing'
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link key={index} to={category.path}>
              <Card className="group hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm border border-white/50 hover:bg-white/80 h-full">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{category.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {category.description}
                    </p>
                    <div className="mt-4 flex items-center text-red-600 text-sm font-medium group-hover:text-red-700 transition-colors">
                      View Products
                      <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
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
