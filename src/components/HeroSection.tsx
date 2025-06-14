
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleShopByCategoryClick = () => {
    navigate('/shop-by-category');
  };

  return (
    <section className="relative bg-gradient-to-r from-orange-100 to-red-100 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
              Welcome to Little Fire Heroes
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Empowering individuals, children, and business communities through fire safety awareness, 
              innovative fire-safe products, and a promise to keep us all safe.
            </p>
            <p className="text-md text-gray-600 flex items-center">
              <span className="mr-2">🔥</span>
              Explore life-saving products, join our mission, and shop with purpose.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleShopByCategoryClick}
                className="bg-red-600/90 backdrop-blur-sm hover:bg-red-700/90 text-white px-8 py-3 shadow-lg"
              >
                SHOP BY CATEGORY
              </Button>
              <Button variant="outline" className="border-red-600/50 bg-white/50 backdrop-blur-sm text-red-600 hover:bg-red-50/80 px-8 py-3 shadow-lg">
                SHOP FOR
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-red-500/90 to-orange-500/90 backdrop-blur-sm rounded-lg p-8 text-white shadow-2xl border border-white/20">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Fire Station</h2>
                <div className="flex justify-center">
                  <img 
                    src="/lovable-uploads/0edc10e2-e969-4d97-a761-3f3ebd65fc00.png" 
                    alt="Fire Station with Little Fire Heroes"
                    className="w-full h-auto max-w-sm rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
