
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CommunityImpact = () => (
  <div className="grid md:grid-cols-12 gap-8 items-start">
    {/* Left Column - Content */}
    <div className="md:col-span-9">
      <Card className="overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg">
        <div className="p-6 border-b border-white/20">
          <h2 className="text-2xl font-bold text-white">Supporting Schools & Communities</h2>
        </div>
        <CardContent className="p-6">
          <div className="space-y-4 text-gray-300 leading-relaxed">
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
            <Button variant="destructive" size="lg">
              Apply for School Support
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>

    {/* Right Column - Sofia's Image */}
    <div className="md:col-span-3">
      <Card className="text-center p-6 bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg">
        <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
          <img 
            src="/lovable-uploads/8c298eac-ace5-4c14-99a7-683522bb0ac3.png" 
            alt="Sofia - Community Expert"
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="font-bold text-white text-lg mb-2">Sofia</h3>
        <p className="text-gray-300 text-sm mb-3">Community Expert</p>
        <Badge variant="secondary" className="bg-white/20 text-white">
          Community
        </Badge>
      </Card>
    </div>
  </div>
);

export default CommunityImpact;
