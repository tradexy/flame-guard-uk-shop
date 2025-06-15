
import { Phone, Mail, MessageSquare } from 'lucide-react';

const ContactHero = () => {
  return (
    <section 
      className="py-24 bg-cover bg-center relative fade-in-up overflow-hidden rounded-3xl" 
      style={{ backgroundImage: "url('/lovable-uploads/4d4752d2-ef63-47c2-a268-81554a68db6f.png')" }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl mb-4 text-white">
          Contact <span className="text-primary">Us</span>
        </h1>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
          Get in touch with our team for expert fire safety advice and support
        </p>
        <div className="flex justify-center space-x-6">
            <a href="tel:01844208308" className="p-4 bg-white/10 border border-white/20 rounded-full text-white hover:bg-primary/80 transition-colors duration-300">
                <Phone size={32} strokeWidth={1.5} />
            </a>
            <a href="mailto:info@littlefireheroes.co.uk" className="p-4 bg-white/10 border border-white/20 rounded-full text-white hover:bg-primary/80 transition-colors duration-300">
                <Mail size={32} strokeWidth={1.5} />
            </a>
            <div className="p-4 bg-white/10 border border-white/20 rounded-full text-white hover:bg-primary/80 transition-colors duration-300 cursor-pointer">
                <MessageSquare size={32} strokeWidth={1.5} />
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
