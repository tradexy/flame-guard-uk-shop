
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Product Information & Support</h3>
            <div className="space-y-2 text-sm">
              <p>Little Heroes Unit 5 Ridge Way</p>
              <p>Crendon Industrial Park Long</p>
              <p>Crendon Buckinghamshire HP18 9BF</p>
              <p>📞 01844 208308</p>
            </div>
            <div className="flex space-x-4 mt-4">
              <span>📘</span>
              <span>🐦</span>
              <span>💼</span>
              <span>🎵</span>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-red-400">Shop By Category</a>
              <a href="#" className="block hover:text-red-400">Shop For</a>
              <a href="#" className="block hover:text-red-400">About Us</a>
              <a href="#" className="block hover:text-red-400">Contact Us</a>
              <a href="#" className="block hover:text-red-400">FAQs</a>
              <a href="#" className="block hover:text-red-400">Servicing Support</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Information</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-red-400">Privacy Policy</a>
              <a href="#" className="block hover:text-red-400">Cookie Policy</a>
              <a href="#" className="block hover:text-red-400">Terms and Conditions</a>
              <a href="#" className="block hover:text-red-400">Data Protection</a>
              <a href="#" className="block hover:text-red-400">Site Map</a>
              <a href="#" className="block hover:text-red-400">Portal</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">WANT TO BE SAFER?</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter to receive regular Firexo, industry and safety updates.
            </p>
            <div className="space-y-2">
              <input 
                type="email" 
                placeholder="Email Address *" 
                className="w-full px-3 py-2 text-gray-800 rounded"
              />
              <button className="w-full bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
