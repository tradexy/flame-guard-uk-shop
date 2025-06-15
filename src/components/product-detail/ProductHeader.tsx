
import { Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/data/productsData';

interface ProductHeaderProps {
  product: Product;
}

const ProductHeader = ({ product }: ProductHeaderProps) => (
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
);

export default ProductHeader;
