
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import BasketSidebar from '@/components/BasketSidebar';
import SearchDialog from '@/components/SearchDialog';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  const categories = [
    { name: 'Aerosols', path: '/product-category/aerosol' },
    { name: 'Alarms', path: '/product-category/alarms' }, 
    { name: 'Sachets', path: '/product-category/sachets' },
    { name: 'Extinguishers', path: '/product-category/extinguishers' },
    { name: 'Ancillary Products', path: '/product-category/ancillary-products' },
    { name: 'Servicing Products', path: '/product-category/servicing-products' }
  ];

  const handleShopByCategoryClick = () => {
    navigate('/shop-by-category');
  };

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  return (
    <>
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-white/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Link to="/" className="hidden sm:block">
                <img 
                  src="/lovable-uploads/e03fea4f-9182-42f7-972f-4a2708198d02.png" 
                  alt="Little Fire Heroes Logo" 
                  className="h-14 w-auto object-contain"
                />
              </Link>
              <Link to="/" className="sm:hidden">
                <img 
                  src="/lovable-uploads/e03fea4f-9182-42f7-972f-4a2708198d02.png" 
                  alt="Little Fire Heroes Logo" 
                  className="h-10 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <DropdownMenu>
                <DropdownMenuTrigger 
                  className="text-gray-700 hover:text-red-600 transition-colors flex items-center space-x-1 cursor-pointer"
                  onClick={handleShopByCategoryClick}
                >
                  <span>Shop By Category</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white/90 backdrop-blur-md border border-white/20 shadow-lg">
                  <DropdownMenuItem asChild>
                    <Link 
                      to="/shop-by-category"
                      className="hover:bg-red-50 cursor-pointer w-full font-medium"
                    >
                      View All Categories
                    </Link>
                  </DropdownMenuItem>
                  <div className="border-t border-gray-200 my-1"></div>
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
              <Link to="/shop-for" className="text-gray-700 hover:text-red-600 transition-colors">Shop For</Link>
              <Link to="/about-us" className="text-gray-700 hover:text-red-600 transition-colors">About Us</Link>
              <Link to="/faqs" className="text-gray-700 hover:text-red-600 transition-colors">FAQ</Link>
              <Link to="/our-mission" className="text-gray-700 hover:text-red-600 transition-colors">Our Mission</Link>
              <Link to="/servicing-support" className="text-gray-700 hover:text-red-600 transition-colors">Servicing Support</Link>
              <Link to="/contact-us" className="text-gray-700 hover:text-red-600 transition-colors">Contact Us</Link>
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4 flex-shrink-0">
              <Button 
                variant="ghost" 
                size="sm" 
                className="hover:bg-white/50 backdrop-blur-sm"
                onClick={handleSearchClick}
              >
                <Search className="h-5 w-5" />
              </Button>
              <BasketSidebar />
              <Link 
                to="/help-advice" 
                className="hidden md:inline text-sm text-gray-600 hover:text-red-600 transition-colors cursor-pointer whitespace-nowrap"
              >
                Help & Advice
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/50 backdrop-blur-sm transition-colors flex-shrink-0"
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
                  <Link 
                    to="/shop-by-category"
                    className="text-gray-700 font-medium hover:text-red-600 block py-1 px-2 rounded-lg hover:bg-white/50 transition-colors"
                  >
                    Shop By Category
                  </Link>
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
                <Link to="/shop-for" className="text-gray-700 hover:text-red-600 py-2 px-4 rounded-lg hover:bg-white/50 transition-colors">Shop For</Link>
                <Link to="/about-us" className="text-gray-700 hover:text-red-600 py-2 px-4 rounded-lg hover:bg-white/50 transition-colors">About Us</Link>
                <Link to="/faqs" className="text-gray-700 hover:text-red-600 py-2 px-4 rounded-lg hover:bg-white/50 transition-colors">FAQ</Link>
                <Link to="/our-mission" className="text-gray-700 hover:text-red-600 py-2 px-4 rounded-lg hover:bg-white/50 transition-colors">Our Mission</Link>
                <Link to="/servicing-support" className="text-gray-700 hover:text-red-600 py-2 px-4 rounded-lg hover:bg-white/50 transition-colors">Servicing Support</Link>
                <Link to="/contact-us" className="text-gray-700 hover:text-red-600 py-2 px-4 rounded-lg hover:bg-white/50 transition-colors">Contact Us</Link>
                <Link to="/help-advice" className="text-gray-700 hover:text-red-600 py-2 px-4 rounded-lg hover:bg-white/50 transition-colors">Help & Advice</Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Search Dialog */}
      <SearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} />
    </>
  );
};

export default Header;
