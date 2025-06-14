
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show success message
    toast({
      title: "Message sent successfully!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team for expert fire safety advice and support
          </p>
        </div>

        {/* Contact Information Cards */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 text-center">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm">
                info@littlefireheroes.co.uk
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm">
                01844 208308
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 text-sm">
                Unit 5 Ridge Way<br />
                Crendon Industrial Park<br />
                Long Crendon, HP18 9BF
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Business Hours</h3>
              <p className="text-gray-600 text-sm">
                Mon-Fri: 9:00-17:00<br />
                Sat-Sun: Closed
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="mb-16">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20">
                <div className="flex items-center mb-6">
                  <img 
                    src="/lovable-uploads/b01391ef-222e-42bc-b8fc-3803981d0447.png" 
                    alt="Little Fire Heroes Logo" 
                    className="h-12 w-auto mr-4"
                  />
                  <h2 className="text-2xl font-bold text-gray-900">Get In Touch</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-700 font-medium">
                        Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-2 bg-white/50 border-gray-300 focus:border-red-500 focus:ring-red-500"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-2 bg-white/50 border-gray-300 focus:border-red-500 focus:ring-red-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-gray-700 font-medium">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-2 bg-white/50 border-gray-300 focus:border-red-500 focus:ring-red-500"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-gray-700 font-medium">
                        Company
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="mt-2 bg-white/50 border-gray-300 focus:border-red-500 focus:ring-red-500"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium">
                      Message <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-2 bg-white/50 border-gray-300 focus:border-red-500 focus:ring-red-500 min-h-[120px]"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-medium"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Little Fire Heroes?</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Expert Knowledge</h4>
                      <p className="text-gray-600">Our team has years of experience in fire safety and can provide expert advice tailored to your needs.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Quality Products</h4>
                      <p className="text-gray-600">We provide high-quality, innovative fire safety products that are reliable and effective.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Excellent Support</h4>
                      <p className="text-gray-600">We're committed to providing exceptional customer service and ongoing support for all our products.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-orange-600 font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Competitive Pricing</h4>
                      <p className="text-gray-600">Our products offer excellent value for money, helping you save costs while maintaining safety standards.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="mb-16">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Find Us</h2>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-96 flex items-center justify-center overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.123456789!2d-0.9876543210987654!3d51.76543210987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDQ1JzU1LjYiTiAwwrA1OSczOC4yIlc!5e0!3m2!1sen!2suk!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="Little Fire Heroes Location"
              ></iframe>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                <strong>Address:</strong> Little Heroes Unit 5 Ridge Way, Crendon Industrial Park, Long Crendon, Buckinghamshire HP18 9BF
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;
