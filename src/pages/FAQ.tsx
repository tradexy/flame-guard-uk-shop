import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

const FAQ = () => {
  const faqCategories = [
    {
      title: "General Questions",
      badge: "Popular",
      questions: [
        {
          question: "Who are Ruben and Sofia?",
          answer: "Ruben and Sofia are the young faces of the Little Hero Fire Project. They are passionate about promoting fire safety and empowering communities to stay protected."
        },
        {
          question: "What kind of products do you sell?",
          answer: "We sell a comprehensive range of fire safety products including fire extinguishers, fire blankets, smoke alarms, and educational materials designed to keep homes, schools, and businesses safe."
        },
        {
          question: "Are your products suitable for home and school use?",
          answer: "Yes! Our products are specifically designed for both home and educational environments. They're user-friendly, safe, and perfect for teaching fire safety to children and adults alike."
        },
        {
          question: "Do your extinguishers work on all types of fires?",
          answer: "Many of our extinguishers are designed to handle multiple fire classes, including electrical, cooking oil, and solid combustibles. Always refer to the product label for specifics."
        }
      ]
    },
    {
      title: "🔥 Orders, Returns & Delivery Info",
      badge: "Orders & Info",
      questions: [
        {
          question: "How long does delivery take?",
          answer: "Delivery times vary by location but generally range from 3–5 business days within the UK."
        },
        {
          question: "Do you ship internationally?",
          answer: "Currently we focus on UK deliveries to ensure the fastest and most reliable service. Please contact us for international shipping enquiries."
        },
        {
          question: "What are your shipping fees?",
          answer: "Shipping fees depend on your location and order size. You'll see the exact shipping cost at checkout before completing your purchase."
        },
        {
          question: "Can I track my order?",
          answer: "Yes! Once your order ships, you'll receive tracking information via email so you can monitor your delivery progress."
        },
        {
          question: "Can I return or exchange a product?",
          answer: "Yes, we offer returns and exchanges within 30 days of purchase for unused items in original packaging. Contact our support team to arrange a return."
        }
      ]
    },
    {
      title: "🧯 Products & Community Info",
      badge: "Products & Community",
      questions: [
        {
          question: "Are your fire extinguishers suitable for children or elderly users?",
          answer: "Yes. Our extinguishers are designed with simplicity in mind — lightweight, intuitive, and quick to deploy in an emergency."
        },
        {
          question: "How do I know which fire extinguisher is right for my space?",
          answer: "Our product descriptions include detailed guidance on the best applications for each extinguisher. You can also contact our experts for personalised recommendations."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, debit cards, PayPal, and bank transfers. All payments are processed securely through our encrypted checkout system."
        },
        {
          question: "How does my purchase support schools or community programmes?",
          answer: "Every purchase helps fund our Little Hero Fire Project initiatives, providing fire safety education and equipment to schools and communities in need."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-white text-gray-900 border-b">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Get answers to your fire safety questions from our experts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Badge variant="secondary" className="bg-gray-100 text-gray-800 border-gray-200 text-lg px-4 py-2">
                🔥 Fire Safety Experts
              </Badge>
              <Badge variant="secondary" className="bg-gray-100 text-gray-800 border-gray-200 text-lg px-4 py-2">
                💡 Quick Answers
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Main FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* First Section - General Questions with Expert */}
            <div className="grid md:grid-cols-12 gap-8 items-start">
              {/* Left Column - Expert Image */}
              <div className="md:col-span-3">
                <div className="bg-gray-50 rounded-xl p-6 text-center shadow-lg border border-gray-200">
                  <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/d91b57ba-fd4d-4279-996d-318c136c54af.png" 
                      alt="Ruben - Fire Safety Expert"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg mb-2">Ruben</h3>
                  <p className="text-gray-700 text-sm mb-3">Fire Safety Expert</p>
                  <Badge className="bg-gray-200 text-gray-800 text-xs border border-gray-300 shadow">
                    Expert
                  </Badge>
                </div>
              </div>

              {/* Right Column - FAQ Content */}
              <div className="md:col-span-9">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="bg-gray-50 p-6 border-b">
                    <div className="flex items-center gap-3">
                      <h2 className="text-2xl font-bold text-gray-800">{faqCategories[0].title}</h2>
                      <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-200">
                        {faqCategories[0].badge}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <Accordion type="single" collapsible className="space-y-4">
                      {faqCategories[0].questions.map((faq, index) => (
                        <AccordionItem 
                          key={index} 
                          value={`0-${index}`}
                          className="border border-gray-200 rounded-lg px-4 hover:border-gray-300 transition-colors"
                        >
                          <AccordionTrigger className="text-left hover:text-gray-900 font-medium">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Section - Orders without image */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gray-50 p-6 border-b">
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-bold text-gray-800">{faqCategories[1].title}</h2>
                  <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-200">
                    {faqCategories[1].badge}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqCategories[1].questions.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`1-${index}`}
                      className="border border-gray-200 rounded-lg px-4 hover:border-gray-300 transition-colors"
                    >
                      <AccordionTrigger className="text-left hover:text-gray-900 font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            {/* Third Section - Products with Community */}
            <div className="grid md:grid-cols-12 gap-8 items-start">
              {/* Left Column - FAQ Content */}
              <div className="md:col-span-9">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="bg-gray-50 p-6 border-b">
                    <div className="flex items-center gap-3">
                      <h2 className="text-2xl font-bold text-gray-800">{faqCategories[2].title}</h2>
                      <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-200">
                        {faqCategories[2].badge}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <Accordion type="single" collapsible className="space-y-4">
                      {faqCategories[2].questions.map((faq, index) => (
                        <AccordionItem 
                          key={index} 
                          value={`2-${index}`}
                          className="border border-gray-200 rounded-lg px-4 hover:border-gray-300 transition-colors"
                        >
                          <AccordionTrigger className="text-left hover:text-gray-900 font-medium">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              </div>

              {/* Right Column - Community Image */}
              <div className="md:col-span-3">
                <div className="bg-gray-50 rounded-xl p-6 text-center shadow-lg border border-gray-200">
                  <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/8c298eac-ace5-4c14-99a7-683522bb0ac3.png" 
                      alt="Sofia - Community Expert"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg mb-2">Sofia</h3>
                  <p className="text-gray-700 text-sm mb-3">Community Expert</p>
                  <Badge className="bg-gray-200 text-gray-800 text-xs border border-gray-300 shadow">
                    Community
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our fire safety experts are here to help. Get in touch with us for personalised advice and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg">
                Contact Our Experts
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-800 px-8 py-3 rounded-lg font-semibold border border-gray-300 transition-colors">
                Browse Products
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
