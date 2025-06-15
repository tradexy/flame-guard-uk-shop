
import { AlertTriangle } from 'lucide-react';

const TheChallenge = () => {
  return (
    <section className="mb-16">
      <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
        <div className="lg:w-1/2">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-subtle border border-white/20">
            <div className="flex items-center mb-6">
              <AlertTriangle className="h-12 w-12 text-orange-500 mr-4 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900">The Challenge</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Many traditional service providers rely on selling more units and locking clients into expensive maintenance contracts. Since our products reduce the number of extinguishers required, some providers may be reluctant to offer them.
            </p>
            <p className="text-gray-700">
              However, to ensure safety and compliance, professional service is essential. That's why we aim to introduce a Servicing & Support Network.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl p-8 h-64 flex items-center justify-center overflow-hidden">
            <img 
              src="/lovable-uploads/de18821f-2094-43b1-b890-3e25572194d0.png"
              alt="Sofia - Little Fire Heroes"
              className="w-full h-full object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheChallenge;
