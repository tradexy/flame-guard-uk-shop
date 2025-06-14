
import { Button } from '@/components/ui/button';

const ContactCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-100 via-yellow-50 to-red-100 relative fade-in-up">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-orange-200/20 to-red-200/20"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 font-montserrat animate-fade-in drop-shadow-lg">Ready to Join Sofia & Ruben's Mission?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
          Join thousands of people who trust <strong>Sofia and Ruben's</strong> vision at Little Fire Heroes 
          to keep their homes, workplaces, and communities safe. Explore our products or get in touch with our team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-red-600/90 backdrop-blur-sm hover:bg-red-700/90 text-white px-8 py-3 shadow-lg text-lg transition-all duration-300 font-montserrat animate-scale-in">
            EXPLORE PRODUCTS
          </Button>
          <Button variant="outline" className="border-red-600/50 bg-white/50 backdrop-blur-sm text-red-600 hover:bg-red-50/80 px-8 py-3 shadow-lg text-lg font-montserrat animate-scale-in">
            CONTACT US
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
