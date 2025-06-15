
import { Network, CheckCircle2 } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const ServicingNetwork = () => {
  return (
    <section>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Network className="h-8 w-8 text-primary flex-shrink-0" />
                </div>
                <h2 className="text-2xl font-bold">Our Servicing & Support Network</h2>
              </div>
            </CardHeader>
            <CardContent className="pt-0 p-6">
              <p className="mb-6">
                We will invite certified, independent fire safety service providers to join our network. Through this, customers can:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Get professional advice on how many extinguishers they need.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Arrange certified installation or placement checks.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Schedule ongoing maintenance and compliance checks.</span>
                </li>
              </ul>
              <p className="mt-6 font-medium text-foreground">
                This service is optional but highly recommended.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="bg-secondary p-8 rounded-2xl flex items-center justify-center h-full">
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
