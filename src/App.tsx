
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BasketProvider } from "@/contexts/BasketContext";
import Index from "./pages/Index";
import ShopByCategory from "./pages/ShopByCategory";
import ProductCategoryAerosol from "./pages/ProductCategoryAerosol";
import ProductCategoryAlarms from "./pages/ProductCategoryAlarms";
import ProductCategorySachets from "./pages/ProductCategorySachets";
import ProductCategoryExtinguishers from "./pages/ProductCategoryExtinguishers";
import NotFound from "./pages/NotFound";

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
            <Route path="/product-category/aerosol" element={<ProductCategoryAerosol />} />
            <Route path="/product-category/alarms" element={<ProductCategoryAlarms />} />
            <Route path="/product-category/sachets" element={<ProductCategorySachets />} />
            <Route path="/product-category/extinguishers" element={<ProductCategoryExtinguishers />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </BasketProvider>
  </QueryClientProvider>
);

export default App;
