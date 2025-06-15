
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FaqHero from '@/components/faq/FaqHero';
import FaqContent from '@/components/faq/FaqContent';
import FaqCallToAction from '@/components/faq/FaqCallToAction';

const FAQ = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <FaqHero />
      <FaqContent />
      <FaqCallToAction />
      <Footer />
    </div>
  );
};

export default FAQ;
