
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MissionHero from '@/components/mission/MissionHero';
import MainContent from '@/components/mission/MainContent';
import VisionSection from '@/components/mission/VisionSection';
import CallToAction from '@/components/mission/CallToAction';

const OurMission = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div 
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/1253d8a7-cdf7-457b-8daf-179a23d5a811.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-12 md:py-24 space-y-24">
          <MissionHero />
          <MainContent />
          <VisionSection />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default OurMission;
