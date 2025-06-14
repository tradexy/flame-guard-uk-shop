
import { Button } from '@/components/ui/button';

const MissionSection = () => {
  return (
    <section className="py-16 bg-red-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <p className="text-orange-300 font-semibold mb-2">At Little Heroes</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Fire safety goes beyond products — it's about impact.
        </h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          We proudly donate 3% of our profits to help schools in the UK access sports kits, uniforms, and safety education tools
        </p>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
          REGISTER NOW
        </Button>
      </div>
    </section>
  );
};

export default MissionSection;
