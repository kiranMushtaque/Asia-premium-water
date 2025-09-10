
"use client";
import { useState, useEffect } from "react";

export default function WaterSplashPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 2000);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setIsVisible(false);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/40 backdrop-blur-sm">
      <div
        className={`relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-2xl
        p-4 sm:p-6 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl
        mx-auto border border-blue-100 overflow-hidden`}
      >
        {/* Water splash animation - positioned over the image */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {isAnimating && (
            <>
              <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-blue-400 rounded-full animate-splash-1"></div>
              <div className="absolute top-1/2 left-1/2 w-10 h-10 bg-blue-300 rounded-full animate-splash-2"></div>
              <div className="absolute top-1/2 left-1/2 w-14 h-14 bg-blue-200 rounded-full animate-splash-3"></div>
            </>
          )}
        </div>

        {/* Close button */}
        <button
          className="absolute top-2 right-2 sm:top-3 sm:right-3 text-xl text-gray-700 hover:text-red-500 z-30"
          onClick={handleClose}
          aria-label="Close"
        >
          &times;
        </button>

        {/* Image Container */}
        <div className="relative w-full h-56 sm:h-72 md:h-80 lg:h-96 mb-4 overflow-hidden rounded-xl z-10">
          {imageError ? (
            <div className="w-full h-full bg-gray-200 border-2 border-dashed flex items-center justify-center text-gray-500 text-xs sm:text-sm">
              Image: /images/popup.jpg
            </div>
          ) : (
            <img
              src="/images/popup.jpeg"
              alt="Welcome popup"
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          )}
        </div>

        {/* Text & Buttons */}
        <div className="relative z-30 text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-800 mb-2">
            Welcome to Asia Premium Water!
          </h2>
          <p className="text-sm md:text-base text-gray-700 mb-1">
            Experience pure, refreshing hydration
          </p>
          <p className="text-sm md:text-base text-gray-700 mb-4">
            Lab-tested for your safety and satisfaction
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-3 sm:mb-4">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition transform hover:scale-105 active:scale-95 text-sm sm:text-base shadow-md"
              onClick={() => {
                const section = document.getElementById("products");
                if (section) section.scrollIntoView({ behavior: "smooth" });
                handleClose();
              }}
            >
              Avail now
            </button>
            <button
              className="px-4 py-2 bg-white text-blue-600 border border-blue-300 rounded-lg hover:bg-blue-50 transition text-sm sm:text-base shadow-sm"
              onClick={handleClose}
            >
              Maybe Later
            </button>
          </div>
        </div>

        {/* Splash Animations */}
        <style jsx global>{`
          @keyframes splash-1 {
            0% {
              transform: translate(-50%, -50%) scale(0);
              opacity: 0.8;
            }
            100% {
              transform: translate(-50%, -50%) scale(15);
              opacity: 0;
            }
          }
          @keyframes splash-2 {
            0% {
              transform: translate(-50%, -50%) scale(0);
              opacity: 0.7;
            }
            100% {
              transform: translate(-50%, -50%) scale(12);
              opacity: 0;
            }
          }
          @keyframes splash-3 {
            0% {
              transform: translate(-50%, -50%) scale(0);
              opacity: 0.6;
            }
            100% {
              transform: translate(-50%, -50%) scale(10);
              opacity: 0;
            }
          }
          .animate-splash-1 {
            animation: splash-1 1.5s ease-out forwards;
          }
          .animate-splash-2 {
            animation: splash-2 1.8s ease-out 0.2s forwards;
          }
          .animate-splash-3 {
            animation: splash-3 2s ease-out 0.4s forwards;
          }
        `}</style>
      </div>
    </div>
  );
}





