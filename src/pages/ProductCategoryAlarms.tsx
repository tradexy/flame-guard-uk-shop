
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
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-xl shadow-subtle">
          <CategoryBreadcrumb category="Alarms" />
          <div className="grid lg:grid-cols-4 gap-8 mt-8">
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
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800 font-montserrat">
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
      </main>
      <Footer />
    </div>
  );
};

export default ProductCategoryAlarms;
