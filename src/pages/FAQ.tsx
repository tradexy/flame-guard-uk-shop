
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
          question: "What makes Firexo different from traditional fire extinguishers?",
          answer: "Firexo is a revolutionary all-in-one fire extinguisher that works on all types of fires (Class A, B, C, D, E, F and lithium fires). Unlike traditional extinguishers that are specific to certain fire types, Firexo uses a unique aqueous mist technology that is safe, non-toxic, and environmentally friendly. It's also much lighter and easier to use than conventional extinguishers."
        },
        {
          question: "How long do your products last?",
          answer: "Our Firexo extinguishers have a 5-year warranty and are designed to last much longer with proper maintenance. The sachets have a shelf life of 15 years, making them extremely cost-effective. All our products are built to the highest quality standards to ensure long-lasting protection."
        },
        {
          question: "Do you offer training on how to use fire safety equipment?",
          answer: "Yes! We provide comprehensive training programs for individuals, schools, and businesses. Our training covers proper use of fire extinguishers, fire safety awareness, emergency procedures, and hands-on practice with our equipment. Contact us to arrange training sessions tailored to your needs."
        },
        {
          question: "Can I get a quote for bulk purchases?",
          answer: "Absolutely! We offer competitive pricing for bulk orders and can provide customized quotes based on your specific requirements. Whether you're a school, business, or organization, we'll work with you to find the most cost-effective solution. Simply contact us with your needs and we'll prepare a detailed quote."
        }
      ]
    },
    {
      title: "Product Information",
      badge: "Technical",
      questions: [
        {
          question: "What types of fires can Firexo extinguish?",
          answer: "Firexo can extinguish all classes of fires: Class A (ordinary combustibles like wood, paper), Class B (flammable liquids), Class C (electrical fires), Class D (combustible metals), Class E (electrical equipment), Class F (cooking oils), and even lithium battery fires. This makes it the most versatile fire extinguisher available."
        },
        {
          question: "Are your products environmentally friendly?",
          answer: "Yes! All our products are designed with environmental responsibility in mind. Firexo is non-toxic, biodegradable, and leaves no harmful residue. Our sachets are also eco-friendly and safe for use around people, pets, and the environment."
        },
        {
          question: "How do I maintain my fire safety equipment?",
          answer: "Our products require minimal maintenance compared to traditional equipment. We provide detailed maintenance guides with each purchase and offer servicing support. Regular visual inspections and occasional professional servicing will keep your equipment in optimal condition."
        },
        {
          question: "What's the difference between aerosols and extinguishers?",
          answer: "Our aerosols are perfect for smaller fires and immediate response situations - they're lightweight, easy to use, and ideal for cars, boats, or small spaces. Our extinguishers are designed for larger fires and provide more coverage. Both use the same revolutionary Firexo technology but are sized for different applications."
        }
      ]
    },
    {
      title: "Ordering & Delivery",
      badge: "Logistics",
      questions: [
        {
          question: "How quickly can you deliver products?",
          answer: "We offer next-day delivery for most products in stock across the UK. For bulk orders or specialized products, delivery times may vary between 2-5 working days. We'll always provide you with accurate delivery estimates at the time of ordering."
        },
        {
          question: "Do you deliver internationally?",
          answer: "Currently, we focus on delivering within the UK to ensure the fastest and most reliable service. However, we're exploring international shipping options. Please contact us if you're interested in international delivery and we'll do our best to accommodate your needs."
        },
        {
          question: "What if I'm not satisfied with my purchase?",
          answer: "We stand behind the quality of our products 100%. If you're not completely satisfied, we offer a 30-day return policy for unused products. Our customer service team is always ready to help resolve any issues and ensure you're happy with your purchase."
        },
        {
          question: "Can I track my order?",
          answer: "Yes! Once your order is dispatched, you'll receive tracking information via email. You can track your order's progress and estimated delivery time through our courier's tracking system."
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
            
            {/* First Section - Ruben on Left */}
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* Left Column - Ruben's Image */}
              <div className="lg:col-span-3">
                <div className="sticky top-24">
                  <div className="relative bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                    <div className="aspect-[3/4] flex items-center justify-center p-6">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-blue-200 rounded-full mb-4 mx-auto flex items-center justify-center">
                          <span className="text-4xl">👨‍🚒</span>
                        </div>
                        <h3 className="font-bold text-blue-800 text-lg mb-2">Ruben</h3>
                        <p className="text-blue-600 text-sm">Fire Safety Expert</p>
                        <p className="text-xs text-blue-500 mt-2">[Cartoon image placeholder]</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Expert
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - FAQ Content */}
              <div className="lg:col-span-9">
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
                          className="border border-gray-200 rounded-lg px-4 hover:border-red-300 transition-colors"
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

            {/* Second Section - Sofia on Right */}
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* Left Column - FAQ Content */}
              <div className="lg:col-span-9">
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
                          className="border border-gray-200 rounded-lg px-4 hover:border-red-300 transition-colors"
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

              {/* Right Column - Sofia's Image */}
              <div className="lg:col-span-3">
                <div className="sticky top-24">
                  <div className="relative bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                    <div className="aspect-[3/4] flex items-center justify-center p-6">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-pink-200 rounded-full mb-4 mx-auto flex items-center justify-center">
                          <span className="text-4xl">👩‍🚒</span>
                        </div>
                        <h3 className="font-bold text-purple-800 text-lg mb-2">Sofia</h3>
                        <p className="text-purple-600 text-sm">Safety Specialist</p>
                        <p className="text-xs text-purple-500 mt-2">[Cartoon image placeholder]</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Specialist
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Section - Ruben on Left Again */}
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* Left Column - Ruben's Image */}
              <div className="lg:col-span-3">
                <div className="sticky top-24">
                  <div className="relative bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                    <div className="aspect-[3/4] flex items-center justify-center p-6">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-green-200 rounded-full mb-4 mx-auto flex items-center justify-center">
                          <span className="text-4xl">👨‍🚒</span>
                        </div>
                        <h3 className="font-bold text-green-800 text-lg mb-2">Ruben</h3>
                        <p className="text-green-600 text-sm">Logistics Expert</p>
                        <p className="text-xs text-green-500 mt-2">[Cartoon image placeholder]</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Support
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - FAQ Content */}
              <div className="lg:col-span-9">
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
                          className="border border-gray-200 rounded-lg px-4 hover:border-red-300 transition-colors"
                        >
                          <AccordionTrigger className="text-left hover:text-red-600 font-medium">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                            {faq.answer}
                          </AccordionContent>
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
              Our fire safety experts are here to help. Get in touch with us for personalized advice and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg">
                Contact Our Experts
              </button>
              <button className="bg-white hover:bg-gray-50 text-red-600 px-8 py-3 rounded-lg font-semibold border border-red-200 transition-colors">
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
