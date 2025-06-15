
import { Button } from '@/components/ui/button';

const CallToAction = () => (
  <section className="py-16">
    <div className="container mx-auto px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Join Our Mission
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Every purchase helps us create safer communities and empower the next generation of fire safety heroes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" size="lg">
            Shop Safety Products
          </Button>
          <Button variant="outline" size="lg">
            Learn About Our Programmes
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default CallToAction;
