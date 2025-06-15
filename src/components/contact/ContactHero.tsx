
import { Phone, Mail, MessageSquare } from 'lucide-react';

const ContactHero = () => {
  return (
    <section className="py-16 bg-transparent relative fade-in-up overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl mb-4">
          Contact <span>Us</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Get in touch with our team for expert fire safety advice and support
        </p>
        <div className="flex justify-center space-x-6">
            <a href="tel:01844208308" className="p-4 bg-secondary rounded-full text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors duration-300">
                <Phone size={32} strokeWidth={1.5} />
            </a>
            <a href="mailto:info@littlefireheroes.co.uk" className="p-4 bg-secondary rounded-full text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors duration-300">
                <Mail size={32} strokeWidth={1.5} />
            </a>
            <div className="p-4 bg-secondary rounded-full text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors duration-300 cursor-pointer">
                <MessageSquare size={32} strokeWidth={1.5} />
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
