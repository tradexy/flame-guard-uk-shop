
import { useState, useMemo, useCallback } from 'react';
import { Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useSearchData } from '@/hooks/useSearchData';

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { allSearchableContent } = useSearchData();

  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    return allSearchableContent.filter(item =>
      item.title.toLowerCase().includes(query)
    );
  }, [searchQuery, allSearchableContent]);

  const handleSearchSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
  }, []);

  const handleResultClick = useCallback(() => {
    onOpenChange(false);
    setSearchQuery('');
  }, [onOpenChange]);

  const clearSearch = useCallback(() => {
    setSearchQuery('');
  }, []);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-white/95 backdrop-blur-md border border-white/20">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Search Our Website
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSearchSubmit} className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products, pages, or information..."
              className="pl-10 bg-white/50 backdrop-blur-sm border border-white/30 focus:bg-white/80"
              autoFocus
            />
            {searchQuery && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
                onClick={clearSearch}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </form>

        {searchQuery && (
          <div className="mt-4 max-h-80 overflow-y-auto">
            {filteredResults.length > 0 ? (
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-600 mb-2">
                  Search Results ({filteredResults.length})
                </h3>
                {filteredResults.map((result, index) => (
                  <Link
                    key={`${result.type}-${result.title}-${index}`}
                    to={result.path}
                    onClick={handleResultClick}
                    className="block p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20 hover:bg-white/70 transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-red-600 transition-colors">
                          {result.title}
                        </h4>
                        <div className="flex items-center space-x-2">
                          <p className="text-sm text-gray-600">{result.type}</p>
                          {result.type === 'Product' && result.price && (
                            <>
                              <span className="text-gray-400">•</span>
                              <p className="text-sm font-medium text-red-600">{result.price}</p>
                            </>
                          )}
                        </div>
                      </div>
                      <Search className="h-4 w-4 text-gray-400 group-hover:text-red-500 transition-colors" />
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Search className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>No results found for "{searchQuery}"</p>
                <p className="text-sm mt-1">Try different keywords or browse our categories</p>
              </div>
            )}
          </div>
        )}

        {!searchQuery && (
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-600 mb-3">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link
                to="/shop-by-category"
                onClick={handleResultClick}
                className="p-2 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20 hover:bg-white/70 transition-all duration-200 text-sm text-center"
              >
                Shop By Category
              </Link>
              <Link
                to="/about-us"
                onClick={handleResultClick}
                className="p-2 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20 hover:bg-white/70 transition-all duration-200 text-sm text-center"
              >
                About Us
              </Link>
              <Link
                to="/contact-us"
                onClick={handleResultClick}
                className="p-2 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20 hover:bg-white/70 transition-all duration-200 text-sm text-center"
              >
                Contact Us
              </Link>
              <Link
                to="/faqs"
                onClick={handleResultClick}
                className="p-2 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20 hover:bg-white/70 transition-all duration-200 text-sm text-center"
              >
                FAQ
              </Link>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
