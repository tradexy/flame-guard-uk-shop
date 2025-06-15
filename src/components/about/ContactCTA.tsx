
import { Button } from '@/components/ui/button';

const ContactCTA = () => {
  return (
    <section className="py-16 bg-gray-50 relative fade-in-up">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 font-montserrat">Ready to Join Our Mission?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of people who trust Little Fire Heroes
          to keep their homes, workplaces, and communities safe.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">
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
