
import { AlertTriangle } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const TheChallenge = () => {
  return (
    <section>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="md:order-last">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="bg-destructive/10 p-3 rounded-full">
                  <AlertTriangle className="h-8 w-8 text-destructive flex-shrink-0" />
                </div>
                <h2 className="text-2xl font-bold">The Challenge</h2>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pt-0 p-6">
              <p>
                Many traditional service providers rely on selling more units and locking clients into expensive maintenance contracts. Since our products reduce the number of extinguishers required, some providers may be reluctant to offer them.
              </p>
              <p>
                However, to ensure safety and compliance, professional service is essential. That's why we aim to introduce a Servicing & Support Network.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="md:order-first bg-secondary p-8 rounded-2xl flex items-center justify-center h-full">
          <img 
            src="/lovable-uploads/de18821f-2094-43b1-b890-3e25572194d0.png"
            alt="Sofia - Little Fire Heroes"
            className="w-full h-auto max-h-[300px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default TheChallenge;
