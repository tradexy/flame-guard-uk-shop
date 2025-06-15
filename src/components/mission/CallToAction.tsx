
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const CallToAction = () => (
  <section>
    <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg p-16 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6">
          Join Our Mission
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Every purchase helps us create safer communities and empower the next generation of fire safety heroes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="default" size="lg">
            Shop Safety Products
          </Button>
          <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-black">
            Learn About Our Programmes
          </Button>
        </div>
      </div>
    </Card>
  </section>
);

export default CallToAction;
