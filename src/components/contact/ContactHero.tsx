
import { Phone, Mail, MessageSquare } from 'lucide-react';

const ContactHero = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 via-white to-red-50 relative fade-in-up overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-montserrat">
          Contact <span className="text-primary">Us</span>
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
          Get in touch with our team for expert fire safety advice and support
        </p>
        <div className="flex justify-center space-x-8 text-primary">
            <Phone size={36} strokeWidth={1.5} />
            <Mail size={36} strokeWidth={1.5} />
            <MessageSquare size={36} strokeWidth={1.5} />
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
