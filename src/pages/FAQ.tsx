
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FaqHero from '@/components/faq/FaqHero';
import FaqContent from '@/components/faq/FaqContent';
import FaqCallToAction from '@/components/faq/FaqCallToAction';

const FAQ = () => {
  return (
    <div className="bg-gray-900">
      <div 
        className="fixed inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('/lovable-uploads/4d4752d2-ef63-47c2-a268-81554a68db6f.png')" }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <FaqHero />
          <FaqContent />
          <FaqCallToAction />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default FAQ;
