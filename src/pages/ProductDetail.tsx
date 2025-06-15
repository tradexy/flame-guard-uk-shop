
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useBasket } from '@/contexts/BasketContext';
import { useToast } from '@/hooks/use-toast';
import { productsData, Product } from '@/data/productsData';
import ProductNotFound from '@/components/product-detail/ProductNotFound';
import ProductBreadcrumb from '@/components/product-detail/ProductBreadcrumb';
import ProductImage from '@/components/product-detail/ProductImage';
import ProductHeader from '@/components/product-detail/ProductHeader';
import ProductPrice from '@/components/product-detail/ProductPrice';
import ProductDescription from '@/components/product-detail/ProductDescription';
import ProductFeatures from '@/components/product-detail/ProductFeatures';
import ProductActions from '@/components/product-detail/ProductActions';
import ProductInfoBadges from '@/components/product-detail/ProductInfoBadges';

const ProductDetail = () => {
  const { category, productId } = useParams();
  const { addToBasket, setIsBasketOpen } = useBasket();
  const { toast } = useToast();

  const categoryProducts = category ? productsData[category as keyof typeof productsData] : null;
  const product = categoryProducts?.find((p: Product) => p.id === parseInt(productId || '0'));

  if (!product) {
    return <ProductNotFound />;
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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8 md:py-12">
        <ProductBreadcrumb category={category || ''} productName={product.name} />

        <div className="bg-white p-8 rounded-xl shadow-subtle grid lg:grid-cols-2 gap-12">
          <ProductImage product={product} />

          <div className="space-y-6 flex flex-col">
            <ProductHeader product={product} />
            <ProductPrice product={product} />
            <ProductDescription description={product.description} />
            <ProductFeatures tags={product.tags} />
            <ProductActions 
              inStock={product.inStock}
              onBuyNow={handleBuyNow}
              onAddToBasket={handleAddToBasket}
            />
            <ProductInfoBadges />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
