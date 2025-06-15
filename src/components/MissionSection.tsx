
import { Button } from '@/components/ui/button';

const MissionSection = () => {
  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
       <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/lovable-uploads/ac2f5bee-fd22-4f72-b2aa-c89edc5674ef.png')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <p className="text-primary font-extrabold uppercase mb-2 tracking-wide">At Little Heroes</p>
          <h2 className="mb-6 text-white">
            Fire safety goes beyond products — it's about impact.
          </h2>
          <p className="text-subtitle mb-8 text-gray-300">
            We proudly donate 3% of our profits to help schools in the UK access sports kits, uniforms, and safety education tools
          </p>
          <Button size="lg">
            <span className="mr-2">🏫</span>REGISTER NOW
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
