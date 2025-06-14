import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BestSellingCarousel from '@/components/BestSellingCarousel';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Home, Ship, Car, GraduationCap, Factory, Building2 } from 'lucide-react';
import FacilityGrid from '@/components/FacilityGrid';
import QuickShopBar from '@/components/QuickShopBar';
import SectionDivider from '@/components/SectionDivider';

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
    <div className="min-h-screen relative bg-gradient-to-br from-orange-100 via-white to-red-50 animate-fade-in overflow-x-hidden">
      {/* Animated background flames for hero section */}
      <div className="absolute top-0 left-0 w-full h-64 pointer-events-none z-0">
        <div className="absolute w-56 h-56 bg-gradient-to-br from-orange-200/40 via-yellow-100/60 to-red-200/30 rounded-full blur-3xl opacity-60 left-[-60px] top-[-50px] animate-pulse-slow" />
        <div className="absolute w-48 h-48 bg-gradient-to-tr from-red-200/60 via-orange-200/40 to-yellow-100/40 rounded-full blur-2xl opacity-50 right-[-40px] top-8 animate-pulse-slow delay-200" />
      </div>
      <Header />
      {/* Hero Section */}
      <section className="py-16 relative z-10 bg-gradient-to-r from-orange-50/40 via-white to-red-100/60 fade-in-up overflow-hidden shadow-[0_8px_48px_-18px_rgba(230,60,0,0.05)]">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-200/18 via-red-100/16 to-yellow-200/15 animate-pulse pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-montserrat animate-fade-in bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-xl">
              Shop For Your Facility
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto font-montserrat animate-fade-in mb-2">
              Find the perfect fire safety solutions tailored to your specific environment.<br />
              From homes to industrial facilities, we have the right products to keep you safe.
            </p>
            <div className="flex justify-center gap-2 mt-6">
              <span className="text-5xl animate-bounce">{'🔥'}</span>
              <span className="text-5xl animate-bounce [animation-delay:200ms]">{'🚒'}</span>
              <span className="text-5xl animate-bounce [animation-delay:400ms]">{'🔥'}</span>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Facilities Grid */}
      <section className="py-16 fade-in-up delay-200 z-10 relative">
        <FacilityGrid />
      </section>

      <SectionDivider />

      {/* Animated bottom background flames after grid */}
      <div className="absolute bottom-0 left-0 w-full h-48 z-0">
        <div className="absolute w-60 h-60 bg-gradient-to-br from-red-200/60 via-orange-300/30 to-yellow-100/20 rounded-full blur-3xl opacity-30 left-0 bottom-0 animate-pulse-slow delay-150" />
        <div className="absolute w-56 h-48 bg-gradient-to-r from-orange-100/20 via-yellow-200/20 to-red-100/30 rounded-full blur-2xl opacity-20 right-14 -bottom-8 animate-pulse-slow delay-300" />
      </div>

      {/* Best Selling Products */}
      <div className="fade-in-up delay-300 z-10 relative">
        <BestSellingCarousel />
      </div>
      <Footer />
      <QuickShopBar />
    </div>
  );
};

export default ShopFor;
