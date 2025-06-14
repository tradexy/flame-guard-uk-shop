
import { Button } from '@/components/ui/button';

const HeroBadgeSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-300 via-gray-100 to-white text-gray-900 relative overflow-hidden fade-in-up">
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-gray-200 shadow-2xl max-w-4xl mx-auto">
          <div className="flex justify-center mb-6 animate-bounce">
            <div className="text-6xl">⭐</div>
            <div className="text-6xl ml-4">🏆</div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat drop-shadow text-gray-900">Earn Your Hero Badge</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90 text-gray-700">
            We believe everyone can be a fire hero and it starts right here.
          </p>
          <Button variant="outline" className="border-gray-400 bg-white/50 font-montserrat backdrop-blur-sm text-gray-700 hover:bg-gray-100 hover:scale-105 shadow-lg text-lg transition-all duration-300">
            VIEW ALL MISSIONS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroBadgeSection;

