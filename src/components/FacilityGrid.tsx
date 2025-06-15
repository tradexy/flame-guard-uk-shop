
import { Card, CardContent, CardTitle } from '@/components/ui/card';
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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {facilities.map((facility, index) => {
        const IconComponent = facility.icon;
        return (
          <Link key={index} to={facility.path}>
            <Card className="group h-full text-center">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-md font-bold mb-1 text-gray-800 font-montserrat">{facility.title}</h3>
                <p className="text-sm text-gray-600 mb-3 leading-relaxed line-clamp-2">{facility.description}</p>
                <div className="text-sm font-semibold text-primary group-hover:underline">
                  Shop Now
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
