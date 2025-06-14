
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface ProductSortingProps {
  sortBy: string;
  setSortBy: (sort: string) => void;
}

const ProductSorting = ({ sortBy, setSortBy }: ProductSortingProps) => {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-600">Sort by:</span>
      <Select value={sortBy} onValueChange={setSortBy}>
        <SelectTrigger className="w-48 bg-white/70 backdrop-blur-sm border border-white/50">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="bg-white/90 backdrop-blur-md border border-white/20">
          <SelectItem value="default">Default Sorting</SelectItem>
          <SelectItem value="popularity">Sort by Popularity</SelectItem>
          <SelectItem value="rating">Sort by Average Rating</SelectItem>
          <SelectItem value="latest">Sort by Latest</SelectItem>
          <SelectItem value="price-low">Sort by Price: Low to High</SelectItem>
          <SelectItem value="price-high">Sort by Price: High to Low</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ProductSorting;
