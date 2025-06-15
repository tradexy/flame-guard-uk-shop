
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/data/productsData';

interface ProductImageProps {
  product: Product;
}

const ProductImage = ({ product }: ProductImageProps) => (
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
);

export default ProductImage;
