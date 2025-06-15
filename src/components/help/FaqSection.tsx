
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FaqSection = () => {
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
  );
};

export default FaqSection;
