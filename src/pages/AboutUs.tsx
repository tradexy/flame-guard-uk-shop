import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Heart, Users, Award, Target, Lightbulb } from 'lucide-react';

const AboutUs = () => {
  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'We prioritize safety in everything we do, ensuring our products meet the highest standards to protect lives and property.'
    },
    {
      icon: Heart,
      title: 'Community Impact',
      description: 'We believe in giving back, donating 3% of our profits to help schools access essential safety education and sports equipment.'
    },
    {
      icon: Users,
      title: 'Education & Awareness',
      description: 'We empower communities through fire safety education, making everyone a potential fire hero.'
    },
    {
      icon: Award,
      title: 'Quality Products',
      description: 'Our innovative fire safety products are designed to be effective, reliable, and accessible to everyone.'
    }
  ];

  const team = [
    {
      name: 'Sofia',
      role: 'Co-Founder & Vision Leader',
      description: 'Sofia\'s passion for safety and community drives our mission to make fire safety accessible to all',
      icon: '👩‍🚒'
    },
    {
      name: 'Ruben',
      role: 'Co-Founder & Innovation Leader',
      description: 'Ruben leads our product development, ensuring every solution meets real-world safety needs',
      icon: '👨‍🚒'
    },
    {
      name: 'Safety Innovation Team',
      role: 'Research & Development',
      description: 'Supporting Sofia and Ruben in developing next-generation fire safety technologies',
      icon: '🔬'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-orange-100 to-red-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About Little Fire Heroes
            </h1>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Founded by <strong>Sofia and Ruben</strong>, we're on a mission to make fire safety accessible, 
              understandable, and effective for everyone. From innovative products to community education, 
              we believe everyone can be a fire hero.
            </p>
            <p className="text-md text-gray-500 mb-8">
              <em>Inspired by Sofia and Ruben's vision for safer communities</em>
            </p>
            <div className="flex justify-center space-x-4 text-6xl">
              <span>🚒</span>
              <span>👨‍🚒</span>
              <span>🔥</span>
              <span>🛡️</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section with Image Placeholder */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Little Fire Heroes was born from <strong>Sofia and Ruben's</strong> simple belief: 
                  fire safety shouldn't be complicated, expensive, or intimidating. Together, they started 
                  with a vision to create products and education that empower individuals, families, 
                  and communities to protect themselves.
                </p>
                <p>
                  <strong>Sofia and Ruben's</strong> journey began with recognizing that traditional fire 
                  safety solutions often fell short of meeting real-world needs. They set out to change 
                  that by developing innovative, accessible products that anyone can use effectively.
                </p>
                <p>
                  Today, thanks to <strong>Sofia and Ruben's</strong> leadership, we're proud to serve homes, 
                  boats, caravans, schools, factories, and offices across the UK, making fire safety a 
                  priority that's both achievable and affordable.
                </p>
              </div>
            </div>
            <div className="relative">
              {/* Image Placeholder 1 - Sofia & Ruben */}
              <div className="relative bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl overflow-hidden shadow-2xl border border-white/50">
                <div className="aspect-[4/3] flex items-center justify-center bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-sm">
                  <div className="text-center text-gray-500">
                    <div className="text-6xl mb-4">📸</div>
                    <p className="text-lg font-medium">Sofia & Ruben Image</p>
                    <p className="text-sm opacity-70">Placeholder for founders photo</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-semibold text-lg">Sofia & Ruben</p>
                  <p className="text-sm opacity-90">Co-Founders of Little Fire Heroes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Little Fire Heroes - Why It Matters Section */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Little Fire Heroes - Why It Matters</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong>Sofia and Ruben</strong> founded Little Fire Heroes because they understood that fire safety 
                  isn't just about having the right equipment - it's about creating a culture where everyone feels 
                  empowered to act as a fire hero in their community.
                </p>
                <p>
                  Through <strong>Sofia and Ruben's</strong> innovative approach, we've transformed how people think 
                  about fire safety. From homes to workplaces, schools to recreational vehicles, their vision ensures 
                  that fire safety solutions are accessible, understandable, and effective for everyone.
                </p>
                <p>
                  <strong>Sofia and Ruben's</strong> commitment goes beyond products - they've built a movement that 
                  educates, empowers, and protects communities across the UK. Every fire extinguisher, every safety 
                  course, every community program reflects their dedication to making fire safety a priority that 
                  saves lives.
                </p>
              </div>
            </div>
            <div className="relative">
              {/* Image Placeholder 3 - Why It Matters */}
              <div className="relative bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl overflow-hidden shadow-2xl border border-white/50">
                <div className="aspect-[4/3] flex items-center justify-center bg-gradient-to-br from-amber-500/10 to-yellow-500/10 backdrop-blur-sm">
                  <div className="text-center text-gray-500">
                    <div className="text-6xl mb-4">🔥</div>
                    <p className="text-lg font-medium">Why It Matters Image</p>
                    <p className="text-sm opacity-70">Placeholder for impact/mission photo</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-semibold text-lg">Making Fire Safety Matter</p>
                  <p className="text-sm opacity-90">Sofia & Ruben's impact on community safety</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values, established by Sofia and Ruben, guide everything we do, 
              from product development to community engagement.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-white/70 backdrop-blur-sm border border-white/50 hover:bg-white/80">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                      <IconComponent className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-gray-800">{value.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl">
              <div className="text-6xl mb-6">🎓</div>
              <h2 className="text-3xl font-bold mb-6">Making a Difference - Sofia & Ruben's Promise</h2>
              <p className="text-lg mb-8 opacity-90 leading-relaxed">
                True to <strong>Sofia and Ruben's</strong> commitment to community, we're proud to donate 3% 
                of our profits to help schools across the UK access essential sports kits, uniforms, and safety 
                education tools. Because building safer communities starts with empowering our children - 
                a principle that Sofia and Ruben hold dear.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">3%</div>
                  <div className="text-sm opacity-90">Profits Donated</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">🏫</div>
                  <div className="text-sm opacity-90">Schools Supported</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">🎯</div>
                  <div className="text-sm opacity-90">Safety First</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section with Second Image Placeholder */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Sofia & Ruben</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the passionate founders behind Little Fire Heroes, <strong>Sofia and Ruben</strong>, 
              dedicated to keeping communities safe through their innovative vision.
            </p>
          </div>
          
          {/* Second Image Placeholder - Team Photo */}
          <div className="mb-12 max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl overflow-hidden shadow-2xl border border-white/50">
              <div className="aspect-[16/9] flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm">
                <div className="text-center text-gray-500">
                  <div className="text-8xl mb-4">🏢</div>
                  <p className="text-xl font-medium">Team & Office Photo</p>
                  <p className="text-sm opacity-70">Placeholder for Sofia, Ruben & team image</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-semibold text-xl">The Little Fire Heroes Team</p>
                <p className="text-sm opacity-90">Sofia, Ruben and the safety innovation team working together</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-white/70 backdrop-blur-sm border border-white/50 hover:bg-white/80">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{member.icon}</div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">{member.name}</h3>
                  <p className="text-red-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-100 to-red-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Join Sofia & Ruben's Mission?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of people who trust <strong>Sofia and Ruben's</strong> vision at Little Fire Heroes 
            to keep their homes, workplaces, and communities safe. Explore our products or get in touch with our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-red-600/90 backdrop-blur-sm hover:bg-red-700/90 text-white px-8 py-3 shadow-lg">
              EXPLORE PRODUCTS
            </Button>
            <Button variant="outline" className="border-red-600/50 bg-white/50 backdrop-blur-sm text-red-600 hover:bg-red-50/80 px-8 py-3 shadow-lg">
              CONTACT US
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
