
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicingHero from '@/components/servicing/ServicingHero';
import OurRole from '@/components/servicing/OurRole';
import TheChallenge from '@/components/servicing/TheChallenge';
import ContactForm from '@/components/servicing/ContactForm';
import ServicingNetwork from '@/components/servicing/ServicingNetwork';

const ServicingSupport = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-12 md:py-24 space-y-24">
        <ServicingHero />
        <OurRole />
        <TheChallenge />
        <ServicingNetwork />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

export default ServicingSupport;
