
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BestSellingCarousel from '@/components/BestSellingCarousel';
import FacilityGrid from '@/components/FacilityGrid';
import QuickShopBar from '@/components/QuickShopBar';
import SectionDivider from '@/components/SectionDivider';

const ShopFor = () => {
  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      <Header />
      {/* Hero Section */}
      <section className="py-20 md:py-24 text-center bg-white border-b border-border">
        <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 font-montserrat animate-fade-in">
                Shop For Your Environment
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in animate-delay-200">
                Find the perfect fire safety solutions tailored to your specific environment. From homes to industrial facilities, we have the right products to keep you safe.
            </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16 fade-in-up delay-200">
        <FacilityGrid />
      </section>

      <SectionDivider />

      {/* Best Selling Products */}
      <div className="py-16 bg-white border-t border-border fade-in-up delay-300">
        <BestSellingCarousel />
      </div>
      <Footer />
      <QuickShopBar />
    </div>
  );
};

export default ShopFor;
