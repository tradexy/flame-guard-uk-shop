
import { Button } from '@/components/ui/button';

const HeroBadgeSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="text-6xl">⭐</div>
            <div className="text-6xl ml-4">🏆</div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Earn Your Hero Badge
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            We believe everyone can be a fire hero and it starts right here.
          </p>
          <Button variant="outline" className="border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 shadow-lg">
            VIEW ALL MISSIONS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroBadgeSection;
