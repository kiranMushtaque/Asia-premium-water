"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface Product {
  id: number;
  name: string;
  size: string;
  image: string;
  price: number;
  originalPrice?: number;
  description: string;
  badge?: string;
  gradient: string;
}

export interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  updateQuantity: (id: number, quantity: number) => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
  handleWhatsAppOrder: () => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      setCart((prev) => prev.filter((item) => item.id !== id));
    } else {
      setCart((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
    }
  };

  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const getTotalItems = () =>
    cart.reduce((total, item) => total + item.quantity, 0);

  const handleWhatsAppOrder = () => {
    const phoneNumber = "+923000628873"; // Your WhatsApp number
    const orderDetails = cart
      .map((item) => `${item.name} (${item.size}) × ${item.quantity}`)
      .join(", ");
    const message = `Hello! I would like to order: ${orderDetails}. Total: Rs ${getTotalPrice()}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        getTotalPrice,
        getTotalItems,
        handleWhatsAppOrder,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
