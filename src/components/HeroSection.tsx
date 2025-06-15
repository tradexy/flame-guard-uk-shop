
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleShopByCategoryClick = () => {
    navigate('/shop-by-category');
  };

  return (
    <section 
        className="relative py-20 overflow-hidden text-white" 
        style={{
            minHeight:'540px',
            backgroundImage: "url('/lovable-uploads/5bd58d8b-d66c-415d-a3e3-5fc5504afe75.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-display drop-shadow-sm text-white">
              Welcome to <span>Little Fire Heroes</span>
            </h1>
            <p className="text-subtitle max-w-xl text-gray-200">
              Empowering individuals, children, and business communities through fire safety awareness, 
              innovative fire-safe products, and a promise to keep us all safe.
            </p>
            <p className="text-gray-200">
              Explore life-saving products, join our mission, and shop with purpose.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                onClick={handleShopByCategoryClick}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Shop By Category
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black transition-colors"
                onClick={() => navigate('/shop-for')}>
                Shop For
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 w-full max-w-md">
                <h2 className="text-2xl font-montserrat font-bold mb-4 text-center text-white">Your Safety Partner</h2>
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
