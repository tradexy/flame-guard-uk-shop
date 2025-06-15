
import { Button } from '@/components/ui/button';

const CallToAction = () => (
  <section>
    <div className="bg-secondary dark:bg-gray-800/50 rounded-2xl shadow-subtle p-16 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Join Our Mission
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Every purchase helps us create safer communities and empower the next generation of fire safety heroes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="default" size="lg">
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
