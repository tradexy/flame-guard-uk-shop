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
    <section className="relative fade-in-up">
      <div className="relative z-10">
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
              <Card key={index} className="group transition-all duration-300 animate-fade-in bg-white/40 backdrop-blur-lg rounded-2xl shadow-lg border border-white/50 hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors">
                    <IconComponent className="w-8 h-8 text-secondary-foreground" />
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
