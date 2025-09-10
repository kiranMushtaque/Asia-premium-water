


"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import banner1 from "../public/images/banner-1.jpeg";
import banner2 from "../public/images/banner-2.png";
import banner3 from "../public/images/banner-3.jpeg";
import banner4 from "../public/images/banner-4.jpeg";
import banner5 from "../public/images/banner-5.png";
import banner6 from "../public/images/banner-6.jpeg";
import banner7 from "../public/images/banner-7.png";

const banners = [banner1, banner2, banner3, banner4, banner5, banner6, banner7];

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index: number) => setActiveSlide(index);
  const prevSlide = () =>
    setActiveSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % banners.length);

  const handleTouchStart = (e: React.TouchEvent) =>
    setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) =>
    setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
  };

  return (
    <section
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Wrapper */}
      <div className="relative w-full mt-20 flex justify-center overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {banners.map((banner, idx) => (
            <div key={idx} className="flex-shrink-0 w-full flex justify-center">
              <div className="relative w-full max-w-full h-auto">
                <Image
                  src={banner}
                  alt={`Banner ${idx + 1}`}
                  width={banner.width} // original width
                  height={banner.height} // original height
                  className="object-contain w-full h-auto"
                  priority
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev & Next Buttons */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute top-1/2 left-3 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 
          flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60
          transition z-30 text-xl sm:text-2xl"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute top-1/2 right-3 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 
          flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60
          transition z-30 text-xl sm:text-2xl"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {banners.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full ${
              activeSlide === idx
                ? "w-8 sm:w-10 bg-white"
                : "w-3 sm:w-4 bg-white/50 hover:bg-white/80"
            } h-3 sm:h-4`}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;


