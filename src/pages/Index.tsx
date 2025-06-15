
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import MissionSection from '@/components/MissionSection';
import HeroBadgeSection from '@/components/HeroBadgeSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      <Header />
      <HeroSection />
      <ProductsSection />
      <MissionSection />
      <HeroBadgeSection />
      <Footer />
    </div>
  );
};

export default Index;
