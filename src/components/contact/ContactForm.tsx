
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
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
    <div className="lg:w-1/2">
      <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 mr-4 flex items-center justify-center">
            <img 
              src="/lovable-uploads/356e71d1-edfd-4980-b017-784222eb87ff.png" 
              alt="Fire Safety Assistant" 
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Get In Touch</h2>
            <p className="text-orange-600 text-sm font-medium">Hi! I'm here to assist you.</p>
          </div>
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
  );
};

export default ContactForm;
