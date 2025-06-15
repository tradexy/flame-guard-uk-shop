
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProductNotFound = () => (
  <div className="min-h-screen bg-white">
    <Header />
    <main className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
      <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
      <Link to="/shop-by-category">
        <Button>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Shop
        </Button>
      </Link>
    </main>
    <Footer />
  </div>
);

export default ProductNotFound;
