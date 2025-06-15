
import { Card, CardContent } from '@/components/ui/card';

const VisionSection = () => (
  <section>
    <Card className="bg-transparent border-none shadow-none py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-white">
          Our Vision for the Future
        </h2>
        <p className="text-xl mb-8 text-gray-300">
          We envision a world where every child is a fire safety hero, every home is protected, and every community has access to life-saving education and equipment.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg text-white">
            <CardContent className="p-6">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="font-bold">Education First</h3>
              <p className="text-gray-300">Making fire safety education engaging and accessible for all ages</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg text-white">
            <CardContent className="p-6">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="font-bold">Global Impact</h3>
              <p className="text-gray-300">Expanding our reach to protect communities worldwide</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg text-white">
            <CardContent className="p-6">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="font-bold">Innovation</h3>
              <p className="text-gray-300">Continuously developing better, safer, and more sustainable solutions</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Card>
  </section>
);

export default VisionSection;
