
import { Suspense, lazy } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BasketProvider } from "@/contexts/BasketContext";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const ShopByCategory = lazy(() => import("./pages/ShopByCategory"));
const ShopFor = lazy(() => import("./pages/ShopFor"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const OurMission = lazy(() => import("./pages/OurMission"));
const ServicingSupport = lazy(() => import("./pages/ServicingSupport"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const HelpAdvice = lazy(() => import("./pages/HelpAdvice"));
const ProductCategoryAerosol = lazy(() => import("./pages/ProductCategoryAerosol"));
const ProductCategoryAlarms = lazy(() => import("./pages/ProductCategoryAlarms"));
const ProductCategorySachets = lazy(() => import("./pages/ProductCategorySachets"));
const ProductCategoryExtinguishers = lazy(() => import("./pages/ProductCategoryExtinguishers"));
const ProductCategoryAncillaryProducts = lazy(() => import("./pages/ProductCategoryAncillaryProducts"));
const ProductCategoryServicingProducts = lazy(() => import("./pages/ProductCategoryServicingProducts"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));
const FAQ = lazy(() => import("./pages/FAQ"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (renamed from cacheTime)
    },
  },
});

const LoadingSpinner = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-600"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BasketProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/shop-by-category" element={<ShopByCategory />} />
              <Route path="/shop-for" element={<ShopFor />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/our-mission" element={<OurMission />} />
              <Route path="/servicing-support" element={<ServicingSupport />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/help-advice" element={<HelpAdvice />} />
              <Route path="/faqs" element={<FAQ />} />
              <Route path="/product-category/aerosol" element={<ProductCategoryAerosol />} />
              <Route path="/product-category/alarms" element={<ProductCategoryAlarms />} />
              <Route path="/product-category/sachets" element={<ProductCategorySachets />} />
              <Route path="/product-category/extinguishers" element={<ProductCategoryExtinguishers />} />
              <Route path="/product-category/ancillary-products" element={<ProductCategoryAncillaryProducts />} />
              <Route path="/product-category/servicing-products" element={<ProductCategoryServicingProducts />} />
              <Route path="/product/:category/:productId" element={<ProductDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </BasketProvider>
  </QueryClientProvider>
);

export default App;
