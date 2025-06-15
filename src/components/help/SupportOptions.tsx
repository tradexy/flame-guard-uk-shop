
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
    <div className="grid md:grid-cols-3 gap-6 mb-12">
      {supportOptions.map((option, index) => (
        <Card key={index} className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <option.icon className="h-8 w-8 text-red-600" />
            </div>
            <CardTitle className="text-xl">{option.title}</CardTitle>
            <CardDescription>{option.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-semibold text-red-600 mb-2">{option.contact}</p>
            <p className="text-sm text-gray-500">{option.hours}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SupportOptions;
