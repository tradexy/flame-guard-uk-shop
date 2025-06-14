
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface ProductFiltersProps {
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  inStockOnly: boolean;
  setInStockOnly: (inStock: boolean) => void;
}

const ProductFilters = ({
  priceRange,
  setPriceRange,
  selectedTags,
  setSelectedTags,
  selectedCategories,
  setSelectedCategories,
  inStockOnly,
  setInStockOnly,
}: ProductFiltersProps) => {
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isTagsOpen, setIsTagsOpen] = useState(true);
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(true);

  const tags = ['Automatic', 'Manual', 'Compact', 'Professional', 'Portable', 'Heavy Duty'];
  const categories = ['Aerosol Systems', 'Portable Aerosols', 'Fixed Systems', 'Emergency Use'];

  const handleTagChange = (tag: string, checked: boolean) => {
    if (checked) {
      setSelectedTags([...selectedTags, tag]);
    } else {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    }
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent mb-4">
        Filters
      </h2>
      
      {/* Price Filter */}
      <Card className="bg-white/70 backdrop-blur-sm border border-white/50">
        <Collapsible open={isPriceOpen} onOpenChange={setIsPriceOpen}>
          <CollapsibleTrigger asChild>
            <CardHeader className="cursor-pointer hover:bg-white/30 transition-colors">
              <CardTitle className="text-sm flex items-center justify-between">
                Filter by Price
                <ChevronDown className={`h-4 w-4 transition-transform ${isPriceOpen ? 'rotate-180' : ''}`} />
              </CardTitle>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>£{priceRange[0]}</span>
                  <span>£{priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-gradient-to-r accent-from-red-500 accent-to-orange-500"
                  style={{
                    background: `linear-gradient(to right, #ef4444 0%, #f97316 100%)`
                  }}
                />
              </div>
            </CardContent>
          </CollapsibleContent>
        </Collapsible>
      </Card>

      {/* Tags Filter */}
      <Card className="bg-white/70 backdrop-blur-sm border border-white/50">
        <Collapsible open={isTagsOpen} onOpenChange={setIsTagsOpen}>
          <CollapsibleTrigger asChild>
            <CardHeader className="cursor-pointer hover:bg-white/30 transition-colors">
              <CardTitle className="text-sm flex items-center justify-between">
                Filter by Tags
                <ChevronDown className={`h-4 w-4 transition-transform ${isTagsOpen ? 'rotate-180' : ''}`} />
              </CardTitle>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent>
              <div className="space-y-3">
                {tags.map((tag) => (
                  <div key={tag} className="flex items-center space-x-2">
                    <Checkbox
                      id={tag}
                      checked={selectedTags.includes(tag)}
                      onCheckedChange={(checked) => handleTagChange(tag, checked as boolean)}
                      className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-red-500 data-[state=checked]:to-orange-500 border-red-300"
                    />
                    <label htmlFor={tag} className="text-sm text-gray-700 cursor-pointer">
                      {tag}
                    </label>
                  </div>
                ))}
              </div>
            </CardContent>
          </CollapsibleContent>
        </Collapsible>
      </Card>

      {/* Category Filter */}
      <Card className="bg-white/70 backdrop-blur-sm border border-white/50">
        <Collapsible open={isCategoryOpen} onOpenChange={setIsCategoryOpen}>
          <CollapsibleTrigger asChild>
            <CardHeader className="cursor-pointer hover:bg-white/30 transition-colors">
              <CardTitle className="text-sm flex items-center justify-between">
                Filter by Category
                <ChevronDown className={`h-4 w-4 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
              </CardTitle>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent>
              <div className="space-y-3">
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={category}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                      className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-red-500 data-[state=checked]:to-orange-500 border-red-300"
                    />
                    <label htmlFor={category} className="text-sm text-gray-700 cursor-pointer">
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </CardContent>
          </CollapsibleContent>
        </Collapsible>
      </Card>

      {/* Availability Filter */}
      <Card className="bg-white/70 backdrop-blur-sm border border-white/50">
        <Collapsible open={isAvailabilityOpen} onOpenChange={setIsAvailabilityOpen}>
          <CollapsibleTrigger asChild>
            <CardHeader className="cursor-pointer hover:bg-white/30 transition-colors">
              <CardTitle className="text-sm flex items-center justify-between">
                Filter by Availability
                <ChevronDown className={`h-4 w-4 transition-transform ${isAvailabilityOpen ? 'rotate-180' : ''}`} />
              </CardTitle>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="inStock"
                  checked={inStockOnly}
                  onCheckedChange={(checked) => setInStockOnly(checked as boolean)}
                  className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-red-500 data-[state=checked]:to-orange-500 border-red-300"
                />
                <label htmlFor="inStock" className="text-sm text-gray-700 cursor-pointer">
                  In Stock Only
                </label>
              </div>
            </CardContent>
          </CollapsibleContent>
        </Collapsible>
      </Card>
    </div>
  );
};

export default ProductFilters;
