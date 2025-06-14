
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryHero from '@/components/CategoryHero';
import CategoryGrid from '@/components/CategoryGrid';
import BestSellingCarousel from '@/components/BestSellingCarousel';

const ShopByCategory = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <CategoryHero />
      <CategoryGrid />
      <BestSellingCarousel />
      <Footer />
    </div>
  );
};

export default ShopByCategory;
