
import { Card, CardContent } from '@/components/ui/card';

const VisionSection = () => (
  <section>
    <Card className="bg-transparent border-none shadow-none py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">
          Our Vision for the Future
        </h2>
        <p className="text-xl mb-8 text-muted-foreground">
          We envision a world where every child is a fire safety hero, every home is protected, and every community has access to life-saving education and equipment.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Card>
            <CardContent>
              <div className="text-4xl mb-4">🎓</div>
              <h3>Education First</h3>
              <p>Making fire safety education engaging and accessible for all ages</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="text-4xl mb-4">🌍</div>
              <h3>Global Impact</h3>
              <p>Expanding our reach to protect communities worldwide</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="text-4xl mb-4">🔬</div>
              <h3>Innovation</h3>
              <p>Continuously developing better, safer, and more sustainable solutions</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Card>
  </section>
);

export default VisionSection;
