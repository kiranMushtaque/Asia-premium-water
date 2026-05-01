

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
      setTimeout(() => setIsAnimating(false), 2200);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setIsVisible(false);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md mx-auto overflow-hidden border border-gray-100">
        {/* Splash overlay */}
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-2xl">
          {isAnimating && (
            <>
              <div className="absolute top-1/3 left-1/2 w-5 h-5 bg-blue-400/60 rounded-full animate-splash-1" />
              <div className="absolute top-1/3 left-1/2 w-8 h-8 bg-blue-300/50 rounded-full animate-splash-2" />
              <div className="absolute top-1/3 left-1/2 w-11 h-11 bg-blue-200/40 rounded-full animate-splash-3" />
            </>
          )}
        </div>

        {/* Close button */}
        <button
          onClick={handleClose}
          aria-label="Close"
          className="absolute top-2.5 right-3 z-30 bg-white/80 hover:bg-white text-gray-600 hover:text-red-500 rounded-full w-7 h-7 flex items-center justify-center text-lg transition"
        >
          &times;
        </button>

        {/* Image */}
        <div className="relative w-full z-10">
          <img
            src="/images/popup.jpeg"
            alt="Welcome popup"
            className="w-full h-auto block"
            onError={() => setImageError(true)}
          />
        </div>

        {/* Text & Buttons */}
        <div className="relative z-30 text-center px-6 pt-5 pb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-1.5">
            Welcome to Asia Premium Water!
          </h2>
          <p className="text-sm text-gray-500 mb-0.5">
            Experience pure, refreshing hydration
          </p>
          <p className="text-sm text-gray-500 mb-5">
            Lab-tested for your safety and satisfaction
          </p>

          <div className="flex justify-center gap-3 flex-wrap">
            <button
              onClick={() => {
                document
                  .getElementById("products")
                  ?.scrollIntoView({ behavior: "smooth" });
                handleClose();
              }}
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm transition"
            >
              Avail now
            </button>
            <button
              onClick={handleClose}
              className="px-5 py-2 border border-blue-400 text-blue-600 hover:bg-blue-50 rounded-xl text-sm transition"
            >
              Maybe Later
            </button>
          </div>
        </div>

        <style jsx global>{`
          @keyframes splash-1 {
            0% {
              transform: translate(-50%, -50%) scale(0);
              opacity: 0.6;
            }
            100% {
              transform: translate(-50%, -50%) scale(20);
              opacity: 0;
            }
          }
          @keyframes splash-2 {
            0% {
              transform: translate(-50%, -50%) scale(0);
              opacity: 0.5;
            }
            100% {
              transform: translate(-50%, -50%) scale(16);
              opacity: 0;
            }
          }
          @keyframes splash-3 {
            0% {
              transform: translate(-50%, -50%) scale(0);
              opacity: 0.4;
            }
            100% {
              transform: translate(-50%, -50%) scale(13);
              opacity: 0;
            }
          }
          .animate-splash-1 {
            animation: splash-1 1.6s ease-out forwards;
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