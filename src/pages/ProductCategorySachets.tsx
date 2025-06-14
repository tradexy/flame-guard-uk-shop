import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryBreadcrumb from '@/components/CategoryBreadcrumb';
import ProductFilters from '@/components/ProductFilters';
import ProductGrid from '@/components/ProductGrid';
import ProductSorting from '@/components/ProductSorting';
import { useState } from 'react';

const ProductCategorySachets = () => {
  const [sortBy, setSortBy] = useState('default');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-red-50 animate-fade-in">
      <Header />
      <section className="fade-in-up relative py-12 bg-gradient-to-tr from-orange-100/30 via-white/80 to-red-100/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-200/10 via-yellow-50/10 to-orange-200/10 animate-pulse pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <CategoryBreadcrumb category="Sachets" />
          <div className="grid lg:grid-cols-4 gap-8 mt-8">
            <div className="lg:col-span-1 fade-in-up delay-100">
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
            <div className="lg:col-span-3 fade-in-up delay-200">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 via-orange-500 to-red-500 bg-clip-text text-transparent font-montserrat animate-fade-in">
                  Fire Suppression Sachets
                </h1>
                <ProductSorting sortBy={sortBy} setSortBy={setSortBy} />
              </div>
              <ProductGrid 
                category="sachets"
                sortBy={sortBy}
                priceRange={priceRange}
                selectedTags={selectedTags}
                selectedCategories={selectedCategories}
                inStockOnly={inStockOnly}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductCategorySachets;
