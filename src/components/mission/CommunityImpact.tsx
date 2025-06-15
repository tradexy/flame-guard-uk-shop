
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const CommunityImpact = () => (
  <div className="grid md:grid-cols-12 gap-8 items-start">
    {/* Left Column - Content */}
    <div className="md:col-span-9">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">Supporting Schools & Communities</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              We're proud to donate 3% of our profits to help schools across the UK access essential safety equipment, sports kits, and educational resources. This isn't just business for us – it's about building stronger, safer communities.
            </p>
            <p>
              Our Little Hero Fire Project works directly with schools to provide fire safety education programmes, equipment donations, and training sessions for teachers and pupils alike.
            </p>
            <p>
              When you purchase from Little Heroes, you're not just protecting your own family – you're helping us extend that protection to schools and communities that need it most.
            </p>
          </div>
          <div className="mt-6">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3">
              Apply for School Support
            </Button>
          </div>
        </div>
      </div>
    </div>

    {/* Right Column - Sofia's Image */}
    <div className="md:col-span-3">
      <div className="bg-gradient-to-br from-gray-200 via-yellow-50 to-gray-300 rounded-xl p-6 text-center shadow-lg border border-gray-200">
        <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
          <img 
            src="/lovable-uploads/8c298eac-ace5-4c14-99a7-683522bb0ac3.png" 
            alt="Sofia - Community Expert"
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="font-bold text-yellow-900 text-lg mb-2">Sofia</h3>
        <p className="text-yellow-700 text-sm mb-3">Community Expert</p>
        <Badge className="bg-gradient-to-r from-gray-300 via-yellow-400 to-gray-400 text-yellow-900 text-xs border border-yellow-300 shadow">
          Community
        </Badge>
      </div>
    </div>
  </div>
);

export default CommunityImpact;
