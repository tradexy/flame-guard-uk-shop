
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const FireSafetyEducation = () => (
  <div className="grid md:grid-cols-12 gap-8 items-start">
    {/* Left Column - Ruben's Image */}
    <div className="md:col-span-3">
      <Card className="text-center p-6 bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg">
        <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
          <img 
            src="/lovable-uploads/d91b57ba-fd4d-4279-996d-318c136c54af.png" 
            alt="Ruben - Fire Safety Expert"
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="font-bold text-white text-lg mb-2">Ruben</h3>
        <p className="text-gray-300 text-sm mb-3">Fire Safety Expert</p>
        <Badge variant="default" className="bg-primary text-primary-foreground">
          Expert
        </Badge>
      </Card>
    </div>

    {/* Right Column - Content */}
    <div className="md:col-span-9">
      <Card className="overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg">
        <div className="p-6 border-b border-white/20">
          <h2 className="text-2xl font-bold text-white">Fire Safety Education for All Ages</h2>
        </div>
        <CardContent className="p-6">
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              At Little Heroes, we believe that fire safety education should be accessible, engaging, and fun for everyone. Our mission begins with empowering children, families, and communities with the knowledge they need to stay safe.
            </p>
            <p>
              Through interactive workshops, educational materials, and hands-on demonstrations, we're creating a new generation of fire safety heroes who understand the importance of prevention and know how to respond in emergencies.
            </p>
            <p>
              Every child deserves to feel confident and prepared. That's why we've developed age-appropriate programmes that make learning about fire safety an adventure rather than a frightening experience.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default FireSafetyEducation;
