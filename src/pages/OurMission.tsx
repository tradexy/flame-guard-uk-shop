
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const OurMission = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
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
          <div className="space-y-16">
            
            {/* First Section - Fire Safety Education */}
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column - Ruben's Image */}
              <div className="lg:col-span-4">
                <div className="relative bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                  <div className="aspect-[4/5] flex items-center justify-center p-12">
                    <div className="text-center">
                      <div className="w-48 h-48 bg-blue-200 rounded-full mb-8 mx-auto flex items-center justify-center">
                        <span className="text-8xl">👨‍🚒</span>
                      </div>
                      <h3 className="font-bold text-blue-800 text-3xl mb-4">Ruben</h3>
                      <p className="text-blue-600 text-xl mb-2">Fire Safety Hero</p>
                      <p className="text-base text-blue-500 mt-4">[Teaching fire safety to children]</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Educator
                  </div>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="lg:col-span-8">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Fire Safety Education for All Ages
                  </h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
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

            {/* Second Section - Community Impact */}
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="lg:col-span-8">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Supporting Schools & Communities
                  </h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
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

              {/* Right Column - Sofia's Image */}
              <div className="lg:col-span-4">
                <div className="relative bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                  <div className="aspect-[4/5] flex items-center justify-center p-12">
                    <div className="text-center">
                      <div className="w-48 h-48 bg-pink-200 rounded-full mb-8 mx-auto flex items-center justify-center">
                        <span className="text-8xl">👩‍🚒</span>
                      </div>
                      <h3 className="font-bold text-purple-800 text-3xl mb-4">Sofia</h3>
                      <p className="text-purple-600 text-xl mb-2">Community Champion</p>
                      <p className="text-base text-purple-500 mt-4">[Supporting schools and communities]</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Champion
                  </div>
                </div>
              </div>
            </div>

            {/* Third Section - Innovation & Quality */}
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column - Both Characters */}
              <div className="lg:col-span-4">
                <div className="relative bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                  <div className="aspect-[4/5] flex items-center justify-center p-12">
                    <div className="text-center">
                      <div className="flex justify-center gap-4 mb-6">
                        <div className="w-24 h-24 bg-green-200 rounded-full flex items-center justify-center">
                          <span className="text-4xl">👨‍🚒</span>
                        </div>
                        <div className="w-24 h-24 bg-green-200 rounded-full flex items-center justify-center">
                          <span className="text-4xl">👩‍🚒</span>
                        </div>
                      </div>
                      <h3 className="font-bold text-green-800 text-3xl mb-4">Ruben & Sofia</h3>
                      <p className="text-green-600 text-xl mb-2">Innovation Team</p>
                      <p className="text-base text-green-500 mt-4">[Working together for safer futures]</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Innovation
                  </div>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="lg:col-span-8">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Innovation Meets Environmental Responsibility
                  </h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
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
      </section>

      {/* Vision Statement */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
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
