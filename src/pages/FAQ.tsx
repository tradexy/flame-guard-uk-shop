
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
        },
        {
          question: "Are your products environmentally friendly?",
          answer: "Absolutely! We're committed to environmental responsibility. Our products are designed to be eco-friendly whilst maintaining the highest safety standards."
        },
        {
          question: "What makes your products unique?",
          answer: "Our products combine cutting-edge safety technology with educational value, helping to create a new generation of fire safety heroes whilst providing reliable protection for your property."
        }
      ]
    },
    {
      title: "🔥 Ruben's Corner - Orders, Return & Education Info",
      badge: "Orders & Support",
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
        },
        {
          question: "What if my product arrives damaged?",
          answer: "If your product arrives damaged, please contact us immediately with photos of the damage. We'll arrange a replacement or full refund straightaway."
        },
        {
          question: "How can I get in touch for more help?",
          answer: "You can reach our friendly support team via email, phone, or through our contact form. We're here to help with any questions or concerns."
        },
        {
          question: "Can you advise how many extinguishers we need for our school or business?",
          answer: "Absolutely! Our fire safety experts can assess your space and recommend the right number and type of extinguishers based on your specific needs and regulations."
        },
        {
          question: "Do you offer servicing and maintenance options?",
          answer: "Yes, we provide comprehensive servicing and maintenance programmes to ensure your fire safety equipment remains in perfect working condition."
        },
        {
          question: "Do you provide bulk or institutional discounts?",
          answer: "Yes! We offer competitive pricing for schools, businesses, and bulk orders. Contact us for a customised quote based on your requirements."
        }
      ]
    },
    {
      title: "🧯 Sofia's Safety Station - Product, Checkout & Community Info",
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
          question: "Do your products require maintenance or replacement?",
          answer: "Like all safety equipment, our products benefit from regular checks and eventual replacement. We provide clear guidance on maintenance schedules and offer servicing support."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, debit cards, PayPal, and bank transfers. All payments are processed securely through our encrypted checkout system."
        },
        {
          question: "Can I check out as a guest?",
          answer: "Yes! Whilst creating an account helps track orders and speeds up future purchases, you can complete your purchase as a guest if you prefer."
        },
        {
          question: "How does my purchase support schools or community programmes?",
          answer: "Every purchase helps fund our Little Hero Fire Project initiatives, providing fire safety education and equipment to schools and communities in need."
        },
        {
          question: "Can schools apply for support from Little Hero Fire Project?",
          answer: "Yes! Schools can apply for our community support programme. We provide fire safety education, equipment donations, and training sessions. Contact us to learn about application requirements."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Get answers to your fire safety questions from our experts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
                🔥 Fire Safety Experts
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
                💡 Quick Answers
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Main FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            
            {/* First Section - General Questions with Ruben */}
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* Left Column - Ruben's Image */}
              <div className="lg:col-span-2">
                <div className="sticky top-24">
                  <div className="relative bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl overflow-hidden shadow-md border border-white w-52 h-52 mx-auto">
                    <div className="h-full flex items-center justify-center p-4">
                      <div className="text-center">
                        <div className="w-32 h-32 mb-3 mx-auto flex items-center justify-center">
                          <img 
                            src="/lovable-uploads/d91b57ba-fd4d-4279-996d-318c136c54af.png" 
                            alt="Ruben - Fire Safety Expert"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <h3 className="font-bold text-blue-800 text-sm mb-1">Ruben</h3>
                        <p className="text-blue-600 text-sm">Expert</p>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Expert
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - FAQ Content */}
              <div className="lg:col-span-10">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b">
                    <div className="flex items-center gap-3">
                      <h2 className="text-2xl font-bold text-gray-800">{faqCategories[0].title}</h2>
                      <Badge variant="outline" className="bg-red-50 text-red-600 border-red-200">
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
                          className="border border-gray-200 rounded-lg px-4 hover:border-red-300 transition-colours"
                        >
                          <AccordionTrigger className="text-left hover:text-red-600 font-medium">
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

            {/* Second Section - Orders with Little Heroes Image */}
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* Left Column - FAQ Content */}
              <div className="lg:col-span-10">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b">
                    <div className="flex items-center gap-3">
                      <h2 className="text-2xl font-bold text-gray-800">{faqCategories[1].title}</h2>
                      <Badge variant="outline" className="bg-red-50 text-red-600 border-red-200">
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
                          className="border border-gray-200 rounded-lg px-4 hover:border-red-300 transition-colours"
                        >
                          <AccordionTrigger className="text-left hover:text-red-600 font-medium">
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

              {/* Right Column - Little Heroes Image */}
              <div className="lg:col-span-2">
                <div className="sticky top-24">
                  <div className="relative bg-gradient-to-br from-orange-100 to-red-100 rounded-xl overflow-hidden shadow-md border border-white w-52 h-52 mx-auto">
                    <div className="h-full flex items-center justify-center p-4">
                      <div className="text-center">
                        <div className="w-32 h-32 mb-3 mx-auto flex items-center justify-center">
                          <img 
                            src="/lovable-uploads/137c71ea-6b22-405a-8768-4dbafb00015a.png" 
                            alt="Little Fire Heroes"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <h3 className="font-bold text-orange-800 text-sm mb-1">Little Heroes</h3>
                        <p className="text-orange-600 text-sm">Support</p>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Support
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Section - Products with Sofia */}
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* Left Column - Sofia's Image */}
              <div className="lg:col-span-2">
                <div className="sticky top-24">
                  <div className="relative bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl overflow-hidden shadow-md border border-white w-52 h-52 mx-auto">
                    <div className="h-full flex items-center justify-center p-4">
                      <div className="text-center">
                        <div className="w-32 h-32 mb-3 mx-auto flex items-center justify-center">
                          <img 
                            src="/lovable-uploads/8c298eac-ace5-4c14-99a7-683522bb0ac3.png" 
                            alt="Sofia - Products & Community Expert"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <h3 className="font-bold text-purple-800 text-sm mb-1">Sofia</h3>
                        <p className="text-purple-600 text-sm">Community</p>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Community
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - FAQ Content */}
              <div className="lg:col-span-10">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b">
                    <div className="flex items-center gap-3">
                      <h2 className="text-2xl font-bold text-gray-800">{faqCategories[2].title}</h2>
                      <Badge variant="outline" className="bg-red-50 text-red-600 border-red-200">
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
                          className="border border-gray-200 rounded-lg px-4 hover:border-red-300 transition-colours"
                        >
                          <AccordionTrigger className="text-left hover:text-red-600 font-medium">
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
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our fire safety experts are here to help. Get in touch with us for personalised advice and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colours shadow-lg">
                Contact Our Experts
              </button>
              <button className="bg-white hover:bg-gray-50 text-red-600 px-8 py-3 rounded-lg font-semibold border border-red-200 transition-colours">
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
