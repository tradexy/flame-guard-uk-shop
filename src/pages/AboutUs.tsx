
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
    <div className="min-h-screen bg-white">
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
  );
};

export default AboutUs;
