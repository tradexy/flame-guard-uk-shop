
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HelpHeader from '@/components/help/HelpHeader';
import SupportOptions from '@/components/help/SupportOptions';
import QuickTips from '@/components/help/QuickTips';
import FaqSection from '@/components/help/FaqSection';
import EmergencyNotice from '@/components/help/EmergencyNotice';

const HelpAdvice = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-12 space-y-16">
        <HelpHeader />
        <SupportOptions />
        <QuickTips />
        <FaqSection />
        <EmergencyNotice />
      </main>

      <Footer />
    </div>
  );
};

export default HelpAdvice;
