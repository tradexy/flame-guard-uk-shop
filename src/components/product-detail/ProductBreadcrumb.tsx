
import { Link } from 'react-router-dom';

interface ProductBreadcrumbProps {
  category: string;
  productName: string;
}

const getCategoryPath = (category: string) => {
  const categoryMap: { [key: string]: string } = {
    'aerosols': '/product-category/aerosol',
    'alarms': '/product-category/alarms',
    'sachets': '/product-category/sachets',
    'extinguishers': '/product-category/extinguishers',
    'ancillaryProducts': '/product-category/ancillary-products',
    'servicingProducts': '/product-category/servicing-products'
  };
  return categoryMap[category] || '/shop-by-category';
};

const ProductBreadcrumb = ({ category, productName }: ProductBreadcrumbProps) => (
  <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
    <Link to="/" className="hover:text-gray-900">Home</Link>
    <span>/</span>
    <Link to="/shop-by-category" className="hover:text-gray-900">Shop</Link>
    <span>/</span>
    <Link to={getCategoryPath(category)} className="hover:text-gray-900 capitalize">
      {category.replace(/([A-Z])/g, ' $1').trim()}
    </Link>
    <span>/</span>
    <span className="text-foreground font-medium">{productName}</span>
  </nav>
);

export default ProductBreadcrumb;
