import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Product Information & Support</h3>
              <div className="space-y-2 text-sm opacity-90">
                <p>Little Heroes Unit 5 Ridge Way</p>
                <p>Crendon Industrial Park Long</p>
                <p>Crendon Buckinghamshire HP18 9BF</p>
                <p>📞 01844 208308</p>
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <div className="space-y-2 text-sm">
                <Link to="/shop-by-category" className="block hover:text-red-400 transition-colors opacity-90 hover:opacity-100">Shop By Category</Link>
                <Link to="/shop-for" className="block hover:text-red-400 transition-colors opacity-90 hover:opacity-100">Shop For</Link>
                <Link to="/about-us" className="block hover:text-red-400 transition-colors opacity-90 hover:opacity-100">About Us</Link>
                <Link to="/faqs" className="block hover:text-red-400 transition-colors opacity-90 hover:opacity-100">FAQs</Link>
                <Link to="/our-mission" className="block hover:text-red-400 transition-colors opacity-90 hover:opacity-100">Our Mission</Link>
                <Link to="/servicing-support" className="block hover:text-red-400 transition-colors opacity-90 hover:opacity-100">Servicing Support</Link>
                <Link to="/contact-us" className="block hover:text-red-400 transition-colors opacity-90 hover:opacity-100">Contact Us</Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Information</h3>
              <div className="space-y-2 text-sm">
                <a href="#" className="block hover:text-red-400 transition-colors opacity-90 hover:opacity-100">Privacy Policy</a>
                <a href="#" className="block hover:text-red-400 transition-colors opacity-90 hover:opacity-100">Cookie Policy</a>
                <a href="#" className="block hover:text-red-400 transition-colors opacity-90 hover:opacity-100">Terms and Conditions</a>
                <a href="#" className="block hover:text-red-400 transition-colors opacity-90 hover:opacity-100">Data Protection</a>
                <a href="#" className="block hover:text-red-400 transition-colors opacity-90 hover:opacity-100">Site Map</a>
                <a href="#" className="block hover:text-red-400 transition-colors opacity-90 hover:opacity-100">Portal</a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">WANT TO BE SAFER?</h3>
              <p className="text-sm mb-4 opacity-90">
                Subscribe to our newsletter to receive regular Firexo, industry and safety updates.
              </p>
              <div className="space-y-2">
                <Input 
                  type="email" 
                  placeholder="Email Address *" 
                  className="bg-white/90 text-gray-800 border-white/20 placeholder:text-gray-500 focus:bg-white"
                />
                <Button className="w-full" variant="destructive">
                  SUBSCRIBE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
