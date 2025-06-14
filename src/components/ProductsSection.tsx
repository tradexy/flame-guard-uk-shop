
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
    <section className="py-16 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold mb-2">Featured Products</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Best Selling Products</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm border border-white/50 hover:bg-white/80">
              <CardContent className="p-6">
                <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100/50 backdrop-blur-sm rounded-lg mb-4 overflow-hidden border border-white/30 flex items-center justify-center p-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 text-center text-sm">
                  {product.name}
                </h3>
                <p className="text-red-600 font-bold text-center mb-4">{product.price}</p>
                <div className="space-y-2">
                  <Button className="w-full bg-red-600/90 backdrop-blur-sm hover:bg-red-700/90 text-white shadow-lg">
                    ADD TO BASKET
                  </Button>
                  <Button variant="outline" className="w-full border-red-600/50 bg-white/50 backdrop-blur-sm text-red-600 hover:bg-red-50/80 shadow-lg">
                    BUY NOW
                  </Button>
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
