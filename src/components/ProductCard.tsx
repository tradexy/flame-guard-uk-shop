
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Eye, Star, Zap } from 'lucide-react';
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

  // Determine the category key for routing
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
    <Card className="group hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm border border-white/50 hover:bg-white/80">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100/50 flex items-center justify-center p-4">
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
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
            <Link to={productUrl}>
              <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                <Eye className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="p-4">
          <Link to={productUrl}>
            <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-red-600 transition-colors cursor-pointer">
              {product.name}
            </h3>
          </Link>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center mb-2">
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
              className="w-full bg-red-600 hover:bg-red-700 text-white"
              size="sm"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Basket
            </Button>
            <Button 
              onClick={handleBuyNow}
              disabled={!product.inStock}
              variant="outline"
              className="w-full border-red-600 text-red-600 hover:bg-red-50"
              size="sm"
            >
              <Zap className="h-4 w-4 mr-2" />
              Buy Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
