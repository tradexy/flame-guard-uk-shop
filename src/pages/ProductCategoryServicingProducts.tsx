
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryBreadcrumb from '@/components/CategoryBreadcrumb';
import ProductFilters from '@/components/ProductFilters';
import ProductGrid from '@/components/ProductGrid';
import ProductSorting from '@/components/ProductSorting';
import { useState } from 'react';

const ProductCategoryServicingProducts = () => {
  const [sortBy, setSortBy] = useState('default');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      <Header />
      <section className="fade-in-up relative py-12 bg-white">
        <div className="container mx-auto px-4 relative z-10">
          <CategoryBreadcrumb category="Servicing Products" />
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
                <h1 className="text-3xl font-bold text-gray-800 font-montserrat animate-fade-in">
                  Fire Safety Servicing Products
                </h1>
                <ProductSorting sortBy={sortBy} setSortBy={setSortBy} />
              </div>
              <ProductGrid 
                category="servicingProducts"
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

export default ProductCategoryServicingProducts;

