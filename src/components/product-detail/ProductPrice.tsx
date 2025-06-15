
import { Product } from '@/data/productsData';

interface ProductPriceProps {
  product: Product;
}

const ProductPrice = ({ product }: ProductPriceProps) => (
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
);

export default ProductPrice;
