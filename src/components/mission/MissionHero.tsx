
import { Badge } from '@/components/ui/badge';

const MissionHero = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Mission
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8">
            Empowering communities through fire safety education and creating little heroes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
              🔥 Safety First
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
              🎓 Education Focus
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
              🌟 Community Impact
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionHero;
