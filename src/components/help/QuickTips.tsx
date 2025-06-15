
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Clock, Truck } from 'lucide-react';

const QuickTips = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <Card className="bg-red-500/10 backdrop-blur-lg border border-red-400/20">
        <CardHeader>
          <Shield className="h-8 w-8 text-red-400 mb-2" />
          <CardTitle className="text-white">Safety First</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-red-200">
            Always read product manuals and follow safety guidelines. 
            When in doubt, consult with our experts.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-orange-500/10 backdrop-blur-lg border border-orange-400/20">
        <CardHeader>
          <Clock className="h-8 w-8 text-orange-400 mb-2" />
          <CardTitle className="text-white">Regular Maintenance</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-orange-200">
            Schedule regular checks and maintenance to ensure your 
            fire safety equipment is always ready when needed.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gray-200/10 backdrop-blur-lg border border-white/20">
        <CardHeader>
          <Truck className="h-8 w-8 text-primary mb-2" />
          <CardTitle className="text-white">Fast Delivery</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">
            Need equipment urgently? We offer express shipping 
            options to get safety equipment to you quickly.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuickTips;
