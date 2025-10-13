

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useCart, Product as ContextProduct } from "../context/CartContext";

type Product = {
  id: number;
  name: string;
  size: string;
  image: string;
  price: number;
  originalPrice?: number;
  description: string;
  badge?: string;
  gradient: string;
  comingSoon?: boolean;
};

// All products
const products: Product[] = [
  {
    id: 1,
    name: "Asia Water",
    size: "250ml",
    image: "/images/250-ml.png",
    price: 360,
    originalPrice: 400,
    description: "Per carton (24 bottles) — Promo price",
    badge: "Save Rs 40",
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    id: 2,
    name: "Asia Water",
    size: "500ml",
    image: "/images/500-ml.png",
    price: 360,
    originalPrice: 400,
    description: "Per carton (24 bottles) — Promo price",
    badge: "Save Rs 40",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    id: 3,
    name: "Asia Water",
    size: "1.5 Liter",
    image: "/images/1.5-litre.png",
    price: 360,
    originalPrice: 400,
    description: "Per carton (12 bottles) — Promo price",
    badge: "Save Rs 40",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    id: 4,
    name: "Asia Water",
    size: "6 Liters",
    image: "/images/6-litre.png",
    price: 130,
    originalPrice: 170,
    description: "2-bottle value pack — Promo price",
    badge: "Save Rs 40",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    id: 5,
    name: "Asia Water",
    size: "19 Liter",
    image: "/images/Asia 19 litre bottle.png",
    price: 150,
    originalPrice: 170,
    description: "Commercial dispenser bottle — Coming soon",
    badge: "New",
    gradient: "from-purple-500 to-pink-500",
    comingSoon: true,
  },
];

const wowOffer: Product = {
  id: 999,
  name: "WOW OFFER · 12+1",
  size: "12 Cartons (500ml) + Get 1 Carton FREE",
  image: "/images/wowpop.jpeg",
  price: 12 * 360,
  description:
    "Buy 12 cartons (500ml each) and get 1 FREE. Limited‑time bulk deal.",
  badge: "WOW OFFER",
  gradient: "from-orange-400 to-red-500",
};


export default function ProductsPage() {
  const { addToCart } = useCart();
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [notifyOpen, setNotifyOpen] = useState<Record<number, boolean>>({});
  const [notifyEmail, setNotifyEmail] = useState<Record<number, string>>({});

  const handleAddToCart = (product: Product) => {
    if (product.comingSoon) {
      setToastMessage("This item is coming soon — stay tuned!");
      setShowToast(true);
      return;
    }
    addToCart(product as ContextProduct);
    setToastMessage(`${product.size} added to cart!`);
    setShowToast(true);
  };

  const handleAddWowOfferToCart = () => {
    addToCart(wowOffer as ContextProduct);
    setToastMessage("WOW OFFER added to cart!");
    setShowToast(true);
  };

  const handleNotifySubmit = (productId: number) => {
    const email = (notifyEmail[productId] || "").trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValid) {
      setToastMessage("Enter a valid email to get notified.");
      setShowToast(true);
      return;
    }
    setToastMessage("Thanks! We'll notify you when it's available.");
    setShowToast(true);
    setNotifyOpen((prev) => ({ ...prev, [productId]: false }));
    setNotifyEmail((prev) => ({ ...prev, [productId]: "" }));
  };

  useEffect(() => {
    if (showToast) {
      const t = setTimeout(() => setShowToast(false), 2600);
      return () => clearTimeout(t);
    }
  }, [showToast]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
     
      {/* WOW OFFER */}
      <motion.div className="max-w-6xl mx-auto mb-12 sm:mb-16 px-4 pt-8">
        <div className="relative bg-gradient-to-br from-orange-400 via-yellow-400 to-red-400 rounded-3xl p-1">
          <div className="bg-white rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
            <div className="flex-1 text-center lg:text-left space-y-3">
              <motion.h2
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500"
              >
                WOW OFFER!
              </motion.h2>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">
                Buy 12 cartons, get 1 FREE
              </p>
              <p className="text-lg sm:text-xl font-semibold text-orange-600">
                500ml
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                Limited‑time bulk deal. While stocks last.
              </p>
            </div>
            <div className="relative w-full sm:w-80 lg:w-96 flex-shrink-0">
              {imageErrors[wowOffer.id] ? (
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 sm:h-56" />
              ) : (
                <Image
                  src={wowOffer.image}
                  alt={wowOffer.name}
                  width={384}
                  height={256}
                  className="rounded-2xl shadow-xl border-4 border-white w-full h-auto object-contain"
                  onError={() =>
                    setImageErrors((p) => ({ ...p, [wowOffer.id]: true }))
                  }
                />
              )}
            </div>
            <motion.button
              onClick={handleAddWowOfferToCart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-2xl shadow-lg"
            >
              🛒 Add WOW OFFER
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4" id="products">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              className="relative bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden"
            >
              {product.badge && (
                <span
                  className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${product.gradient} text-white text-xs font-bold rounded-full z-10`}
                >
                  {product.badge}
                </span>
              )}
              <div className="p-5 sm:p-6">
                <div className="relative h-56 sm:h-64 flex items-center justify-center mb-4 sm:mb-6">
                  <Image
                    src={product.image}
                    alt={`${product.name} ${product.size}`}
                    width={400}
                    height={500}
                    className="object-contain relative z-10 w-full h-full"
                    style={{
                      filter:
                        hoveredProduct === product.id
                          ? "brightness(1.1) contrast(1.05)"
                          : "brightness(1)",
                    }}
                  />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900">
                  {product.name}
                </h3>
                <p className="text-lg sm:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  {product.size}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  {product.description}
                </p>
                <div className="flex flex-col items-start mt-3 gap-2">
                  <div className="text-base sm:text-lg font-bold text-gray-900">
                    Rs {product.price}
                    {product.originalPrice && (
                      <span className="text-xs sm:text-sm text-gray-500 line-through ml-2">
                        Rs {product.originalPrice}
                      </span>
                    )}
                  </div>

                  {product.comingSoon ? (
                    <div className="w-full">
                      <div className="px-4 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-gray-400 to-gray-500 shadow-md text-center select-none">
                        Coming Soon
                      </div>
                      <button
                        onClick={() =>
                          setNotifyOpen((prev) => ({
                            ...prev,
                            [product.id]: !prev[product.id],
                          }))
                        }
                        className="mt-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
                        aria-expanded={!!notifyOpen[product.id]}
                      >
                        Notify me
                      </button>

                      <AnimatePresence initial={false}>
                        {notifyOpen[product.id] && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-2"
                          >
                            <div className="flex items-center gap-2">
                              <input
                                type="email"
                                placeholder="you@example.com"
                                value={notifyEmail[product.id] || ""}
                                onChange={(e) =>
                                  setNotifyEmail((prev) => ({
                                    ...prev,
                                    [product.id]: e.target.value,
                                  }))
                                }
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                              <button
                                onClick={() => handleNotifySubmit(product.id)}
                                className={`px-3 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r ${product.gradient} shadow`}
                              >
                                Send
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleAddToCart(product)}
                      className={`px-4 py-3 rounded-xl font-semibold text-white bg-gradient-to-r ${product.gradient} shadow-md hover:shadow-lg w-full text-center`}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
          >
            <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-3 rounded-2xl shadow-2xl text-sm font-semibold">
              {toastMessage}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
