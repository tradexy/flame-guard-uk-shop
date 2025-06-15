
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryHero from '@/components/CategoryHero';
import CategoryGrid from '@/components/CategoryGrid';
import BestSellingCarousel from '@/components/BestSellingCarousel';

const ShopByCategory = () => {
  return (
    <div className="bg-gray-50">
      <div 
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/e7f2c9a8-3b1d-4c5e-8f6a-9b7d0c1e2f3a.png')",
        }}
      >
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-12 space-y-16">
          <section>
            <CategoryHero />
          </section>

          <section className="bg-white/40 backdrop-blur-lg rounded-2xl shadow-lg border border-white/50 p-8">
            <CategoryGrid />
          </section>

          <section className="bg-white/40 backdrop-blur-lg rounded-2xl shadow-lg border border-white/50 p-8">
            <BestSellingCarousel />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ShopByCategory;
