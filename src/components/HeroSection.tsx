
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-orange-100 to-red-100 py-20">
      <div className="container mx-auto px-4">
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
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                SHOP BY CATEGORY
              </Button>
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3">
                SHOP FOR
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-lg p-8 text-white">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Fire Station</h2>
                <div className="space-y-4">
                  <div className="text-6xl">🚒</div>
                  <div className="flex justify-center space-x-4">
                    <div className="text-4xl">👨‍🚒</div>
                    <div className="text-4xl">👩‍🚒</div>
                  </div>
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
