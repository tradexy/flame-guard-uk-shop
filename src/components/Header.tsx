
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, Search, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    { name: 'Aerosols', path: '/product-category/aerosol' },
    { name: 'Alarms', path: '/product-category/alarms' }, 
    { name: 'Sachets', path: '/product-category/sachets' },
    { name: 'Extinguishers', path: '/product-category/extinguishers' },
    { name: 'Ancillary Products', path: '/product-category/ancillary' },
    { name: 'Servicing Products', path: '/product-category/servicing' }
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/lovable-uploads/b01391ef-222e-42bc-b8fc-3803981d0447.png" 
                alt="Little Fire Heroes Logo" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-700 hover:text-red-600 transition-colors flex items-center space-x-1">
                <span>Shop By Category</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white/90 backdrop-blur-md border border-white/20 shadow-lg">
                {categories.map((category) => (
                  <DropdownMenuItem key={category.name} asChild>
                    <Link 
                      to={category.path}
                      className="hover:bg-red-50 cursor-pointer w-full"
                    >
                      {category.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
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
              <div className="px-4 py-2">
                <span className="text-gray-700 font-medium">Shop By Category</span>
                <div className="ml-4 mt-2 space-y-1">
                  {categories.map((category) => (
                    <Link 
                      key={category.name}
                      to={category.path}
                      className="block text-gray-600 hover:text-red-600 py-1 px-2 rounded-lg hover:bg-white/50 transition-colors"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
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
