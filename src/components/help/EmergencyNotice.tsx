
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Siren } from 'lucide-react';

const EmergencyNotice = () => {
  return (
    <Card className="bg-red-600/90 border-red-400 mt-12 max-w-4xl mx-auto backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white text-center flex items-center justify-center gap-2 text-2xl">
          <Siren className="h-6 w-6" />
          Emergency Notice
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-red-100 text-center">
          <strong>In case of fire emergency, call 999 immediately.</strong><br />
          This website provides guidance on fire prevention and safety equipment, 
          but emergency services should always be contacted first in any fire situation.
        </p>
      </CardContent>
    </Card>
  );
};

export default EmergencyNotice;
