
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleShopByCategoryClick = () => {
    navigate('/shop-by-category');
  };

  return (
    <section className="relative bg-gradient-to-r from-orange-200 via-yellow-50 to-red-100 py-20 overflow-hidden transition-colors duration-700" style={{minHeight:'540px'}}>
      <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-orange-100/50 via-transparent to-red-200/50"></div>
      <div className="container mx-auto px-4 relative z-10 fade-in-up">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-7">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 font-montserrat drop-shadow-lg animate__animated animate__fadeInDown">
              Welcome to <span className="inline-block text-red-600">Little Fire Heroes</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl animate__animated animate__fadeInLeft">
              Empowering individuals, children, and business communities through fire safety awareness, 
              innovative fire-safe products, and a promise to keep us all safe.
            </p>
            <p className="text-md text-gray-700 flex items-center">
              <span className="mr-2 text-xl animate-bounce">🔥</span>
              Explore life-saving products, join our mission, and shop with purpose.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleShopByCategoryClick}
                className="bg-red-600/90 font-montserrat backdrop-blur-sm hover:scale-105 hover:bg-red-700/90 text-white px-8 py-3 shadow-xl text-lg transition-all duration-300"
              >
                <span className="mr-2">🔥</span>SHOP BY CATEGORY
              </Button>
              <Button 
                variant="outline" 
                className="border-red-600/60 font-montserrat bg-white/60 backdrop-blur-sm text-red-600 hover:bg-red-50/80 hover:scale-105 px-8 py-3 shadow-xl text-lg transition-all duration-300"
                onClick={() => navigate('/shop-for')}>
                <span className="mr-2">👨‍👩‍👦</span>SHOP FOR
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center items-center fade-in-up">
            <div className="bg-gradient-to-br from-red-500/90 to-orange-500/90 backdrop-blur-xl rounded-xl p-8 text-white shadow-2xl border border-white/20 animate__animated animate__fadeIn">
              <div className="text-center">
                <h2 className="text-2xl font-montserrat font-bold mb-4">Fire Station</h2>
                <div className="flex justify-center">
                  <img 
                    src="/lovable-uploads/0edc10e2-e969-4d97-a761-3f3ebd65fc00.png" 
                    alt="Fire Station with Little Fire Heroes"
                    className="w-[300px] max-w-full h-auto rounded-xl shadow-2xl border-4 border-white/30"
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
