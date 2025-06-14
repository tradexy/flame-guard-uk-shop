
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, Zap, Shield, Truck, RotateCcw } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useBasket } from '@/contexts/BasketContext';
import { useToast } from '@/hooks/use-toast';
import { productsData, Product } from '@/data/productsData';

const ProductDetail = () => {
  const { category, productId } = useParams();
  const { addToBasket, setIsBasketOpen } = useBasket();
  const { toast } = useToast();

  // Find the product in the appropriate category
  const categoryProducts = category ? productsData[category as keyof typeof productsData] : null;
  const product = categoryProducts?.find((p: Product) => p.id === parseInt(productId || '0'));

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <Link to="/shop-by-category">
            <Button className="bg-red-600 hover:bg-red-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Shop
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

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

  const getCategoryPath = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      'aerosols': '/product-category/aerosol',
      'alarms': '/product-category/alarms',
      'sachets': '/product-category/sachets',
      'extinguishers': '/product-category/extinguishers',
      'ancillaryProducts': '/product-category/ancillary-products',
      'servicingProducts': '/product-category/servicing-products'
    };
    return categoryMap[category] || '/shop-by-category';
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-red-600">Home</Link>
          <span>/</span>
          <Link to="/shop-by-category" className="hover:text-red-600">Shop</Link>
          <span>/</span>
          <Link to={getCategoryPath(category || '')} className="hover:text-red-600 capitalize">
            {category?.replace(/([A-Z])/g, ' $1').trim()}
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg bg-white/70 backdrop-blur-sm border border-white/50"
              />
              {!product.inStock && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 text-sm rounded">
                  Out of Stock
                </div>
              )}
              {product.originalPrice && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 text-sm rounded">
                  Sale
                </div>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">({product.reviews} reviews)</span>
                </div>
                <Badge variant="secondary">{product.category}</Badge>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-red-600">
                £{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">
                  £{product.originalPrice}
                </span>
              )}
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Features</h3>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="bg-gray-50">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button 
                onClick={handleAddToBasket}
                disabled={!product.inStock}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg"
                size="lg"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Basket
              </Button>
              <Button 
                onClick={handleBuyNow}
                disabled={!product.inStock}
                variant="outline"
                className="w-full border-red-600 text-red-600 hover:bg-red-50 py-3 text-lg"
                size="lg"
              >
                <Zap className="h-5 w-5 mr-2" />
                Buy Now
              </Button>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-1 gap-4 pt-6 border-t">
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Shield className="h-5 w-5 text-green-600" />
                <span>2 Year Warranty</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Truck className="h-5 w-5 text-blue-600" />
                <span>Free UK Delivery on orders over £50</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <RotateCcw className="h-5 w-5 text-purple-600" />
                <span>30-Day Returns Policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
