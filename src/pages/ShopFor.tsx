
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BestSellingCarousel from '@/components/BestSellingCarousel';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Home, Ship, Car, GraduationCap, Factory, Building2 } from 'lucide-react';

const ShopFor = () => {
  const facilities = [
    {
      title: 'Home',
      description: 'Fire safety products designed for residential properties and domestic use',
      icon: Home,
      path: '/shop-for/home'
    },
    {
      title: 'Boat',
      description: 'Marine fire safety equipment for boats, yachts, and watercraft',
      icon: Ship,
      path: '/shop-for/boat'
    },
    {
      title: 'Caravan',
      description: 'Compact fire safety solutions for caravans, motorhomes, and RVs',
      icon: Car,
      path: '/shop-for/caravan'
    },
    {
      title: 'School',
      description: 'Educational facility fire safety systems and equipment',
      icon: GraduationCap,
      path: '/shop-for/school'
    },
    {
      title: 'Factory',
      description: 'Industrial fire safety solutions for manufacturing facilities',
      icon: Factory,
      path: '/shop-for/factory'
    },
    {
      title: 'Office',
      description: 'Commercial fire safety equipment for office buildings and workplaces',
      icon: Building2,
      path: '/shop-for/office'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-red-50 animate-fade-in">
      <Header />
      {/* Hero Section */}
      <section className="py-16 relative bg-gradient-to-r from-orange-50/40 via-white to-red-100/60 fade-in-up overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-200/15 via-red-100/10 to-yellow-200/20 animate-pulse pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-montserrat animate-fade-in bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Shop For Your Facility
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-montserrat animate-fade-in">
              Find the perfect fire safety solutions tailored to your specific environment.
              From homes to industrial facilities, we have the right products to keep you safe.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16 fade-in-up delay-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {facilities.map((facility, index) => {
              const IconComponent = facility.icon;
              return (
                <Link key={index} to={facility.path}>
                  <Card className="group hover:shadow-lg hover:scale-105 transition-all duration-300 bg-white/70 backdrop-blur-sm border border-white/50 hover:bg-white/90 h-full animate-fade-in relative overflow-hidden">
                    {/* Mascot/Flame Watermark */}
                    <img
                      src="/lovable-uploads/fc2eea39-bf52-4e85-84f7-b9a3181a054b.png"
                      alt=""
                      aria-hidden="true"
                      className="pointer-events-none absolute right-1 bottom-1 w-16 h-16 opacity-10 z-0 select-none"
                      style={{
                        filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.03))',
                        objectFit: 'contain'
                      }}
                    />
                    <CardContent className="p-4 text-center relative z-10">
                      <div className="relative overflow-hidden mb-3 flex justify-center">
                        <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors animate-scale-in">
                          <IconComponent className="w-8 h-8 text-red-600" />
                        </div>
                      </div>
                      <h3 className="text-sm font-bold mb-2 text-gray-800 font-montserrat">{facility.title}</h3>
                      <p className="text-xs text-gray-600 mb-3 leading-relaxed line-clamp-3 font-montserrat">{facility.description}</p>
                      <div className="flex items-center justify-center text-red-600 text-xs font-medium group-hover:text-red-700 transition-colors">
                        Shop Now
                        <svg className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Section Divider: Firetruck Mascot */}
      <div className="flex justify-center my-4 fade-in-up delay-250" aria-hidden="true">
        <img
          src="/lovable-uploads/fc2eea39-bf52-4e85-84f7-b9a3181a054b.png"
          alt="" 
          className="w-20 h-12 md:w-32 md:h-16 object-contain opacity-60 mx-auto animate-bounce"
          style={{ filter: "drop-shadow(0 1px 2px rgba(255,100,0,0.08))" }}
        />
      </div>

      {/* Best Selling Products */}
      <div className="fade-in-up delay-300">
        <BestSellingCarousel />
      </div>
      <Footer />
    </div>
  );
};

export default ShopFor;
