
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const SupportOptions = () => {
  const supportOptions = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our fire safety experts",
      contact: "0800 123 4567",
      hours: "Mon-Fri 8AM-6PM"
    },
    {
      icon: Mail,
      title: "Email Support", 
      description: "Get detailed help via email",
      contact: "help@littlefireheroes.com",
      hours: "Response within 24 hours"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant help from our support team",
      contact: "Available on our website",
      hours: "Mon-Fri 9AM-5PM"
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {supportOptions.map((option, index) => (
        <Card key={index} className="text-center bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg">
          <CardHeader>
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <option.icon className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-xl text-white">{option.title}</CardTitle>
            <CardDescription className="text-gray-300">{option.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-semibold text-primary mb-2">{option.contact}</p>
            <p className="text-sm text-gray-400">{option.hours}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SupportOptions;
