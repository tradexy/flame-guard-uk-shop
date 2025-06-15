
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Mail } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    productPurchased: '',
    notes: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Thank you for your enquiry!",
      description: "We'll be in touch soon to help with your servicing needs.",
    });
    
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
    <section className="mb-16">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-subtle border border-white/20">
          <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-3 mb-4">
                <Mail className="h-8 w-8 text-red-600" />
                <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
            </div>
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
  );
};

export default ContactForm;
