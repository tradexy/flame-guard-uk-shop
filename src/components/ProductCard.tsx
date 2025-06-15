import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Zap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useBasket } from '@/contexts/BasketContext';
import { useToast } from '@/hooks/use-toast';
import { Product } from '@/data/productsData';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToBasket, setIsBasketOpen } = useBasket();
  const { toast } = useToast();

  const handleAddToBasket = () => {
    addToBasket({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category
    });
    toast({
      title: "Added to basket",
      description: `${product.name} has been added to your basket.`,
    });
  };

  const handleBuyNow = () => {
    handleAddToBasket();
    setIsBasketOpen(true);
    toast({
      title: "Ready to checkout",
      description: "Item added to basket. Complete your purchase in the basket.",
    });
  };

  const getCategoryKey = () => {
    // Map product categories back to data keys
    const categoryMap: { [key: string]: string } = {
      'Aerosol Systems': 'aerosols',
      'Portable Aerosols': 'aerosols',
      'Fixed Systems': 'aerosols',
      'Emergency Use': 'aerosols',
      'Smoke Detectors': 'alarms',
      'Heat Detectors': 'alarms',
      'Control Panels': 'alarms',
      'Combination Detectors': 'alarms',
      'Emergency Sachets': 'sachets',
      'Professional Sachets': 'sachets',
      'Sachet Packs': 'sachets',
      'Vehicle Sachets': 'sachets',
      'Industrial Sachets': 'sachets',
      'Home Safety': 'sachets',
      'Powder Extinguishers': 'extinguishers',
      'Carbon Dioxide Extinguishers': 'extinguishers',
      'Foam Extinguishers': 'extinguishers',
      'Water Extinguishers': 'extinguishers',
      'Wet Chemical Extinguishers': 'extinguishers',
      'Mounting & Brackets': 'ancillaryProducts',
      'Safety Signs': 'ancillaryProducts',
      'Maintenance Kits': 'ancillaryProducts',
      'Emergency Lighting': 'ancillaryProducts',
      'Fire Blankets': 'ancillaryProducts',
      'Storage & Cabinets': 'ancillaryProducts',
      'Training Materials': 'ancillaryProducts',
      'Testing Equipment': 'ancillaryProducts',
      'Service Tools': 'servicingProducts',
      'Testing Tools': 'servicingProducts',
      'Software Solutions': 'servicingProducts',
      'Inspection Tools': 'servicingProducts'
    };
    return categoryMap[product.category] || 'extinguishers';
  };

  const productUrl = `/product/${getCategoryKey()}/${product.id}`;

  return (
    <Card className="group overflow-hidden">
      <CardContent className="p-0">
        <Link to={productUrl} className="block">
          <div className="relative overflow-hidden">
            <div className="aspect-square bg-gray-50 flex items-center justify-center p-4">
              <img 
                src={product.image} 
                alt={product.name}
                className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            {!product.inStock && (
            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
              Out of Stock
            </div>
          )}
          {product.originalPrice && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
              Sale
            </div>
          )}
          </div>
        </Link>
        
        <div className="p-4">
          <Link to={productUrl}>
            <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-primary transition-colors cursor-pointer h-[40px]">
              {product.name}
            </h3>
          </Link>
          
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-red-600">
                £{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  £{product.originalPrice}
                </span>
              )}
            </div>
            <div className="flex flex-wrap gap-1">
              {product.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Button 
              onClick={handleAddToBasket}
              disabled={!product.inStock}
              className="w-full"
              size="sm"
            >
              <ShoppingCart className="mr-2" />
              Add to Basket
            </Button>
            <Button 
              onClick={handleBuyNow}
              disabled={!product.inStock}
              variant="secondary"
              className="w-full"
              size="sm"
            >
              <Zap className="mr-2" />
              Buy Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
