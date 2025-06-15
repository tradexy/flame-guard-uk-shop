
import { Button } from '@/components/ui/button';

const FaqCallToAction = () => {
  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Our fire safety experts are here to help. Get in touch with us for personalised advice and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Contact Our Experts
            </Button>
            <Button variant="outline" size="lg">
              Browse Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqCallToAction;
