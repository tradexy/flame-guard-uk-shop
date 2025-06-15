
import { Network, CheckCircle2 } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const ServicingNetwork = () => {
  return (
    <section>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg h-full">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Network className="h-8 w-8 text-white flex-shrink-0" />
                </div>
                <h2 className="text-2xl font-bold text-white">Our Servicing & Support Network</h2>
              </div>
            </CardHeader>
            <CardContent className="pt-0 p-6">
              <p className="mb-6 text-gray-300">
                We will invite certified, independent fire safety service providers to join our network. Through this, customers can:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-200">Get professional advice on how many extinguishers they need.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-200">Arrange certified installation or placement checks.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-200">Schedule ongoing maintenance and compliance checks.</span>
                </li>
              </ul>
              <p className="mt-6 font-medium text-white">
                This service is optional but highly recommended.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl flex items-center justify-center h-full">
          <img 
            src="/lovable-uploads/c5487974-5898-415e-a18b-c185657d0b78.png"
            alt="Little Fire Heroes SAFE logo"
            className="w-full h-auto max-h-[300px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicingNetwork;
