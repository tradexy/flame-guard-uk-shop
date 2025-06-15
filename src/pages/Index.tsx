
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import MissionSection from '@/components/MissionSection';
import HeroBadgeSection from '@/components/HeroBadgeSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <MissionSection />
        <HeroBadgeSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
