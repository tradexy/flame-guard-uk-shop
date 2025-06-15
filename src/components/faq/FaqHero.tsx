
import { Badge } from '@/components/ui/badge';

const FaqHero = () => {
  return (
    <section className="py-16 bg-transparent text-white border-b border-white/10">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Get answers to your fire safety questions from our experts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Badge variant="secondary" className="bg-white/10 border border-white/20 text-gray-200 backdrop-blur-md">
              🔥 Fire Safety Experts
            </Badge>
            <Badge variant="secondary" className="bg-white/10 border border-white/20 text-gray-200 backdrop-blur-md">
              💡 Quick Answers
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqHero;
