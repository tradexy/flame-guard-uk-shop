
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
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Link to="/" className="hidden sm:block">
                <img 
                  src="/lovable-uploads/fdd96bf5-6da7-4a16-9eb4-684db3fd1767.png" 
                  alt="Little Fire Heroes Logo" 
                  className="h-14 w-auto object-contain"
                />
              </Link>
              <Link to="/" className="sm:hidden">
                <img 
                  src="/lovable-uploads/fdd96bf5-6da7-4a16-9eb4-684db3fd1767.png" 
                  alt="Little Fire Heroes Logo" 
                  className="h-10 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <DropdownMenu>
                <DropdownMenuTrigger
                  className="font-medium text-foreground/90 hover:text-primary transition-colors flex items-center space-x-1 cursor-pointer"
                  onClick={handleShopByCategoryClick}
                >
                  <span>Shop By Category</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border-gray-200 shadow-lg">
                  <DropdownMenuItem asChild>
                    <Link
                      to="/shop-by-category"
                      className="hover:bg-primary/10 hover:text-primary cursor-pointer w-full font-medium"
                    >
                      View All Categories
                    </Link>
                  </DropdownMenuItem>
                  <div className="border-t border-gray-200 my-1"></div>
                  {categories.map((category) => (
                    <DropdownMenuItem key={category.name} asChild>
                      <Link
                        to={category.path}
                        className="hover:bg-primary/10 hover:text-primary cursor-pointer w-full"
                      >
                        {category.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Link to="/shop-for" className="font-medium text-foreground/90 hover:text-primary transition-colors">Shop For</Link>
              <Link to="/about-us" className="font-medium text-foreground/90 hover:text-primary transition-colors">About Us</Link>
              <Link to="/faqs" className="font-medium text-foreground/90 hover:text-primary transition-colors">FAQ</Link>
              <Link to="/our-mission" className="font-medium text-foreground/90 hover:text-primary transition-colors">Our Mission</Link>
              <Link to="/servicing-support" className="font-medium text-foreground/90 hover:text-primary transition-colors">Servicing Support</Link>
              <Link to="/contact-us" className="font-medium text-foreground/90 hover:text-primary transition-colors">Contact Us</Link>
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4 flex-shrink-0">
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-gray-100"
                onClick={handleSearchClick}
              >
                <Search className="h-5 w-5" />
              </Button>
              <BasketSidebar />
              <Link
                to="/help-advice"
                className="hidden md:inline text-sm font-medium text-foreground/80 hover:text-primary transition-colors cursor-pointer whitespace-nowrap"
              >
                Help & Advice
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 bg-white rounded-b-lg">
              <nav className="flex flex-col space-y-2">
                <div className="px-4 py-2">
                  <Link
                    to="/shop-by-category"
                    className="font-medium text-foreground/90 hover:text-primary block py-1 px-2 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    Shop By Category
                  </Link>
                  <div className="ml-4 mt-2 space-y-1">
                    {categories.map((category) => (
                      <Link
                        key={category.name}
                        to={category.path}
                        className="block text-foreground/80 hover:text-primary py-1 px-2 rounded-lg hover:bg-primary/10 transition-colors"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link to="/shop-for" className="font-medium text-foreground/90 hover:text-primary py-2 px-4 rounded-lg hover:bg-primary/10 transition-colors">Shop For</Link>
                <Link to="/about-us" className="font-medium text-foreground/90 hover:text-primary py-2 px-4 rounded-lg hover:bg-primary/10 transition-colors">About Us</Link>
                <Link to="/faqs" className="font-medium text-foreground/90 hover:text-primary py-2 px-4 rounded-lg hover:bg-primary/10 transition-colors">FAQ</Link>
                <Link to="/our-mission" className="font-medium text-foreground/90 hover:text-primary py-2 px-4 rounded-lg hover:bg-primary/10 transition-colors">Our Mission</Link>
                <Link to="/servicing-support" className="font-medium text-foreground/90 hover:text-primary py-2 px-4 rounded-lg hover:bg-primary/10 transition-colors">Servicing Support</Link>
                <Link to="/contact-us" className="font-medium text-foreground/90 hover:text-primary py-2 px-4 rounded-lg hover:bg-primary/10 transition-colors">Contact Us</Link>
                <Link to="/help-advice" className="font-medium text-foreground/90 hover:text-primary py-2 px-4 rounded-lg hover:bg-primary/10 transition-colors">Help & Advice</Link>
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
