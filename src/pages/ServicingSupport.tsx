import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ServicingSupport = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    productPurchased: '',
    notes: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show success message
    toast({
      title: "Thank you for your enquiry!",
      description: "We'll be in touch soon to help with your servicing needs.",
    });
    
    // Reset form
    setFormData({
      name: '',
      location: '',
      productPurchased: '',
      notes: ''
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
            Servicing & Support
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional fire safety servicing through our trusted network of certified providers
          </p>
        </div>

        {/* Our Role Section */}
        <section className="mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20">
                <div className="flex items-center mb-6">
                  <img 
                    src="/lovable-uploads/e03fea4f-9182-42f7-972f-4a2708198d02.png" 
                    alt="Little Fire Heroes Logo" 
                    className="h-12 w-auto mr-4"
                  />
                  <h2 className="text-2xl font-bold text-gray-900">Our Role</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  Little Heroes provides access to high-quality, innovative fire safety products such as multi-purpose extinguishers and alarms. However, we do not directly offer installation or maintenance services.
                </p>
                <p className="text-gray-700">
                  Our mission is to make fire safety accessible and affordable, especially for schools, small businesses, and communities. Because of the versatility and coverage of our products, fewer units are often required — saving money and reducing clutter.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl p-8 h-64 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop&crop=center"
                  alt="Professional Fire Safety Products"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge Section */}
        <section className="mb-16">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20">
                <div className="flex items-center mb-6">
                  <img 
                    src="/lovable-uploads/e03fea4f-9182-42f7-972f-4a2708198d02.png" 
                    alt="Little Fire Heroes Logo" 
                    className="h-12 w-auto mr-4"
                  />
                  <h2 className="text-2xl font-bold text-gray-900">The Challenge</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  Many traditional service providers rely on selling more units and locking clients into expensive maintenance contracts. Since our products reduce the number of extinguishers required, some providers may be reluctant to offer them.
                </p>
                <p className="text-gray-700">
                  However, to ensure safety and compliance, professional service is essential. That's why we aim to introduce a Servicing & Support Network.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-yellow-100 to-red-100 rounded-2xl p-8 h-64 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center"
                  alt="Overcoming Industry Challenges"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                <p className="text-gray-600">
                  Contact us about your servicing and support needs
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
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
                  <Label htmlFor="location" className="text-gray-700 font-medium">
                    Location
                  </Label>
                  <Input
                    id="location"
                    name="location"
                    type="text"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="mt-2 bg-white/50 border-gray-300 focus:border-red-500 focus:ring-red-500"
                  />
                </div>

                <div>
                  <Label htmlFor="productPurchased" className="text-gray-700 font-medium">
                    Product Purchased
                  </Label>
                  <Input
                    id="productPurchased"
                    name="productPurchased"
                    type="text"
                    value={formData.productPurchased}
                    onChange={handleInputChange}
                    className="mt-2 bg-white/50 border-gray-300 focus:border-red-500 focus:ring-red-500"
                  />
                </div>

                <div>
                  <Label htmlFor="notes" className="text-gray-700 font-medium">
                    Notes
                  </Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    maxLength={180}
                    className="mt-2 bg-white/50 border-gray-300 focus:border-red-500 focus:ring-red-500 min-h-[120px]"
                    placeholder="Tell us about your servicing needs..."
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    {formData.notes.length} / 180
                  </p>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-medium"
                >
                  Submit Enquiry
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Our Servicing & Support Network Section */}
        <section className="mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20">
                <div className="flex items-center mb-6">
                  <img 
                    src="/lovable-uploads/e03fea4f-9182-42f7-972f-4a2708198d02.png" 
                    alt="Little Fire Heroes Logo" 
                    className="h-12 w-auto mr-4"
                  />
                  <h2 className="text-2xl font-bold text-gray-900">Our Servicing & Support Network</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  We will invite certified, independent fire safety service providers to join our network. Through this, customers can:
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Get professional advice on how many extinguishers they need.
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Arrange certified installation or placement checks.
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Schedule ongoing maintenance and compliance checks.
                  </li>
                </ul>
                <p className="text-gray-700 mt-4 font-medium">
                  This service is optional but highly recommended.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 h-64 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=400&h=300&fit=crop&crop=center"
                  alt="Certified Service Network"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicingSupport;
