// types/cart.ts

export interface CartItem {
  id: number;
  name: string;
  size: string;
  price: number;
  image: string;
  quantity: number;
  description?: string;
  gradient?: string;
}
