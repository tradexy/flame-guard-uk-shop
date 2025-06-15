import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const OurMission = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Mission
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Empowering communities through fire safety education and creating little heroes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
                🔥 Safety First
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
                🎓 Education Focus
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
                🌟 Community Impact
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            
            {/* First Section - Fire Safety Education with Ruben */}
            <div className="grid md:grid-cols-12 gap-8 items-start">
              {/* Left Column - Ruben's Image */}
              <div className="md:col-span-3">
                <div className="bg-gradient-to-br from-gray-200 via-gray-50 to-gray-400 rounded-xl p-6 text-center shadow-lg border border-gray-300">
                  <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/d91b57ba-fd4d-4279-996d-318c136c54af.png" 
                      alt="Ruben - Fire Safety Expert"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg mb-2">Ruben</h3>
                  <p className="text-gray-700 text-sm mb-3">Fire Safety Expert</p>
                  <Badge className="bg-gradient-to-r from-gray-400 via-red-600 to-gray-700 text-white text-xs border border-red-400 shadow">
                    Expert
                  </Badge>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="md:col-span-9">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b">
                    <h2 className="text-2xl font-bold text-gray-800">Fire Safety Education for All Ages</h2>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                      <p>
                        At Little Heroes, we believe that fire safety education should be accessible, engaging, and fun for everyone. Our mission begins with empowering children, families, and communities with the knowledge they need to stay safe.
                      </p>
                      <p>
                        Through interactive workshops, educational materials, and hands-on demonstrations, we're creating a new generation of fire safety heroes who understand the importance of prevention and know how to respond in emergencies.
                      </p>
                      <p>
                        Every child deserves to feel confident and prepared. That's why we've developed age-appropriate programmes that make learning about fire safety an adventure rather than a frightening experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Section - Community Impact with Sofia */}
            <div className="grid md:grid-cols-12 gap-8 items-start">
              {/* Left Column - Content */}
              <div className="md:col-span-9">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b">
                    <h2 className="text-2xl font-bold text-gray-800">Supporting Schools & Communities</h2>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                      <p>
                        We're proud to donate 3% of our profits to help schools across the UK access essential safety equipment, sports kits, and educational resources. This isn't just business for us – it's about building stronger, safer communities.
                      </p>
                      <p>
                        Our Little Hero Fire Project works directly with schools to provide fire safety education programmes, equipment donations, and training sessions for teachers and pupils alike.
                      </p>
                      <p>
                        When you purchase from Little Heroes, you're not just protecting your own family – you're helping us extend that protection to schools and communities that need it most.
                      </p>
                    </div>
                    <div className="mt-6">
                      <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3">
                        Apply for School Support
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Sofia's Image */}
              <div className="md:col-span-3">
                <div className="bg-gradient-to-br from-gray-200 via-yellow-50 to-gray-300 rounded-xl p-6 text-center shadow-lg border border-gray-200">
                  <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/8c298eac-ace5-4c14-99a7-683522bb0ac3.png" 
                      alt="Sofia - Community Expert"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="font-bold text-yellow-900 text-lg mb-2">Sofia</h3>
                  <p className="text-yellow-700 text-sm mb-3">Community Expert</p>
                  <Badge className="bg-gradient-to-r from-gray-300 via-yellow-400 to-gray-400 text-yellow-900 text-xs border border-yellow-300 shadow">
                    Community
                  </Badge>
                </div>
              </div>
            </div>

            {/* Third Section - Innovation & Quality with Placeholder */}
            <div className="grid md:grid-cols-12 gap-8 items-start">
              {/* Left Column - Both Characters Placeholder */}
              <div className="md:col-span-3">
                <div className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-400 rounded-xl p-6 text-center shadow-lg border border-gray-200">
                  <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <div className="flex justify-center gap-1">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-xs">👨‍🚒</span>
                      </div>
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-xs">👩‍🚒</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg mb-2">Ruben & Sofia</h3>
                  <p className="text-gray-600 text-sm mb-3">Innovation Team</p>
                  <Badge className="bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 text-white text-xs border border-gray-400 shadow">
                    Innovation
                  </Badge>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="md:col-span-9">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b">
                    <h2 className="text-2xl font-bold text-gray-800">Innovation Meets Environmental Responsibility</h2>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                      <p>
                        Our commitment to innovation drives us to develop cutting-edge fire safety products that are not only highly effective but also environmentally responsible. We believe that protecting lives shouldn't come at the cost of our planet.
                      </p>
                      <p>
                        Every product we create is designed with multiple fire classes in mind – from electrical fires to cooking oil incidents – ensuring that families and businesses have comprehensive protection with fewer products.
                      </p>
                      <p>
                        We're constantly researching and developing new technologies to make fire safety more accessible, more effective, and more sustainable for future generations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16 bg-gradient-to-r from-gray-100 via-orange-50 to-red-100 text-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">
              Our Vision for the Future
            </h2>
            <p className="text-xl mb-8 opacity-90">
              We envision a world where every child is a fire safety hero, every home is protected, and every community has access to life-saving education and equipment.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="font-bold text-xl mb-2">Education First</h3>
                <p className="opacity-90">Making fire safety education engaging and accessible for all ages</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="font-bold text-xl mb-2">Global Impact</h3>
                <p className="opacity-90">Expanding our reach to protect communities worldwide</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="font-bold text-xl mb-2">Innovation</h3>
                <p className="opacity-90">Continuously developing better, safer, and more sustainable solutions</p>
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
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Every purchase helps us create safer communities and empower the next generation of fire safety heroes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 font-semibold shadow-lg">
                Shop Safety Products
              </Button>
              <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50 px-8 py-3 font-semibold">
                Learn About Our Programmes
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurMission;
