
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Mail } from 'lucide-react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';

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
    <section>
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="mt-4">Get in Touch</CardTitle>
          <CardDescription>
            Contact us about your servicing and support needs.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="font-medium">
                Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="location" className="font-medium">
                Location
              </Label>
              <Input
                id="location"
                name="location"
                type="text"
                value={formData.location}
                onChange={handleInputChange}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="productPurchased" className="font-medium">
                Product Purchased
              </Label>
              <Input
                id="productPurchased"
                name="productPurchased"
                type="text"
                value={formData.productPurchased}
                onChange={handleInputChange}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="notes" className="font-medium">
                Notes
              </Label>
              <Textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                maxLength={180}
                className="mt-2 min-h-[120px]"
                placeholder="Tell us about your servicing needs..."
              />
              <p className="text-sm text-muted-foreground mt-1 text-right">
                {formData.notes.length} / 180
              </p>
            </div>

            <Button 
              type="submit" 
              size="lg"
              className="w-full font-semibold"
            >
              Submit Enquiry
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default ContactForm;
