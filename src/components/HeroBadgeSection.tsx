
import { Button } from '@/components/ui/button';
import { ShieldCheck } from 'lucide-react';

const HeroBadgeSection = () => {
  return (
    <section className="py-20 bg-gray-50 text-gray-800 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <ShieldCheck className="w-16 h-16 text-primary" strokeWidth={1.5} />
          </div>
          <h2 className="mb-4">Earn Your Hero Badge</h2>
          <p className="text-subtitle mb-8 max-w-2xl mx-auto">
            We believe everyone can be a fire hero and it starts right here.
          </p>
          <Button variant="outline" size="lg">
            VIEW ALL MISSIONS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroBadgeSection;
