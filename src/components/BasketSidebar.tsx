
import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useBasket } from '@/contexts/BasketContext';
import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const BasketSidebar = () => {
  const { 
    items, 
    removeFromBasket, 
    updateQuantity, 
    clearBasket,
    getTotalItems, 
    getTotalPrice,
    isBasketOpen,
    setIsBasketOpen
  } = useBasket();
  const { toast } = useToast();

  const handleCheckout = () => {
    toast({
      title: "Checkout Ready",
      description: "Checkout functionality will be integrated with payment system.",
    });
    // This is where payment integration will be added later
  };

  return (
    <Sheet open={isBasketOpen} onOpenChange={setIsBasketOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="hover:bg-white/50 backdrop-blur-sm relative">
          <ShoppingCart className="h-4 w-4" />
          {getTotalItems() > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {getTotalItems()}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Shopping Basket ({getTotalItems()} items)</SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto py-4">
            {items.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingCart className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Your basket is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm line-clamp-2">{item.name}</h4>
                      <p className="text-red-600 font-semibold">£{item.price.toFixed(2)}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8 p-0"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 p-0"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromBasket(item.id)}
                          className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {items.length > 0 && (
            <div className="border-t pt-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-lg font-bold text-red-600">£{getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="space-y-2">
                <Button 
                  onClick={handleCheckout}
                  className="w-full bg-red-600 hover:bg-red-700"
                  size="lg"
                >
                  Proceed to Checkout
                </Button>
                <Button 
                  variant="outline" 
                  onClick={clearBasket}
                  className="w-full"
                >
                  Clear Basket
                </Button>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default BasketSidebar;
