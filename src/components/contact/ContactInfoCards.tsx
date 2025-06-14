
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactInfoCards = () => {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 text-center">
          <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Mail className="h-8 w-8 text-red-600" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
          <p className="text-gray-600 text-sm">
            info@littlefireheroes.co.uk
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 text-center">
          <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Phone className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
          <p className="text-gray-600 text-sm">
            01844 208308
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 text-center">
          <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <MapPin className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Visit Us</h3>
          <p className="text-gray-600 text-sm">
            Unit 5 Ridge Way<br />
            Crendon Industrial Park<br />
            Long Crendon, HP18 9BF
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 text-center">
          <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Clock className="h-8 w-8 text-orange-600" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Business Hours</h3>
          <p className="text-gray-600 text-sm">
            Mon-Fri: 9:00-17:00<br />
            Sat-Sun: Closed
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoCards;
