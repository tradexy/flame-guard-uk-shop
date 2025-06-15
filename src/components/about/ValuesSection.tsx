
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Heart, Users, Award } from 'lucide-react';

const ValuesSection = () => {
  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'We prioritize safety in everything we do, ensuring our products meet the highest standards to protect lives and property.'
    },
    {
      icon: Heart,
      title: 'Community Impact',
      description: 'We believe in giving back, donating 3% of our profits to help schools access essential safety education and sports equipment.'
    },
    {
      icon: Users,
      title: 'Education & Awareness',
      description: 'We empower communities through fire safety education, making everyone a potential fire hero.'
    },
    {
      icon: Award,
      title: 'Quality Products',
      description: 'Our innovative fire safety products are designed to be effective, reliable, and accessible to everyone.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50/70 relative fade-in-up">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-yellow-100/10 via-white/20 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-orange-100/15 via-white/25 to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 font-montserrat animate-fade-in">Our Values</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in">
            These core values, established by Sofia and Ruben, guide everything we do, from product development to community engagement.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card key={index} className="group transition-all duration-300 bg-white/90 backdrop-blur-sm border-white/50 hover:border-primary/20 rounded-2xl animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-gray-800 font-montserrat">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;

