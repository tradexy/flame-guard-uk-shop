
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryBreadcrumb from '@/components/CategoryBreadcrumb';
import ProductFilters from '@/components/ProductFilters';
import ProductGrid from '@/components/ProductGrid';
import ProductSorting from '@/components/ProductSorting';
import { useState } from 'react';

const ProductCategoryAlarms = () => {
  const [sortBy, setSortBy] = useState('default');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <CategoryBreadcrumb category="Alarms" />
        
        <div className="grid lg:grid-cols-4 gap-8 mt-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <ProductFilters 
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              selectedTags={selectedTags}
              setSelectedTags={setSelectedTags}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              inStockOnly={inStockOnly}
              setInStockOnly={setInStockOnly}
            />
          </div>
          
          {/* Products Section */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Fire Detection Alarms
              </h1>
              <ProductSorting sortBy={sortBy} setSortBy={setSortBy} />
            </div>
            
            <ProductGrid 
              category="alarms"
              sortBy={sortBy}
              priceRange={priceRange}
              selectedTags={selectedTags}
              selectedCategories={selectedCategories}
              inStockOnly={inStockOnly}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductCategoryAlarms;
