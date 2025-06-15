
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryHero from '@/components/CategoryHero';
import CategoryGrid from '@/components/CategoryGrid';
import BestSellingCarousel from '@/components/BestSellingCarousel';

const ShopByCategory = () => {
  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      <Header />
      {/* Hero Section */}
      <section className="fade-in-up relative py-16 bg-gradient-to-br from-orange-50 via-white to-red-50 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <CategoryHero />
        </div>
      </section>
      {/* Category Grid */}
      <div className="fade-in-up delay-200">
        <CategoryGrid />
      </div>
      {/* Best Selling Carousel */}
      <div className="fade-in-up delay-300">
        <BestSellingCarousel />
      </div>
      <Footer />
    </div>
  );
};

export default ShopByCategory;

