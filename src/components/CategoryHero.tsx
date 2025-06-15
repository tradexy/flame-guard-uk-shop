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
    <section className="relative py-20 bg-gradient-to-br from-orange-400 via-red-500 to-red-600 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
      <div className="absolute inset-0 backdrop-blur-[1px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-white">
            <h1 className="text-4xl md:text-5xl font-bold">
              Browse by Category
            </h1>
            <p className="text-lg opacity-90">
              Find the perfect fire safety products for your needs
            </p>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 px-8 py-3 text-lg">
                  {selectedCategory}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white/90 backdrop-blur-md border border-white/20">
                {categories.map((category) => (
                  <DropdownMenuItem 
                    key={category.name}
                    onClick={() => handleCategorySelect(category)}
                    className="hover:bg-red-50 cursor-pointer"
                  >
                    {category.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div className="relative flex items-center justify-center">
            <div className="bg-gradient-to-br from-red-500/90 to-orange-500/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20 w-full flex flex-col items-center">
              <img
                src="/lovable-uploads/5c679836-b525-4fdb-b3d0-a422b4fc4896.png"
                alt="Little Fire Heroes logo showing two child firefighters"
                className="w-40 h-40 md:w-56 md:h-56 object-contain rounded-xl shadow-lg border-4 border-white mb-6 bg-white"
                style={{ background: 'linear-gradient(135deg, #fff, #f5f6fa 60%, #faf4ea)' }}
              />
              <h2 className="text-2xl font-bold text-white mb-2 text-center drop-shadow-md">Choose your Category</h2>
              <p className="text-white/90 opacity-90 text-center">
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
