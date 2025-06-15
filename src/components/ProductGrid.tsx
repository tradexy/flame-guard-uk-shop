
import { memo } from 'react';
import { useProductFilters } from '@/hooks/useProductFilters';
import ProductCard from '@/components/ProductCard';
import { productsData } from '@/data/productsData';

interface ProductGridProps {
  category: string;
  sortBy: string;
  priceRange: number[];
  selectedTags: string[];
  selectedCategories: string[];
  inStockOnly: boolean;
}

const ProductGrid = memo(({ category, sortBy, priceRange, selectedTags, selectedCategories, inStockOnly }: ProductGridProps) => {
  const products = productsData[category as keyof typeof productsData] || [];
  
  const filteredProducts = useProductFilters({
    products,
    sortBy,
    priceRange,
    selectedTags,
    selectedCategories,
    inStockOnly,
  });

  return (
    <div>
      <div className="mb-4 text-sm text-muted-foreground">
        Showing {filteredProducts.length} of {products.length} products
      </div>
      
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-20 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold text-foreground">No Products Found</h3>
          <p className="text-muted-foreground mt-2">Try adjusting your filter criteria to find what you're looking for.</p>
        </div>
      )}
    </div>
  );
});

ProductGrid.displayName = 'ProductGrid';

export default ProductGrid;
