
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
      <span className="text-sm text-muted-foreground">Sort by:</span>
      <Select value={sortBy} onValueChange={setSortBy}>
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Default Sorting" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="default">Default Sorting</SelectItem>
          <SelectItem value="popularity">Popularity</SelectItem>
          <SelectItem value="rating">Average Rating</SelectItem>
          <SelectItem value="latest">Latest</SelectItem>
          <SelectItem value="price-low">Price: Low to High</SelectItem>
          <SelectItem value="price-high">Price: High to Low</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ProductSorting;
