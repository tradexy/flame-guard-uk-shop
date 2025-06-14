
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryHero from '@/components/CategoryHero';
import CategoryGrid from '@/components/CategoryGrid';
import BestSellingCarousel from '@/components/BestSellingCarousel';

const ShopByCategory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 animate-fade-in">
      <Header />
      {/* Hero Section */}
      <section className="fade-in-up relative py-16 bg-gradient-to-l from-orange-100/60 via-white/90 to-red-100/70 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-200/15 via-yellow-100/10 to-orange-200/20 pointer-events-none" style={{zIndex: 1}} />
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
