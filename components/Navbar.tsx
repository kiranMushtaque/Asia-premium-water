


"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

type ShopKey = "retail" | "wholesale" | "institutions";

export default function Navbar() {
  const { getTotalItems } = useCart();
  const router = useRouter();
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopShopOpen, setDesktopShopOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const [openShopModal, setOpenShopModal] = useState<ShopKey | null>(null);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Products", id: "products" },
    { label: "Contact", id: "contact" },
    { label: "Certifications", id: "certifications" },
  ];

  const shopInfo: Record<ShopKey, { title: string; content: string }> = {
    retail: {
      title: "Retail Shops",
      content:
        "Keep your shelves stocked with Asia Water's certified pure drinking water. From small bottles to large packs, we supply all sizes to suit your customers' needs.",
    },
    wholesale: {
      title: "Wholesale Shops",
      content:
        "Maximize your sales with Asia Water's high-demand product range. Competitive bulk rates and reliable supply.",
    },
    institutions: {
      title: "Institutions",
      content:
        "From schools to offices, factories, and hospitals, Asia Water caters to hydration needs of large-scale organizations.",
    },
  };

  // ✅ Updated: Accept any clickable HTMLElement to fix TS error
  const handleNavClick = (id: string, e?: React.MouseEvent<HTMLElement>) => {
    e?.preventDefault();
    setMobileMenuOpen(false);
    setMobileShopOpen(false);
    setDesktopShopOpen(false);

    if (id === "certifications") {
      router.push("/certifications");
      return;
    }

    if (pathname === "/" || pathname === "/home") {
      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveSection("home");
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection(id);
      }
    } else {
      router.push(`/#${id}`);
    }
  };

  // Smooth scrolling on hash change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection(hash);
      }
    };

    if (pathname === "/") handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [pathname]);

  const openModal = (key: ShopKey) => {
    setOpenShopModal(key);
    setDesktopShopOpen(false);
    setMobileShopOpen(false);
    setMobileMenuOpen(false);
  };

  const closeModal = () => setOpenShopModal(null);

  const CartButton = () => (
    <button
      onClick={() => router.push("/cart")}
      className="relative flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white font-semibold rounded-full shadow-lg hover:bg-cyan-500 transition"
      aria-label="View Cart"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h12l-2-9M17 21a1 1 0 11-2 0 1 1 0 012 0zm-8 0a1 1 0 11-2 0 1 1 0 012 0z"
        />
      </svg>
      {getTotalItems() > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full animate-ping-slow">
          {getTotalItems()}
        </span>
      )}
    </button>
  );

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div
              className="flex items-center cursor-pointer"
              onClick={(e) => handleNavClick("home", e)}
            >
              <div className="relative w-40 h-20 sm:w-28 sm:h-28">
                <Image
                  src="/images/Asia-Website-logo.png"
                  alt="Asia Premium Water Logo"
                  fill
                  sizes="(max-width: 640px) 160px, 280px"
                  priority
                  style={{ objectFit: "contain" }}
                  className="logo-glow"
                />
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden xl:flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(item.id, e)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 text-base ${
                    activeSection === item.id
                      ? "text-cyan-700 bg-cyan-50 shadow-md border border-cyan-200"
                      : "text-gray-700 hover:text-cyan-700 hover:bg-cyan-50"
                  }`}
                >
                  {item.label}
                </a>
              ))}

              {/* Shops Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setDesktopShopOpen(true)}
                onMouseLeave={() => setDesktopShopOpen(false)}
              >
                <button
                  className="px-3 py-2 rounded-full font-medium text-gray-700 hover:text-cyan-700 hover:bg-cyan-50 flex items-center gap-1 transition-all duration-300 text-sm xl:text-base"
                  aria-haspopup="true"
                  aria-expanded={desktopShopOpen}
                >
                  Shops
                  <span
                    className={`inline-block transform transition-transform duration-300 ${
                      desktopShopOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {desktopShopOpen && (
                  <div className="absolute mt-2 w-48 bg-white shadow-md rounded-lg border border-gray-200 z-50 overflow-hidden">
                    {(["retail", "wholesale", "institutions"] as ShopKey[]).map(
                      (key) => (
                        <button
                          key={key}
                          onClick={() => openModal(key)}
                          className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 hover:text-cyan-700 transition-all duration-300 text-sm"
                        >
                          {shopInfo[key].title}
                        </button>
                      )
                    )}
                  </div>
                )}
              </div>

              {/* Cart Button */}
              <CartButton />
            </div>

            {/* Mobile Menu Button */}
            <div className="xl:hidden flex items-center gap-3">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-cyan-700 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? (
                  <HiOutlineX size={28} />
                ) : (
                  <HiOutlineMenu size={28} />
                )}
              </button>
              <CartButton />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white shadow-md border-t border-gray-200">
            <div className="flex flex-col space-y-4 p-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(item.id, e)}
                  className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-cyan-50 hover:text-cyan-700"
                >
                  {item.label}
                </a>
              ))}

              <div>
                <button
                  onClick={() => setMobileShopOpen((s) => !s)}
                  className="w-full text-left px-4 py-2 rounded-lg text-gray-700 hover:bg-cyan-50 hover:text-cyan-700 flex justify-between items-center"
                  aria-haspopup="true"
                  aria-expanded={mobileShopOpen}
                >
                  Shops
                  <span
                    className={`inline-block transform transition-transform duration-300 ${
                      mobileShopOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {mobileShopOpen && (
                  <div className="mt-1 ml-2 space-y-1 animate-fadeIn">
                    {(["retail", "wholesale", "institutions"] as ShopKey[]).map(
                      (key) => (
                        <button
                          key={key}
                          onClick={() => openModal(key)}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-700 rounded-lg transition"
                        >
                          {shopInfo[key].title}
                        </button>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Shops Modal */}
      {openShopModal && (
        <div
          className="fixed left-0 right-0 bottom-0 top-32 bg-black/70 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 sm:p-8 rounded-2xl w-full max-w-md sm:max-w-lg text-gray-900 max-h-[90vh] overflow-y-auto flex flex-col justify-center"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="shop-modal-title"
          >
            <h2
              id="shop-modal-title"
              className="text-2xl sm:text-3xl font-extrabold mb-4 sm:mb-6 text-center"
            >
              {shopInfo[openShopModal].title}
            </h2>
            <p className="mb-6 sm:mb-8 text-base sm:text-lg text-center">
              {shopInfo[openShopModal].content}
            </p>
            <button
              onClick={closeModal}
              className="mx-auto px-4 sm:px-6 py-2 sm:py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-2xl text-base sm:text-lg font-semibold transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .logo-glow {
          filter: drop-shadow(0 0 4px rgba(255, 255, 255, 1))
            drop-shadow(0 0 8px rgba(255, 255, 255, 0.9))
            drop-shadow(0 0 14px rgba(34, 211, 238, 1))
            drop-shadow(0 0 20px rgba(14, 165, 233, 0.9));
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(-5px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
        @keyframes pingSlow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%,
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }
        .animate-ping-slow {
          animation: pingSlow 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </>
  );
}
