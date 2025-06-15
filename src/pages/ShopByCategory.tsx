
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryHero from '@/components/CategoryHero';
import CategoryGrid from '@/components/CategoryGrid';
import BestSellingCarousel from '@/components/BestSellingCarousel';

const ShopByCategory = () => {
  return (
    <div className="bg-gray-900">
      <div 
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/fb5d2d52-3675-44fb-9276-29dd2523b954.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
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
