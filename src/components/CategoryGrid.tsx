import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Zap, Bell, Package, Flame, Wrench, Settings } from 'lucide-react';

const CategoryGrid = () => {
  const categories = [
    {
      title: 'Aerosols',
      description: 'Advanced aerosol fire suppression systems for automatic fire protection',
      icon: Zap,
      path: '/product-category/aerosol'
    },
    {
      title: 'Alarms',
      description: 'Fire detection and alarm systems for early warning and safety',
      icon: Bell,
      path: '/product-category/alarms'
    },
    {
      title: 'Sachets',
      description: 'Portable fire suppression sachets for immediate response',
      icon: Package,
      path: '/product-category/sachets'
    },
    {
      title: 'Extinguishers',
      description: 'Traditional and modern fire extinguishers for all fire classes',
      icon: Flame,
      path: '/product-category/extinguishers'
    },
    {
      title: 'Ancillary Products',
      description: 'Supporting equipment and accessories for fire safety systems',
      icon: Wrench,
      path: '/product-category/ancillary-products'
    },
    {
      title: 'Servicing Products',
      description: 'Maintenance and servicing equipment for fire safety systems',
      icon: Settings,
      path: '/product-category/servicing-products'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-montserrat">
            Shop By Category
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Explore our comprehensive range of fire safety products designed to protect lives and property
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Link key={index} to={category.path}>
                <div className="group h-full text-center p-6 bg-white/60 rounded-2xl border border-white/70 shadow-lg transition-all duration-300 hover:bg-white/80 hover:shadow-xl hover:-translate-y-1">
                    <div className="mb-4 flex justify-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-md font-bold mb-1 text-gray-800 font-montserrat">{category.title}</h3>
                    <p className="text-sm text-primary font-semibold group-hover:underline">
                      View Products
                    </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
