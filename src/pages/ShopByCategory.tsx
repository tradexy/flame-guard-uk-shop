
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryHero from '@/components/CategoryHero';
import CategoryGrid from '@/components/CategoryGrid';
import BestSellingCarousel from '@/components/BestSellingCarousel';

const ShopByCategory = () => {
  return (
    <div className="min-h-screen bg-white animate-fade-in">
      <Header />
      {/* Hero Section */}
      <section className="fade-in-up relative py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <CategoryHero />
        </div>
      </section>
      {/* Category Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-xl shadow-subtle fade-in-up delay-200">
            <CategoryGrid />
          </div>
        </div>
      </div>
      {/* Best Selling Carousel */}
      <div className="pb-16">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-xl shadow-subtle fade-in-up delay-300">
            <BestSellingCarousel />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShopByCategory;
