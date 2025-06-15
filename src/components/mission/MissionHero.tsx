
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const MissionHero = () => {
  return (
    <section>
      <Card className="bg-transparent border-none shadow-none text-center py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-display mb-6 text-white">
            Our Mission
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Empowering communities through fire safety education and creating little heroes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Badge variant="secondary" className="text-lg px-4 py-2 bg-white/10 text-white border-white/20">
              🔥 Safety First
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2 bg-white/10 text-white border-white/20">
              🎓 Education Focus
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2 bg-white/10 text-white border-white/20">
              🌟 Community Impact
            </Badge>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default MissionHero;
