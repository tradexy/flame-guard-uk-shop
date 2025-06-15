
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from '@/components/about/AboutHero';
import OurStorySection from '@/components/about/OurStorySection';
import WhyItMattersSection from '@/components/about/WhyItMattersSection';
import ValuesSection from '@/components/about/ValuesSection';
import CommunityImpactSection from '@/components/about/CommunityImpactSection';
import TeamSection from '@/components/about/TeamSection';
import ContactCTA from '@/components/about/ContactCTA';

const AboutUs = () => {
  return (
    <div className="bg-gray-50">
      <div 
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/c3e509c8-f139-4dc5-a9f3-98878888ffb3.png')",
        }}
      >
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="container py-12 space-y-24 md:space-y-32">
          <AboutHero />
          <OurStorySection />
          <WhyItMattersSection />
          <ValuesSection />
          <CommunityImpactSection />
          <TeamSection />
          <ContactCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
