
import { Badge } from '@/components/ui/badge';

const FireSafetyEducation = () => (
  <div className="grid md:grid-cols-12 gap-8 items-start">
    {/* Left Column - Ruben's Image */}
    <div className="md:col-span-3">
      <div className="bg-gradient-to-br from-gray-200 via-gray-50 to-gray-400 rounded-xl p-6 text-center shadow-lg border border-gray-300">
        <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
          <img 
            src="/lovable-uploads/d91b57ba-fd4d-4279-996d-318c136c54af.png" 
            alt="Ruben - Fire Safety Expert"
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="font-bold text-gray-800 text-lg mb-2">Ruben</h3>
        <p className="text-gray-700 text-sm mb-3">Fire Safety Expert</p>
        <Badge className="bg-gradient-to-r from-gray-400 via-red-600 to-gray-700 text-white text-xs border border-red-400 shadow">
          Expert
        </Badge>
      </div>
    </div>

    {/* Right Column - Content */}
    <div className="md:col-span-9">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">Fire Safety Education for All Ages</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4 text-gray-600 leading-relaxed">
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
        </div>
      </div>
    </div>
  </div>
);

export default FireSafetyEducation;
