
import { Badge } from '@/components/ui/badge';

const InnovationSection = () => (
  <div className="grid md:grid-cols-12 gap-8 items-start">
    {/* Left Column - Both Characters Placeholder */}
    <div className="md:col-span-3">
      <div className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-400 rounded-xl p-6 text-center shadow-lg border border-gray-200">
        <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
          <div className="flex justify-center gap-1">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-xs">👨‍🚒</span>
            </div>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-xs">👩‍🚒</span>
            </div>
          </div>
        </div>
        <h3 className="font-bold text-gray-800 text-lg mb-2">Ruben & Sofia</h3>
        <p className="text-gray-600 text-sm mb-3">Innovation Team</p>
        <Badge variant="secondary">
          Innovation
        </Badge>
      </div>
    </div>

    {/* Right Column - Content */}
    <div className="md:col-span-9">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">Innovation Meets Environmental Responsibility</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Our commitment to innovation drives us to develop cutting-edge fire safety products that are not only highly effective but also environmentally responsible. We believe that protecting lives shouldn't come at the cost of our planet.
            </p>
            <p>
              Every product we create is designed with multiple fire classes in mind – from electrical fires to cooking oil incidents – ensuring that families and businesses have comprehensive protection with fewer products.
            </p>
            <p>
              We're constantly researching and developing new technologies to make fire safety more accessible, more effective, and more sustainable for future generations.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default InnovationSection;
