
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
      <section className="py-20 md:py-24 text-center">
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
      <section className="pb-16">
        <div className="container mx-auto px-4">
            <div className="bg-white p-8 rounded-xl shadow-subtle fade-in-up delay-200">
                <FacilityGrid />
            </div>
        </div>
      </section>

      <SectionDivider />

      {/* Best Selling Products */}
      <div className="pb-16">
        <div className="container mx-auto px-4">
            <div className="bg-white p-8 rounded-xl shadow-subtle fade-in-up delay-300">
                <BestSellingCarousel />
            </div>
        </div>
      </div>
      <Footer />
      <QuickShopBar />
    </div>
  );
};

export default ShopFor;
