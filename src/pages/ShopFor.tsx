
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BestSellingCarousel from '@/components/BestSellingCarousel';
import FacilityGrid from '@/components/FacilityGrid';
import QuickShopBar from '@/components/QuickShopBar';
import SectionDivider from '@/components/SectionDivider';

const ShopFor = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-12 space-y-16">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 font-montserrat">
            Shop For Your Environment
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find the perfect fire safety solutions tailored to your specific environment. From homes to industrial facilities, we have the right products to keep you safe.
          </p>
        </section>

        <section className="bg-white p-8 rounded-xl shadow-subtle">
          <FacilityGrid />
        </section>

        <SectionDivider />

        <section className="bg-white p-8 rounded-xl shadow-subtle">
          <BestSellingCarousel />
        </section>
      </main>
      <Footer />
      <QuickShopBar />
    </div>
  );
};

export default ShopFor;
