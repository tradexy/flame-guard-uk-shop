
import { useMemo } from 'react';
import { Product } from '@/data/productsData';

interface UseProductFiltersProps {
  products: Product[];
  sortBy: string;
  priceRange: number[];
  selectedTags: string[];
  selectedCategories: string[];
  inStockOnly: boolean;
}

export const useProductFilters = ({
  products,
  sortBy,
  priceRange,
  selectedTags,
  selectedCategories,
  inStockOnly,
}: UseProductFiltersProps) => {
  const filteredAndSortedProducts = useMemo(() => {
    // Filter products
    let filtered = products.filter(product => {
      if (inStockOnly && !product.inStock) return false;
      if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
      if (selectedTags.length > 0 && !selectedTags.some(tag => product.tags.includes(tag))) return false;
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) return false;
      return true;
    });

    // Sort products
    switch (sortBy) {
      case 'popularity':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'latest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
    }

    return filtered;
  }, [products, sortBy, priceRange, selectedTags, selectedCategories, inStockOnly]);

  return filteredAndSortedProducts;
};
