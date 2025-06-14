
import { useMemo } from 'react';
import { productsData } from '@/data/productsData';

interface SearchResult {
  title: string;
  path: string;
  type: string;
  price?: string;
}

export const useSearchData = () => {
  const searchableContent = useMemo((): SearchResult[] => [
    { title: 'Aerosol Products', path: '/product-category/aerosol', type: 'Product Category' },
    { title: 'Fire Alarms', path: '/product-category/alarms', type: 'Product Category' },
    { title: 'Fire Sachets', path: '/product-category/sachets', type: 'Product Category' },
    { title: 'Fire Extinguishers', path: '/product-category/extinguishers', type: 'Product Category' },
    { title: 'Ancillary Products', path: '/product-category/ancillary-products', type: 'Product Category' },
    { title: 'Servicing Products', path: '/product-category/servicing-products', type: 'Product Category' },
    { title: 'About Us', path: '/about-us', type: 'Page' },
    { title: 'Our Mission', path: '/our-mission', type: 'Page' },
    { title: 'Servicing Support', path: '/servicing-support', type: 'Page' },
    { title: 'Contact Us', path: '/contact-us', type: 'Page' },
    { title: 'FAQ', path: '/faqs', type: 'Page' },
    { title: 'Shop By Category', path: '/shop-by-category', type: 'Page' },
    { title: 'Shop For', path: '/shop-for', type: 'Page' },
  ], []);

  const allProducts = useMemo((): SearchResult[] => {
    const categoryMap: { [key: string]: string } = {
      'Aerosol Systems': 'aerosols',
      'Portable Aerosols': 'aerosols',
      'Fixed Systems': 'aerosols',
      'Emergency Use': 'aerosols',
      'Smoke Detectors': 'alarms',
      'Heat Detectors': 'alarms',
      'Control Panels': 'alarms',
      'Combination Detectors': 'alarms',
      'Emergency Sachets': 'sachets',
      'Professional Sachets': 'sachets',
      'Sachet Packs': 'sachets',
      'Vehicle Sachets': 'sachets',
      'Industrial Sachets': 'sachets',
      'Home Safety': 'sachets',
      'Powder Extinguishers': 'extinguishers',
      'Carbon Dioxide Extinguishers': 'extinguishers',
      'Foam Extinguishers': 'extinguishers',
      'Water Extinguishers': 'extinguishers',
      'Wet Chemical Extinguishers': 'extinguishers',
      'Mounting & Brackets': 'ancillaryProducts',
      'Safety Signs': 'ancillaryProducts',
      'Maintenance Kits': 'ancillaryProducts',
      'Emergency Lighting': 'ancillaryProducts',
      'Fire Blankets': 'ancillaryProducts',
      'Storage & Cabinets': 'ancillaryProducts',
      'Training Materials': 'ancillaryProducts',
      'Testing Equipment': 'ancillaryProducts',
      'Service Tools': 'servicingProducts',
      'Testing Tools': 'servicingProducts',
      'Software Solutions': 'servicingProducts',
      'Inspection Tools': 'servicingProducts'
    };

    return Object.entries(productsData).flatMap(([categoryKey, products]) =>
      products.map(product => ({
        title: product.name,
        path: `/product/${categoryMap[product.category] || categoryKey}/${product.id}`,
        type: 'Product',
        price: `£${product.price}`
      }))
    );
  }, []);

  const allSearchableContent = useMemo(() => [...searchableContent, ...allProducts], [searchableContent, allProducts]);

  return { allSearchableContent };
};
