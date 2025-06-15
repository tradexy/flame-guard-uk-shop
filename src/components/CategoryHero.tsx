
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const CategoryHero = () => {
  const [selectedCategory, setSelectedCategory] = useState('Choose your Category');
  const navigate = useNavigate();
  
  const categories = [
    { name: 'Aerosols', path: '/product-category/aerosol' },
    { name: 'Alarms', path: '/product-category/alarms' }, 
    { name: 'Sachets', path: '/product-category/sachets' },
    { name: 'Extinguishers', path: '/product-category/extinguishers' },
    { name: 'Ancillary Products', path: '/product-category/ancillary-products' },
    { name: 'Servicing Products', path: '/product-category/servicing-products' }
  ];

  const handleCategorySelect = (category: { name: string; path: string }) => {
    setSelectedCategory(category.name);
    navigate(category.path);
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-800">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat">
              Browse by <span className="text-gray-900">Category</span>
            </h1>
            <p className="text-lg opacity-90">
              Find the perfect fire safety products for your needs
            </p>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="lg" className="bg-gray-800 text-white hover:bg-gray-900">
                  {selectedCategory}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border">
                {categories.map((category) => (
                  <DropdownMenuItem 
                    key={category.name}
                    onClick={() => handleCategorySelect(category)}
                    className="hover:bg-gray-100 cursor-pointer"
                  >
                    {category.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div className="relative flex items-center justify-center">
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/70 w-full flex flex-col items-center">
              <img
                src="/lovable-uploads/5c679836-b525-4fdb-b3d0-a422b4fc4896.png"
                alt="Little Fire Heroes logo showing two child firefighters"
                className="w-40 h-40 md:w-56 md:h-56 object-contain"
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center font-montserrat mt-4">Choose your Category</h2>
              <p className="text-gray-600 text-center">
                Explore our range of products to keep your little fire heroes safe!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryHero;
