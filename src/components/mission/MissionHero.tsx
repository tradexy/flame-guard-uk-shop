
import { Badge } from '@/components/ui/badge';

const MissionHero = () => {
  return (
    <section className="py-16 bg-white text-gray-900 relative overflow-hidden border-b">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-display mb-6">
            Our Mission
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Empowering communities through fire safety education and creating little heroes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Badge variant="secondary" className="bg-gray-100 text-gray-800 border-gray-200 text-lg px-4 py-2">
              🔥 Safety First
            </Badge>
            <Badge variant="secondary" className="bg-gray-100 text-gray-800 border-gray-200 text-lg px-4 py-2">
              🎓 Education Focus
            </Badge>
            <Badge variant="secondary" className="bg-gray-100 text-gray-800 border-gray-200 text-lg px-4 py-2">
              🌟 Community Impact
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionHero;
