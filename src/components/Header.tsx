
import { useState } from 'react';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/b01391ef-222e-42bc-b8fc-3803981d0447.png" 
              alt="Little Fire Heroes Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-gray-700 hover:text-red-600 transition-colors">
                Shop By Category
              </button>
            </div>
            <a href="#shop" className="text-gray-700 hover:text-red-600 transition-colors">Shop For</a>
            <a href="#about" className="text-gray-700 hover:text-red-600 transition-colors">About Us</a>
            <a href="#faq" className="text-gray-700 hover:text-red-600 transition-colors">FAQ</a>
            <a href="#mission" className="text-gray-700 hover:text-red-600 transition-colors">Our Mission</a>
            <a href="#support" className="text-gray-700 hover:text-red-600 transition-colors">Servicing Support</a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">Contact Us</a>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hover:bg-white/50 backdrop-blur-sm">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-white/50 backdrop-blur-sm">
              <ShoppingCart className="h-4 w-4" />
            </Button>
            <span className="hidden md:inline text-sm text-gray-600">Help & Advice</span>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/50 backdrop-blur-sm transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20 bg-white/90 backdrop-blur-md rounded-b-lg">
            <nav className="flex flex-col space-y-2">
              <a href="#shop" className="text-gray-700 hover:text-red-600 py-2 px-4 rounded-lg hover:bg-white/50 transition-colors">Shop By Category</a>
              <a href="#shop" className="text-gray-700 hover:text-red-600 py-2 px-4 rounded-lg hover:bg-white/50 transition-colors">Shop For</a>
              <a href="#about" className="text-gray-700 hover:text-red-600 py-2 px-4 rounded-lg hover:bg-white/50 transition-colors">About Us</a>
              <a href="#faq" className="text-gray-700 hover:text-red-600 py-2 px-4 rounded-lg hover:bg-white/50 transition-colors">FAQ</a>
              <a href="#mission" className="text-gray-700 hover:text-red-600 py-2 px-4 rounded-lg hover:bg-white/50 transition-colors">Our Mission</a>
              <a href="#support" className="text-gray-700 hover:text-red-600 py-2 px-4 rounded-lg hover:bg-white/50 transition-colors">Servicing Support</a>
              <a href="#contact" className="text-gray-700 hover:text-red-600 py-2 px-4 rounded-lg hover:bg-white/50 transition-colors">Contact Us</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
