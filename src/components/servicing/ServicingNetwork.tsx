
import { Network, CheckCircle2 } from 'lucide-react';

const ServicingNetwork = () => {
  return (
    <section className="mb-16">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-subtle border border-white/20">
            <div className="flex items-center mb-6">
              <Network className="h-12 w-12 text-red-600 mr-4 flex-shrink-0" />
              <h2 className="text-2xl font-bold">Our Servicing & Support Network</h2>
            </div>
            <p className="mb-4">
              We will invite certified, independent fire safety service providers to join our network. Through this, customers can:
            </p>
            <ul className="space-y-3">
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
            <p className="mt-4 font-medium">
              This service is optional but highly recommended.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="bg-red-100 rounded-2xl p-8 h-64 flex items-center justify-center overflow-hidden">
            <img 
              src="/lovable-uploads/7781a704-f3c4-4d33-a829-ecb7708b5c17.png"
              alt="Little Fire Hero keeping us safe"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicingNetwork;
