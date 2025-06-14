
import { Button } from '@/components/ui/button';

const MissionSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-red-600 to-red-700 text-white relative overflow-hidden fade-in-up">
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
      <div className="absolute inset-0 backdrop-blur-[1px]"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <p className="text-orange-300 font-extrabold uppercase mb-2 tracking-wide">At Little Heroes</p>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-8">
            Fire safety goes beyond products — it's about impact.
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
            We proudly donate 3% of our profits to help schools in the UK access sports kits, uniforms, and safety education tools
          </p>
          <Button className="bg-orange-500/90 font-montserrat shadow-xl backdrop-blur-sm hover:bg-orange-600/90 hover:scale-105 text-white px-8 py-3 border border-white/20 transition-all duration-300 text-lg">
            <span className="mr-1">🏫</span>REGISTER NOW
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
