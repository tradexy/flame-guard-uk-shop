
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
);

export default FacilityGrid;
