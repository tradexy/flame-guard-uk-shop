
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const BestSellingCarousel = () => {
  const products = [
    {
      id: 1,
      name: "Firexo 500ml Stainless Steel Extinguisher",
      price: "£21.50",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Firexo 2L Kitemarked Extinguisher",
      price: "£21.00",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Firexo 6L Kitemarked Extinguisher",
      price: "£48.00",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Firexo 9L Kitemarked Extinguisher",
      price: "£64.00",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Firexo 1L Kitemarked Extinguisher",
      price: "£18.00",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop"
    },
    {
      id: 6,
      name: "Firexo 3L Kitemarked Extinguisher",
      price: "£32.00",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold mb-2">Featured Products</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Best Selling Products</h2>
        </div>

        <div className="relative">
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {products.map((product) => (
                <CarouselItem key={product.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Card className="group hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm border border-white/50 hover:bg-white/80">
                    <CardContent className="p-6">
                      <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100/50 backdrop-blur-sm rounded-lg mb-4 overflow-hidden border border-white/30">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white/70 backdrop-blur-sm border-white/50 hover:bg-white/80" />
            <CarouselNext className="bg-white/70 backdrop-blur-sm border-white/50 hover:bg-white/80" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default BestSellingCarousel;
