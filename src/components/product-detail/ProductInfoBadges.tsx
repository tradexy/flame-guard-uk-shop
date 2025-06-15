
import { Shield, Truck, RotateCcw } from 'lucide-react';

const ProductInfoBadges = () => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t mt-6">
    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
      <Shield className="h-5 w-5 text-gray-500" />
      <span>2 Year Warranty</span>
    </div>
    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
      <Truck className="h-5 w-5 text-gray-500" />
      <span>Free UK Delivery over £50</span>
    </div>
    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
      <RotateCcw className="h-5 w-5 text-gray-500" />
      <span>30-Day Returns Policy</span>
    </div>
  </div>
);

export default ProductInfoBadges;
