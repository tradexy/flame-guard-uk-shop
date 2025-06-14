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
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-red-50 animate-fade-in">
      <Header />
      {/* Hero Section */}
      <section className="py-16 relative bg-gradient-to-r from-orange-50/40 via-white to-red-100/60 fade-in-up overflow-hidden shadow-[0_8px_48px_-18px_rgba(230,60,0,0.05)]">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-200/18 via-red-100/16 to-yellow-200/15 animate-pulse pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-montserrat animate-fade-in bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-md">
              Shop For Your Facility
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-montserrat animate-fade-in mb-2">
              Find the perfect fire safety solutions tailored to your specific environment.
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
      <section className="py-16 fade-in-up delay-200">
        <FacilityGrid />
      </section>

      <SectionDivider />

      {/* Section Divider: Firetruck Mascot */}
      {/* Remove old divider, replaced by SectionDivider */}

      {/* Best Selling Products */}
      <div className="fade-in-up delay-300">
        <BestSellingCarousel />
      </div>
      <Footer />
      <QuickShopBar />
    </div>
  );
};

export default ShopFor;
