
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfoCards from '@/components/contact/ContactInfoCards';
import ContactForm from '@/components/contact/ContactForm';
import WhyChooseUs from '@/components/contact/WhyChooseUs';
import ContactMap from '@/components/contact/ContactMap';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <ContactHero />
        <ContactInfoCards />
        
        {/* Contact Form Section */}
        <section className="mb-16">
          <div className="flex flex-col lg:flex-row gap-12">
            <ContactForm />
            <WhyChooseUs />
          </div>
        </section>

        <ContactMap />
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;
