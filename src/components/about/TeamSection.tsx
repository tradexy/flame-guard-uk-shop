import { Card, CardContent } from '@/components/ui/card';
import { User, UserCheck, FlaskConical } from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      name: 'Sofia',
      role: 'Co-Founder & Vision Leader',
      description: 'Sofia\'s passion for safety and community drives our mission to make fire safety accessible to all',
      icon: User
    },
    {
      name: 'Ruben',
      role: 'Co-Founder & Innovation Leader',
      description: 'Ruben leads our product development, ensuring every solution meets real-world safety needs',
      icon: UserCheck
    },
    {
      name: 'Safety Innovation Team',
      role: 'Research & Development',
      description: 'Supporting Sofia and Ruben in developing next-generation fire safety technologies',
      icon: FlaskConical
    }
  ];

  return (
    <section className="fade-in-up">
      <div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 font-montserrat animate-fade-in">Meet Sofia & Ruben</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in">
            Meet the passionate founders behind Little Fire Heroes, <strong>Sofia and Ruben</strong>, 
            dedicated to keeping communities safe through their innovative vision.
          </p>
        </div>
        <div className="mb-12 flex justify-center animate-fade-in">
          <div className="relative bg-white/40 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg border border-white/50 w-96 h-96">
            <img 
              src="/lovable-uploads/9558bcf3-3d6b-4fa6-b6a0-c9879452038c.png" 
              alt="Sofia and Ruben - The Little Fire Heroes Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="font-semibold text-xl">The Little Fire Heroes Team</p>
              <p className="text-sm opacity-90">Sofia, Ruben and the safety innovation team working together</p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white/40 backdrop-blur-lg border border-white/50 rounded-2xl animate-fade-in">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <member.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800 font-montserrat">{member.name}</h3>
                <p className="text-gray-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
