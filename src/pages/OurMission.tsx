
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MissionHero from '@/components/mission/MissionHero';
import MainContent from '@/components/mission/MainContent';
import VisionSection from '@/components/mission/VisionSection';
import CallToAction from '@/components/mission/CallToAction';

const OurMission = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      <Header />
      <MissionHero />
      <MainContent />
      <VisionSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default OurMission;
