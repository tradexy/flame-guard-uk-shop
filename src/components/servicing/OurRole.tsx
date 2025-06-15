
import { LifeBuoy } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const OurRole = () => {
  return (
    <section>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <LifeBuoy className="h-8 w-8 text-primary flex-shrink-0" />
                </div>
                <h2 className="text-2xl font-bold">Our Role</h2>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pt-0 p-6">
              <p>
                Little Heroes provides access to high-quality, innovative fire safety products such as multi-purpose extinguishers and alarms. However, we do not directly offer installation or maintenance services.
              </p>
              <p>
                Our mission is to make fire safety accessible and affordable, especially for schools, small businesses, and communities. Because of the versatility and coverage of our products, fewer units are often required — saving money and reducing clutter.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="bg-secondary p-8 rounded-2xl flex items-center justify-center h-full">
          <img 
            src="/lovable-uploads/3fa59730-2527-4419-9da0-01f935ecb729.png"
            alt="Little Fire Hero keeping us safe"
            className="w-full h-auto max-h-[300px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default OurRole;
