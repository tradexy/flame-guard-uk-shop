import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleShopByCategoryClick = () => {
    navigate('/shop-by-category');
  };

  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-red-50 py-20 overflow-hidden" style={{minHeight:'540px'}}>
      <div className="container mx-auto px-4 relative z-10 fade-in-up">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 font-montserrat drop-shadow-sm">
              Welcome to <span className="text-primary">Little Fire Heroes</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Empowering individuals, children, and business communities through fire safety awareness, 
              innovative fire-safe products, and a promise to keep us all safe.
            </p>
            <p className="text-md text-gray-700">
              Explore life-saving products, join our mission, and shop with purpose.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                onClick={handleShopByCategoryClick}
              >
                Shop By Category
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => navigate('/shop-for')}>
                Shop For
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-subtle border border-white/50 w-full max-w-md">
                <h2 className="text-2xl font-montserrat font-bold mb-4 text-center text-gray-800">Your Safety Partner</h2>
                <div className="flex justify-center">
                  <img 
                    src="/lovable-uploads/0edc10e2-e969-4d97-a761-3f3ebd65fc00.png" 
                    alt="Fire Station with Little Fire Heroes"
                    className="w-[300px] max-w-full h-auto rounded-xl"
                  />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
