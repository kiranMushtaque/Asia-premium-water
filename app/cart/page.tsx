

"use client";

import Navbar from "components/Navbar";
import FooterComponent from "components/Footer";
import {
  useCart,
  CartItem as CartContextItem,
} from "../../context/CartContext";
import Image from "next/image";
import { useState, useRef } from "react";
import Select, { SingleValue } from "react-select";
import { toast } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

type Option = { value: string; label: string };

const karachiAreas: Option[] = [
  { value: "Clifton", label: "Clifton" },
  { value: "DHA", label: "DHA" },
  { value: "Gulshan-e-Iqbal", label: "Gulshan-e-Iqbal" },
  { value: "Gulistan-e-Johar", label: "Gulistan-e-Johar" },
  { value: "Korangi", label: "Korangi" },
  { value: "Landhi", label: "Landhi" },
  { value: "Malir", label: "Malir" },
  { value: "Nazimabad", label: "Nazimabad" },
  { value: "North Nazimabad", label: "North Nazimabad" },
  { value: "North Karachi", label: "North Karachi" },
  { value: "Orangi Town", label: "Orangi Town" },
  { value: "PECHS", label: "PECHS" },
  { value: "Saddar", label: "Saddar" },
  { value: "Shah Faisal Colony", label: "Shah Faisal Colony" },
  { value: "Surjani Town", label: "Surjani Town" },
  { value: "Lyari", label: "Lyari" },
  { value: "Baldia Town", label: "Baldia Town" },
  { value: "Federal B Area", label: "Federal B Area" },
  { value: "Gulberg", label: "Gulberg" },
  { value: "Kemari", label: "Kemari" },
  { value: "Manzoor Colony", label: "Manzoor Colony" },
  { value: "Metroville", label: "Metroville" },
  { value: "Qayyumabad", label: "Qayyumabad" },
  { value: "Mehmoodabad", label: "Mehmoodabad" },
  { value: "Soldier Bazaar", label: "Soldier Bazaar" },
  { value: "Karimabad", label: "Karimabad" },
  { value: "Ancholi", label: "Ancholi" },
  { value: "Shahrah-e-Faisal", label: "Shahrah-e-Faisal" },
  { value: "Liaquatabad", label: "Liaquatabad" },
  { value: "Garden East", label: "Garden East" },
  { value: "Garden West", label: "Garden West" },
  { value: "Hussainabad", label: "Hussainabad" },
  { value: "Paposh Nagar", label: "Paposh Nagar" },
  { value: "Buffer Zone", label: "Buffer Zone" },
  { value: "Naya Nazimabad", label: "Naya Nazimabad" },
  { value: "Kharadar", label: "Kharadar" },
  { value: "Mithadar", label: "Mithadar" },
  { value: "Jamshed Quarters", label: "Jamshed Quarters" },
  { value: "Gulshan-e-Maymar", label: "Gulshan-e-Maymar" },
  { value: "Scheme 33", label: "Scheme 33" },
  { value: "Safoora Chowk", label: "Safoora Chowk" },
  { value: "Johar Chowrangi", label: "Johar Chowrangi" },
  { value: "Abul Hassan Isphahani Road", label: "Abul Hassan Isphahani Road" },
  { value: "Shah Latif Town", label: "Shah Latif Town" },
  { value: "Bhittaiabad", label: "Bhittaiabad" },
  { value: "Malir Cantt", label: "Malir Cantt" },
  { value: "Gadap Town", label: "Gadap Town" },
  { value: "Memon Goth", label: "Memon Goth" },
  { value: "Steel Town", label: "Steel Town" },
  { value: "Bin Qasim Town", label: "Bin Qasim Town" },
  { value: "Port Qasim", label: "Port Qasim" },
  { value: "Other", label: "Other (Write manually)" },
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  area: Option | null;
  customArea: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

export default function CartPage() {
  const { cart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    area: null,
    customArea: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const refs = {
    name: useRef<HTMLInputElement>(null),
    phone: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    address: useRef<HTMLTextAreaElement>(null),
    area: useRef(null),
    customArea: useRef<HTMLInputElement>(null),
  };

  const handleChange = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) return;

    let validationErrors: Errors = {};

    if (!formData.name.trim()) validationErrors.name = "Name is required.";
    else if (!/[a-zA-Z]/.test(formData.name))
      validationErrors.name = "Name must contain at least one letter.";

    if (!formData.phone.trim()) validationErrors.phone = "Phone is required.";
    else if (!/^\d{11}$/.test(formData.phone))
      validationErrors.phone = "Phone must be 11 digits.";

    if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    )
      validationErrors.email = "Invalid email format.";

    if (!formData.address.trim())
      validationErrors.address = "Address is required.";
    else if (formData.address.length < 10)
      validationErrors.address = "Address must be at least 10 characters.";

    if (!formData.area) validationErrors.area = "Area is required.";
    if (formData.area?.value === "Other" && !formData.customArea.trim())
      validationErrors.customArea = "Please enter your area.";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErrorField = Object.keys(
        validationErrors
      )[0] as keyof FormData;
      refs[firstErrorField]?.current?.scrollIntoView({ behavior: "smooth" });
      toast.error("⚠️ Please fix the errors before placing order.");
      return;
    }

    setLoading(true);

    const selectedArea =
      formData.area?.value === "Other"
        ? formData.customArea
        : formData.area?.label;

    const orderDetails = cart
      .map(
        (item: CartContextItem) =>
          `• ${item.name} ${item.size} x${item.quantity} = Rs ${
            item.price * item.quantity
          }`
      )
      .join("\n");

    const message = `Hi Asia Water,\n\nI'd like to place the following order:\n\n${orderDetails}\n\nTotal: Rs ${getTotalPrice()}\n\nCustomer Info:\nName: ${
      formData.name
    }\nPhone: ${formData.phone}\nEmail: ${
      formData.email || "N/A"
    }\nArea: ${selectedArea}\nAddress: ${formData.address}\n\nThank you!`;

    const whatsappURL = `https://api.whatsapp.com/send?phone=923000628873&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");

    clearCart();
    setLoading(false);
    setShowThankYou(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      area: null,
      customArea: "",
    });
    setErrors({});
  };

  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto mt-28 p-6 bg-white shadow-lg rounded-2xl">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Your cart is empty.</p>
          </div>
        ) : (
          <>
            {/* Cart Items with Animations */}
            <AnimatePresence>
              {cart.map((item: CartContextItem) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between border p-4 rounded-lg shadow-sm mb-4"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded-lg object-cover"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                      <p className="text-gray-500">{item.size}</p>
                      <p className="text-gray-700 font-medium">
                        Rs {item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-4 sm:mt-0">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, Math.max(item.quantity - 1, 1))
                      }
                      className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                    >
                      +
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Form Section */}
            <div className="mt-10 border-t pt-6 space-y-4">
              <h2 className="text-xl font-bold mb-4">
                Total: Rs {getTotalPrice()}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  ref={refs.name}
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className={`p-2 border rounded ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <input
                  ref={refs.phone}
                  type="text"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className={`p-2 border rounded ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <input
                  ref={refs.email}
                  type="email"
                  placeholder="Email (optional)"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={`p-2 border rounded ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <Select
                  ref={refs.area}
                  options={karachiAreas}
                  value={formData.area}
                  onChange={(value) => handleChange("area", value)}
                  placeholder="Select Area"
                  className={`${errors.area ? "border-red-500" : ""}`}
                />
                {formData.area?.value === "Other" && (
                  <input
                    ref={refs.customArea}
                    type="text"
                    placeholder="Enter your area"
                    value={formData.customArea}
                    onChange={(e) => handleChange("customArea", e.target.value)}
                    className={`p-2 border rounded ${
                      errors.customArea ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                )}
                <textarea
                  ref={refs.address}
                  placeholder="Address"
                  value={formData.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                  className={`p-2 border rounded col-span-1 sm:col-span-2 ${
                    errors.address ? "border-red-500" : "border-gray-300"
                  }`}
                />
              </div>

              <div className="flex gap-4 mt-4">
                <button
                  onClick={clearCart}
                  className="px-6 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition"
                >
                  Clear Cart
                </button>
                <button
                  onClick={handleWhatsAppOrder}
                  disabled={loading}
                  className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition disabled:opacity-50"
                >
                  {loading ? "Processing..." : "Place Order via WhatsApp"}
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Thank You Modal */}
      {showThankYou && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md mx-auto text-center space-y-4">
            <h2 className="text-2xl font-bold">Thank You!</h2>
            <p>
              Your order has been sent successfully via WhatsApp. We will
              contact you soon.
            </p>
            <button
              onClick={() => setShowThankYou(false)}
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <FooterComponent />
    </>
  );
}
