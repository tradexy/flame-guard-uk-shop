
import { Button } from '@/components/ui/button';
import { ShoppingCart, Zap } from 'lucide-react';

interface ProductActionsProps {
  inStock: boolean;
  onBuyNow: () => void;
  onAddToBasket: () => void;
}

const ProductActions = ({ inStock, onBuyNow, onAddToBasket }: ProductActionsProps) => (
  <div className="space-y-3 pt-4 mt-auto">
    <Button 
      onClick={onBuyNow}
      disabled={!inStock}
      className="w-full bg-gray-900 text-white hover:bg-gray-700"
      size="lg"
    >
      <Zap className="h-5 w-5 mr-2" />
      Buy Now
    </Button>
    <Button 
      onClick={onAddToBasket}
      disabled={!inStock}
      variant="outline"
      className="w-full"
      size="lg"
    >
      <ShoppingCart className="h-5 w-5 mr-2" />
      Add to Basket
    </Button>
  </div>
);

export default ProductActions;
