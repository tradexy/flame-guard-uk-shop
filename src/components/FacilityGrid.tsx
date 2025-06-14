
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Home, Ship, Car, GraduationCap, Factory, Building2 } from 'lucide-react';

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

const FacilityGrid = () => (
  <div className="container mx-auto px-4 z-10 relative">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {facilities.map((facility, index) => {
        const IconComponent = facility.icon;
        return (
          <Link key={index} to={facility.path}>
            <Card className="group hover:shadow-xl hover:-translate-y-1.5 hover:scale-105 transition-all duration-300 bg-white/70 backdrop-blur-2xl border border-white/60 hover:bg-white/90 h-full animate-fade-in relative overflow-hidden cursor-pointer ring-0 focus-visible:ring-2 focus-visible:ring-orange-400">
              {/* Animated Mascot/Flame Watermark */}
              <img
                src="/lovable-uploads/fc2eea39-bf52-4e85-84f7-b9a3181a054b.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute right-1 bottom-1 w-16 h-16 opacity-10 z-0 select-none group-hover:scale-110 transition-transform duration-300"
                style={{
                  filter: 'drop-shadow(0 2px 6px rgba(240,90,10,0.07))',
                  objectFit: 'contain'
                }}
              />
              <CardContent className="p-4 text-center relative z-10">
                <div className="relative overflow-hidden mb-3 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-100/70 via-orange-100/80 to-yellow-100/60 rounded-lg flex items-center justify-center group-hover:bg-yellow-100 transition-colors animate-scale-in shadow ring-0 group-hover:ring-4 group-hover:ring-orange-200">
                    <IconComponent className="w-8 h-8 text-orange-500 group-hover:scale-125 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-sm font-bold mb-2 text-gray-800 font-montserrat">{facility.title}</h3>
                <p className="text-xs text-gray-700 mb-3 leading-relaxed line-clamp-3 font-montserrat">{facility.description}</p>
                <div className="flex items-center justify-center text-orange-500 text-xs font-semibold group-hover:text-red-600 transition-colors mt-2">
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
);

export default FacilityGrid;
