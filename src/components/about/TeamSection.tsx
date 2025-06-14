
import { Card, CardContent } from '@/components/ui/card';

const TeamSection = () => {
  const team = [
    {
      name: 'Sofia',
      role: 'Co-Founder & Vision Leader',
      description: 'Sofia\'s passion for safety and community drives our mission to make fire safety accessible to all',
      icon: '👩‍🚒'
    },
    {
      name: 'Ruben',
      role: 'Co-Founder & Innovation Leader',
      description: 'Ruben leads our product development, ensuring every solution meets real-world safety needs',
      icon: '👨‍🚒'
    },
    {
      name: 'Safety Innovation Team',
      role: 'Research & Development',
      description: 'Supporting Sofia and Ruben in developing next-generation fire safety technologies',
      icon: '🔬'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Sofia & Ruben</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the passionate founders behind Little Fire Heroes, <strong>Sofia and Ruben</strong>, 
            dedicated to keeping communities safe through their innovative vision.
          </p>
        </div>
        
        {/* Team Photo - Square */}
        <div className="mb-12 flex justify-center">
          <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl overflow-hidden shadow-2xl border border-white/50 w-96 h-96">
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
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-white/70 backdrop-blur-sm border border-white/50 hover:bg-white/80">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{member.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">{member.name}</h3>
                <p className="text-red-600 font-medium mb-3">{member.role}</p>
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
