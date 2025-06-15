
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HelpHeader from '@/components/help/HelpHeader';
import SupportOptions from '@/components/help/SupportOptions';
import QuickTips from '@/components/help/QuickTips';
import FaqSection from '@/components/help/FaqSection';

const HelpAdvice = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div 
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/e924d747-f3c4-4325-a8f1-00e158611916.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main className="container mx-auto px-4 py-12 md:py-24 space-y-16">
          <HelpHeader />
          <SupportOptions />
          <QuickTips />
          <FaqSection />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default HelpAdvice;
