
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BestSellingCarousel from '@/components/BestSellingCarousel';
import FacilityGrid from '@/components/FacilityGrid';
import QuickShopBar from '@/components/QuickShopBar';
import SectionDivider from '@/components/SectionDivider';

const ShopFor = () => {
  return (
    <div className="bg-gray-50">
      <div 
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/a2b75342-9e36-46b9-bb00-f6eab034fc9d.png')",
        }}
      >
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-12 space-y-16">
          <section className="text-center">
            <h1 className="mb-4 text-foreground">
              Shop For Your Environment
            </h1>
            <p className="text-subtitle max-w-3xl mx-auto text-foreground/80">
              Find the perfect fire safety solutions tailored to your specific environment. From homes to industrial facilities, we have the right products to keep you safe.
            </p>
          </section>

          <section className="bg-white/40 backdrop-blur-lg rounded-2xl shadow-lg border border-white/50 p-8">
            <FacilityGrid />
          </section>

          <SectionDivider />

          <section className="bg-white/40 backdrop-blur-lg rounded-2xl shadow-lg border border-white/50 p-8">
            <BestSellingCarousel />
          </section>
        </main>
        <Footer />
        <QuickShopBar />
      </div>
    </div>
  );
};

export default ShopFor;
