
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BasketProvider } from "@/contexts/BasketContext";
import Index from "./pages/Index";
import ShopByCategory from "./pages/ShopByCategory";
import ShopFor from "./pages/ShopFor";
import AboutUs from "./pages/AboutUs";
import OurMission from "./pages/OurMission";
import ServicingSupport from "./pages/ServicingSupport";
import ContactUs from "./pages/ContactUs";
import ProductCategoryAerosol from "./pages/ProductCategoryAerosol";
import ProductCategoryAlarms from "./pages/ProductCategoryAlarms";
import ProductCategorySachets from "./pages/ProductCategorySachets";
import ProductCategoryExtinguishers from "./pages/ProductCategoryExtinguishers";
import ProductCategoryAncillaryProducts from "./pages/ProductCategoryAncillaryProducts";
import ProductCategoryServicingProducts from "./pages/ProductCategoryServicingProducts";
import NotFound from "./pages/NotFound";
import FAQ from "./pages/FAQ";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BasketProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/shop-by-category" element={<ShopByCategory />} />
            <Route path="/shop-for" element={<ShopFor />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-mission" element={<OurMission />} />
            <Route path="/servicing-support" element={<ServicingSupport />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/faqs" element={<FAQ />} />
            <Route path="/product-category/aerosol" element={<ProductCategoryAerosol />} />
            <Route path="/product-category/alarms" element={<ProductCategoryAlarms />} />
            <Route path="/product-category/sachets" element={<ProductCategorySachets />} />
            <Route path="/product-category/extinguishers" element={<ProductCategoryExtinguishers />} />
            <Route path="/product-category/ancillary-products" element={<ProductCategoryAncillaryProducts />} />
            <Route path="/product-category/servicing-products" element={<ProductCategoryServicingProducts />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </BasketProvider>
  </QueryClientProvider>
);

export default App;
