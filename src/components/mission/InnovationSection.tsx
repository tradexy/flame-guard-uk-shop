
import { Badge } from '@/components/ui/badge';

const InnovationSection = () => (
  <div className="grid md:grid-cols-12 gap-8 items-start">
    {/* Left Column - Ruben & Sofia */}
    <div className="md:col-span-3">
      <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 text-center shadow-subtle border">
        <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
          <img 
            src="/lovable-uploads/615994ef-6180-4154-a52d-861b5c783a6d.png" 
            alt="Ruben & Sofia, the Little Fire Heroes"
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="font-bold text-foreground text-lg mb-2">Ruben & Sofia</h3>
        <p className="text-muted-foreground text-sm mb-3">Innovation Team</p>
        <Badge variant="secondary">
          Innovation
        </Badge>
      </div>
    </div>

    {/* Right Column - Content */}
    <div className="md:col-span-9">
      <div className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-subtle border overflow-hidden">
        <div className="bg-secondary p-6 border-b">
          <h2 className="text-2xl font-bold text-foreground">Innovation Meets Environmental Responsibility</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
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
