
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-orange-100 to-red-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Shop For Your Facility
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find the perfect fire safety solutions tailored to your specific environment. 
              From homes to industrial facilities, we have the right products to keep you safe.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => {
              const IconComponent = facility.icon;
              return (
                <Link key={index} to={facility.path}>
                  <Card className="group hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm border border-white/50 hover:bg-white/80 h-full">
                    <CardContent className="p-8 text-center">
                      <div className="relative overflow-hidden mb-6 flex justify-center">
                        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors">
                          <IconComponent className="w-10 h-10 text-red-600" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-gray-800">{facility.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {facility.description}
                      </p>
                      <div className="flex items-center justify-center text-red-600 font-medium group-hover:text-red-700 transition-colors">
                        Shop Now
                        <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      <Footer />
    </div>
  );
};

export default ShopFor;
