
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface BasketItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  category: string;
}

interface BasketContextType {
  items: BasketItem[];
  addToBasket: (product: Omit<BasketItem, 'quantity'>) => void;
  removeFromBasket: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearBasket: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  isBasketOpen: boolean;
  setIsBasketOpen: (open: boolean) => void;
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error('useBasket must be used within a BasketProvider');
  }
  return context;
};

export const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<BasketItem[]>([]);
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  const addToBasket = (product: Omit<BasketItem, 'quantity'>) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === product.id);
      if (existingItem) {
        return currentItems.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...currentItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromBasket = (id: number) => {
    setItems(currentItems => currentItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromBasket(id);
      return;
    }
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearBasket = () => {
    setItems([]);
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <BasketContext.Provider value={{
      items,
      addToBasket,
      removeFromBasket,
      updateQuantity,
      clearBasket,
      getTotalItems,
      getTotalPrice,
      isBasketOpen,
      setIsBasketOpen
    }}>
      {children}
    </BasketContext.Provider>
  );
};
