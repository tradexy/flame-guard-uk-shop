
import { Button } from '@/components/ui/button';

const ContactCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-100 to-red-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Join Sofia & Ruben's Mission?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of people who trust <strong>Sofia and Ruben's</strong> vision at Little Fire Heroes 
          to keep their homes, workplaces, and communities safe. Explore our products or get in touch with our team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-red-600/90 backdrop-blur-sm hover:bg-red-700/90 text-white px-8 py-3 shadow-lg">
            EXPLORE PRODUCTS
          </Button>
          <Button variant="outline" className="border-red-600/50 bg-white/50 backdrop-blur-sm text-red-600 hover:bg-red-50/80 px-8 py-3 shadow-lg">
            CONTACT US
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
