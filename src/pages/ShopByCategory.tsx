
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryHero from '@/components/CategoryHero';
import CategoryGrid from '@/components/CategoryGrid';
import BestSellingCarousel from '@/components/BestSellingCarousel';

const ShopByCategory = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-12 space-y-16">
        <section>
          <CategoryHero />
        </section>

        <section className="bg-white p-8 rounded-xl shadow-subtle">
          <CategoryGrid />
        </section>

        <section className="bg-white p-8 rounded-xl shadow-subtle">
          <BestSellingCarousel />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ShopByCategory;
