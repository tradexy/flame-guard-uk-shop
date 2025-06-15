
import { GraduationCap } from 'lucide-react';

const CommunityImpactSection = () => {
  return (
    <section className="text-gray-800 relative overflow-hidden fade-in-up">
      <div className="relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="bg-white/40 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-lg border border-white/50 animate-fade-in">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="h-10 w-10 text-gray-700" />
            </div>
            <h2 className="text-3xl font-bold mb-6 font-montserrat text-gray-800">Making a Difference - Sofia & Ruben's Promise</h2>
            <p className="text-lg mb-8 text-gray-600 leading-relaxed">
              True to <strong>Sofia and Ruben's</strong> commitment to community, we're proud to donate 3% 
              of our profits to help schools across the UK access essential sports kits, uniforms, and safety 
              education tools. Because building safer communities starts with empowering our children - 
              a principle that Sofia and Ruben hold dear.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2 text-gray-800">3%</div>
                <div className="text-sm text-gray-500">Profits Donated</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">🏫</div>
                <div className="text-sm text-gray-500">Schools Supported</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">🎯</div>
                <div className="text-sm text-gray-500">Safety First</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityImpactSection;
