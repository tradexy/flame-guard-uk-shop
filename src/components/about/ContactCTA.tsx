
import { Button } from '@/components/ui/button';

const ContactCTA = () => {
  return (
    <section className="relative">
      <div className="text-center relative z-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 font-montserrat">Ready to Join Our Mission?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of people who trust Little Fire Heroes
          to keep their homes, workplaces, and communities safe.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" size="lg">
            Explore Products
          </Button>
          <Button variant="outline" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
