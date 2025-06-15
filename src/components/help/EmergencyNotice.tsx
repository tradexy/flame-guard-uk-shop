
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Siren } from 'lucide-react';

const EmergencyNotice = () => {
  return (
    <Card className="bg-red-50 border-red-200 mt-12 max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-red-900 text-center flex items-center justify-center gap-2">
          <Siren className="h-6 w-6" />
          Emergency Notice
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-red-800 text-center">
          <strong>In case of fire emergency, call 999 immediately.</strong><br />
          This website provides guidance on fire prevention and safety equipment, 
          but emergency services should always be contacted first in any fire situation.
        </p>
      </CardContent>
    </Card>
  );
};

export default EmergencyNotice;
