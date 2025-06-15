
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicingHero from '@/components/servicing/ServicingHero';
import OurRole from '@/components/servicing/OurRole';
import TheChallenge from '@/components/servicing/TheChallenge';
import ContactForm from '@/components/servicing/ContactForm';
import ServicingNetwork from '@/components/servicing/ServicingNetwork';

const ServicingSupport = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div 
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/134e5a17-45bc-4743-8c21-6d4fd39a8fd6.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
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
    </div>
  );
};

export default ServicingSupport;
