
import { productsData } from '@/data/productsData';
import { useProductFilters } from '@/hooks/useProductFilters';
import ProductCard from '@/components/ProductCard';

interface ProductGridProps {
  category: string;
  sortBy: string;
  priceRange: number[];
  selectedTags: string[];
  selectedCategories: string[];
  inStockOnly: boolean;
}

const ProductGrid = ({ category, sortBy, priceRange, selectedTags, selectedCategories, inStockOnly }: ProductGridProps) => {
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
      <div className="mb-4 text-sm text-gray-600">
        Showing {filteredProducts.length} results
      </div>
      
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No products match your current filters.</p>
          <p className="text-sm text-gray-400 mt-2">Try adjusting your filter criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
