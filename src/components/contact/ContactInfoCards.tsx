
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const cardAnimations = [
  "animate-fade-in animate-delay-100",
  "animate-fade-in animate-delay-200",
  "animate-fade-in animate-delay-300",
  "animate-fade-in animate-delay-400",
];

const ContactInfoCards = () => {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className={`bg-white/70 hover:bg-orange-100/90 transition-colors backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-orange-200/50 text-center ${cardAnimations[0]}`}>
          <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Mail className="h-9 w-9 text-red-600" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2 font-montserrat">Email Us</h3>
          <p className="text-gray-700 text-sm">info@littlefireheroes.co.uk</p>
        </div>

        {/* Updated: Call Us card emphasizes theme red/orange */}
        <div className={`bg-white/70 hover:bg-red-100/90 transition-colors backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-red-200/60 text-center ${cardAnimations[1]}`}>
          <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Phone className="h-9 w-9 text-red-500" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2 font-montserrat">Call Us</h3>
          <p className="text-gray-700 text-sm">01844 208308</p>
        </div>

        {/* Updated: Visit Us card uses soft orange/grey and theme icon */}
        <div className={`bg-white/70 hover:bg-orange-50/90 transition-colors backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-orange-200/50 text-center ${cardAnimations[2]}`}>
          <div className="bg-orange-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
            <MapPin className="h-9 w-9 text-orange-500" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2 font-montserrat">Visit Us</h3>
          <p className="text-gray-700 text-sm">
            Unit 5 Ridge Way<br />
            Crendon Industrial Park<br />
            Long Crendon, HP18 9BF
          </p>
        </div>

        <div className={`bg-white/70 hover:bg-orange-100/90 transition-colors backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-orange-200/50 text-center ${cardAnimations[3]}`}>
          <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Clock className="h-9 w-9 text-orange-600" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2 font-montserrat">Business Hours</h3>
          <p className="text-gray-700 text-sm">
            Mon-Fri: 9:00-17:00<br />
            Sat-Sun: Closed
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoCards;

