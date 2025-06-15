
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Clock, Truck } from 'lucide-react';

const QuickTips = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-12">
      <Card className="bg-red-50 border-red-200">
        <CardHeader>
          <Shield className="h-8 w-8 text-red-600 mb-2" />
          <CardTitle className="text-red-900">Safety First</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-red-800">
            Always read product manuals and follow safety guidelines. 
            When in doubt, consult with our experts.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-orange-50 border-orange-200">
        <CardHeader>
          <Clock className="h-8 w-8 text-orange-600 mb-2" />
          <CardTitle className="text-orange-900">Regular Maintenance</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-orange-800">
            Schedule regular checks and maintenance to ensure your 
            fire safety equipment is always ready when needed.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gray-50 border-gray-200">
        <CardHeader>
          <Truck className="h-8 w-8 text-orange-500 mb-2" />
          <CardTitle className="text-gray-900">Fast Delivery</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-800">
            Need equipment urgently? We offer express shipping 
            options to get safety equipment to you quickly.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuickTips;
