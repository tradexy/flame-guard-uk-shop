
import { Card, CardContent } from '@/components/ui/card';

const CategoryGrid = () => {
  const categories = [
    {
      id: 1,
      name: 'Aerosols',
      icon: '🔴',
      description: 'Fire suppression aerosols for various applications'
    },
    {
      id: 2,
      name: 'Alarms',
      icon: '🚨',
      description: 'Fire detection and alarm systems'
    },
    {
      id: 3,
      name: 'Sachets',
      icon: '📦',
      description: 'Fire suppression sachets and powder'
    },
    {
      id: 4,
      name: 'Extinguishers',
      icon: '🧯',
      description: 'Professional fire extinguisher equipment'
    },
    {
      id: 5,
      name: 'Ancillary Products',
      icon: '🔧',
      description: 'Supporting fire safety accessories'
    },
    {
      id: 6,
      name: 'Servicing Products',
      icon: '⚙️',
      description: 'Maintenance and servicing equipment'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="group hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm border border-white/50 hover:bg-white/80 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 text-sm">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
