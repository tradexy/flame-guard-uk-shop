
import { ShoppingCart, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const QuickShopBar = () => (
  <nav className="fixed z-40 bottom-2 left-0 w-full flex justify-center md:hidden pointer-events-none">
    <div className="pointer-events-auto bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 rounded-full shadow-lg flex items-center gap-4 px-6 py-2 animate-fade-in border border-white/40">
      <Link
        to="/shop-by-category"
        className="flex items-center gap-2 text-white font-bold px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 transition-colors duration-200 shadow"
        aria-label="Shop"
      >
        <ShoppingCart className="w-5 h-5" />
        Shop
      </Link>
      <span className="h-6 w-px bg-white/50" aria-hidden="true" />
      <Link
        to="/help-advice"
        className="flex items-center gap-2 text-white font-bold px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors duration-200 shadow"
        aria-label="Help & Advice"
      >
        <HelpCircle className="w-5 h-5" />
        Help
      </Link>
    </div>
  </nav>
);

export default QuickShopBar;
