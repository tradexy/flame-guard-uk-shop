
import { memo, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ProductsSection = memo(() => {
  const products = useMemo(() => [
    {
      id: 1,
      name: "Firexo 500ml Stainless Steel Extinguisher",
      price: "£21.50",
      image: "/lovable-uploads/7dab0756-aa57-470f-9d85-fd5778a3aec3.png"
    },
    {
      id: 2,
      name: "Firexo 2L Kitemarked Extinguisher",
      price: "£21.00",
      image: "/lovable-uploads/edcd76c1-40e9-4693-b0cc-5768537eb789.png"
    },
    {
      id: 3,
      name: "Firexo 6L Kitemarked Extinguisher",
      price: "£48.00",
      image: "/lovable-uploads/51c66cd4-7709-4a89-be39-82084826e497.png"
    },
    {
      id: 4,
      name: "Firexo 9L Kitemarked Extinguisher",
      price: "£64.00",
      image: "/lovable-uploads/7ad47141-0b8a-450e-9350-fce2e9b71b02.png"
    }
  ], []);

  return (
    <section className="py-16 bg-white fade-in-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold uppercase tracking-wider mb-2">Featured Products</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-montserrat">Best Selling Products</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square bg-gray-50 rounded-t-lg mb-4 overflow-hidden flex items-center justify-center p-6 relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 pt-0">
                  <h3 className="font-semibold text-gray-800 mb-2 text-center text-md font-montserrat truncate">
                    {product.name}
                  </h3>
                  <p className="text-primary font-bold text-center mb-4 text-lg">{product.price}</p>
                  <div className="space-y-2">
                    <Button className="w-full">
                      <span role="img" aria-label="basket" className="mr-2">🛒</span>ADD TO BASKET
                    </Button>
                    <Button variant="secondary" className="w-full">
                      <span className="mr-2">💰</span>BUY NOW
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
});

ProductsSection.displayName = 'ProductsSection';

export default ProductsSection;
