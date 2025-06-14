
import { aerosolProducts } from './products/aerosols';
import { alarmProducts } from './products/alarms';
import { sachetProducts } from './products/sachets';
import { extinguisherProducts } from './products/extinguishers';
import { ancillaryProducts } from './products/ancillaryProducts';
import { servicingProducts } from './products/servicingProducts';

export const productsData = {
  aerosols: aerosolProducts,
  alarms: alarmProducts,
  sachets: sachetProducts,
  extinguishers: extinguisherProducts,
  ancillaryProducts: ancillaryProducts,
  servicingProducts: servicingProducts
};

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number | null;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  tags: string[];
  category: string;
  description: string;
}
