
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
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <Link to="/shop-by-category">
            <Button>
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
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-gray-900">Home</Link>
          <span>/</span>
          <Link to="/shop-by-category" className="hover:text-gray-900">Shop</Link>
          <span>/</span>
          <Link to={getCategoryPath(category || '')} className="hover:text-gray-900 capitalize">
            {category?.replace(/([A-Z])/g, ' $1').trim()}
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">{product.name}</span>
        </nav>

        <div className="bg-white p-8 rounded-xl shadow-subtle grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <Card className="overflow-hidden border-none shadow-none">
              <CardContent className="p-0">
                <div className="relative aspect-square bg-gray-50 flex items-center justify-center p-4 rounded-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="max-w-full max-h-full object-contain"
                  />
                  {!product.inStock && (
                    <Badge variant="destructive" className="absolute top-4 left-4">Out of Stock</Badge>
                  )}
                  {product.originalPrice && (
                    <Badge className="absolute top-4 right-4 bg-gray-800 text-white">Sale</Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Product Details */}
          <div className="space-y-6 flex flex-col">
            <div>
              <Badge variant="outline" className="mb-2">{product.category}</Badge>
              <h1 className="text-3xl md:text-4xl font-extrabold text-foreground font-montserrat mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">({product.reviews} reviews)</span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline space-x-3">
              <span className="text-4xl font-bold text-gray-900">
                £{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  £{product.originalPrice}
                </span>
              )}
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Description</h3>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            {/* Tags */}
            {product.tags.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Features</h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3 pt-4 mt-auto">
              <Button 
                onClick={handleBuyNow}
                disabled={!product.inStock}
                className="w-full bg-gray-900 text-white hover:bg-gray-700"
                size="lg"
              >
                <Zap className="h-5 w-5 mr-2" />
                Buy Now
              </Button>
              <Button 
                onClick={handleAddToBasket}
                disabled={!product.inStock}
                variant="outline"
                className="w-full"
                size="lg"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Basket
              </Button>
            </div>

            {/* Additional Info */}
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
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
