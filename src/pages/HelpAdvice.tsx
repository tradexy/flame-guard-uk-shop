
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Phone, Mail, MessageCircle, Clock, Shield, Truck } from 'lucide-react';

const HelpAdvice = () => {
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

  const helpTopics = [
    {
      category: "Product Information",
      questions: [
        {
          question: "How do I choose the right fire extinguisher?",
          answer: "The type of fire extinguisher you need depends on the types of fires you might encounter. Class A extinguishers are for ordinary combustibles like wood and paper, Class B for flammable liquids, Class C for electrical fires, and Class K for cooking oils. For homes, we recommend ABC extinguishers as they cover multiple fire types."
        },
        {
          question: "How often should smoke alarms be tested?",
          answer: "Smoke alarms should be tested monthly by pressing the test button. Replace batteries annually or when the low battery chirp sounds. Replace the entire smoke alarm every 10 years."
        },
        {
          question: "What's the difference between aerosol and traditional extinguishers?",
          answer: "Aerosol fire suppressants are lightweight, easy to use, and perfect for small fires. They're ideal for kitchens, cars, and boats. Traditional extinguishers are more powerful and suitable for larger fires but require more training to use effectively."
        }
      ]
    },
    {
      category: "Installation & Maintenance", 
      questions: [
        {
          question: "How do I install a smoke alarm?",
          answer: "Install smoke alarms on every level of your home, inside bedrooms, and outside sleeping areas. Mount them high on walls or ceilings, away from air vents. Follow the manufacturer's instructions and test immediately after installation."
        },
        {
          question: "When should fire extinguishers be serviced?",
          answer: "Fire extinguishers should be professionally serviced annually. Check monthly for damage, proper pressure, and clear access. Replace immediately if damaged or after any use."
        },
        {
          question: "How do I maintain my fire safety equipment?",
          answer: "Keep equipment clean and accessible. Check expiration dates regularly. Store in appropriate temperatures. Follow manufacturer guidelines for maintenance schedules."
        }
      ]
    },
    {
      category: "Orders & Shipping",
      questions: [
        {
          question: "How long does shipping take?",
          answer: "Standard shipping takes 3-5 business days. Express shipping (1-2 days) is available for urgent orders. Free shipping on orders over £50."
        },
        {
          question: "Can I return products if they don't meet my needs?",
          answer: "Yes, we offer a 30-day return policy for unused products in original packaging. Fire safety equipment must be unopened for safety reasons."
        },
        {
          question: "Do you offer bulk discounts?",
          answer: "Yes, we offer discounts for bulk orders. Contact our sales team for custom pricing on orders of 10+ units or for commercial installations."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Help & Advice
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get expert guidance on fire safety products, installation, and maintenance. 
            Our team is here to help keep you safe.
          </p>
        </div>

        {/* Contact Options */}
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

        {/* Quick Tips */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Updated: Safety First - now red theme */}
          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <Shield className="h-8 w-8 text-red-600 mb-2" />
              <CardTitle className="text-red-900">Safety First</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-red-800">
                Always read product manuals and follow safety guidelines. 
                When in doubt, consult with our experts.
              </p>
            </CardContent>
          </Card>

          {/* Updated: Regular Maintenance - now orange theme */}
          <Card className="bg-orange-50 border-orange-200">
            <CardHeader>
              <Clock className="h-8 w-8 text-orange-600 mb-2" />
              <CardTitle className="text-orange-900">Regular Maintenance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-orange-800">
                Schedule regular checks and maintenance to ensure your 
                fire safety equipment is always ready when needed.
              </p>
            </CardContent>
          </Card>

          {/* Updated: Fast Delivery - now neutral with orange/red accent */}
          <Card className="bg-gray-50 border-gray-200">
            <CardHeader>
              <Truck className="h-8 w-8 text-orange-500 mb-2" />
              <CardTitle className="text-gray-900">Fast Delivery</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-800">
                Need equipment urgently? We offer express shipping 
                options to get safety equipment to you quickly.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          
          {helpTopics.map((topic, topicIndex) => (
            <Card key={topicIndex} className="mb-6">
              <CardHeader>
                <CardTitle className="text-2xl text-red-600">{topic.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {topic.questions.map((qa, qaIndex) => (
                    <AccordionItem key={qaIndex} value={`item-${topicIndex}-${qaIndex}`}>
                      <AccordionTrigger className="text-left">
                        {qa.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        {qa.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Notice */}
        <Card className="bg-red-50 border-red-200 mt-12 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-red-900 text-center">🚨 Emergency Notice</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-red-800 text-center">
              <strong>In case of fire emergency, call 999 immediately.</strong><br />
              This website provides guidance on fire prevention and safety equipment, 
              but emergency services should always be contacted first in any fire situation.
            </p>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default HelpAdvice;
