
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface CategoryBreadcrumbProps {
  category: string;
}

const CategoryBreadcrumb = ({ category }: CategoryBreadcrumbProps) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600">
      <Link to="/" className="hover:text-red-600 transition-colors">
        Home
      </Link>
      <ChevronRight className="h-4 w-4" />
      <Link to="/shop-by-category" className="hover:text-red-600 transition-colors">
        Shop by Category
      </Link>
      <ChevronRight className="h-4 w-4" />
      <span className="text-gray-800 font-medium">{category}</span>
    </nav>
  );
};

export default CategoryBreadcrumb;
