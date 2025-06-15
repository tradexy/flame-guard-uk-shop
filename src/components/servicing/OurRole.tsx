
import { LifeBuoy } from 'lucide-react';

const OurRole = () => {
  return (
    <section className="mb-16">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-subtle border border-white/20">
            <div className="flex items-center mb-6">
              <LifeBuoy className="h-12 w-12 text-red-600 mr-4 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900">Our Role</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Little Heroes provides access to high-quality, innovative fire safety products such as multi-purpose extinguishers and alarms. However, we do not directly offer installation or maintenance services.
            </p>
            <p className="text-gray-700">
              Our mission is to make fire safety accessible and affordable, especially for schools, small businesses, and communities. Because of the versatility and coverage of our products, fewer units are often required — saving money and reducing clutter.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="bg-red-100 rounded-2xl p-8 h-64 flex items-center justify-center overflow-hidden">
            <img 
              src="/lovable-uploads/ac2f5bee-fd22-4f72-b2aa-c89edc5674ef.png"
              alt="Ruben - Little Fire Heroes"
              className="w-full h-full object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurRole;
