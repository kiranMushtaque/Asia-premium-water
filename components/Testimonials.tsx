


"use client"

import React, { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    name: "Maria R.",
    city: "Karachi",
    text: "I tried Asia Water for the low price, I stayed for the freshness and reliable delivery service. The water quality is consistently high!",
    aviColor: "bg-gradient-to-br from-purple-400 to-pink-400",
    rating: 5,
    role: "Regular Customer",
    date: "2 weeks ago",
  },
  {
    name: "Asad U.",
    city: "Kiran",
    text: "Their 19-liter bottles are a lifesaver for our office. Always punctual and the team is incredibly courteous.",
    aviColor: "bg-gradient-to-br from-blue-400 to-cyan-400",
    rating: 5,
    role: "Office Manager",
    date: "1 month ago",
  },
  {
    name: "Bilal K.",
    city: "Karachi",
    text: "Good taste, clean water, and affordable rates. I recommend Asia Water to everyone looking for quality hydration.",
    aviColor: "bg-gradient-to-br from-indigo-400 to-purple-400",
    rating: 4,
    role: "Home User",
    date: "3 weeks ago",
  },
  {
    name: "Omer J.",
    city: "Karachi",
    text: "We switched to Asia Water a few months ago and it's been a fantastic decision. They've exceeded all our expectations.",
    aviColor: "bg-gradient-to-br from-yellow-400 to-orange-400",
    rating: 5,
    role: "Business Owner",
    date: "2 months ago",
  },
  {
    name: "Sana M.",
    city: "Karachi",
    text: "Even during the hottest days, Asia Water delivers on time without fail. Their commitment to service is unmatched.",
    aviColor: "bg-gradient-to-br from-green-400 to-teal-400",
    rating: 5,
    role: "Loyal Customer",
    date: "1 week ago",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const next = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning]);

  const prev = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning]);

  const goTo = (index: number) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  useEffect(() => {
    if (!isPaused) {
      const timer = setTimeout(next, 5000);
      return () => clearTimeout(timer);
    }
  }, [current, isPaused, next]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold ...">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real stories from real customers who trust Asia Water for their
            hydration needs
          </p>
        </div>

        {/* Main Slider Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Background Decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-purple-200/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl">
            <div
              className="flex transition-all duration-700 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4 py-8">
                  <div className="relative bg-white/80 backdrop-blur-xl p-8 sm:p-12 rounded-3xl shadow-2xl border border-white/50 min-h-[28rem] transform transition-all duration-500 hover:scale-105">
                    {/* Animated Quote Mark */}
                    <div className="absolute top-6 left-6 opacity-10">
                      <svg
                        className="w-16 h-16 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                      >
                        <path d="M10 8v8l-4 4v2h12v-14h-8zM22 0v8l-4 4v2h12v-14h-8z" />
                      </svg>
                    </div>

                    {/* Avatar and Info */}
                    <div className="flex flex-col items-center mb-8">
                      <div
                        className={`w-24 h-24 rounded-full ${item.aviColor} flex items-center justify-center shadow-xl transform transition-transform duration-300 hover:rotate-12`}
                      >
                        <span className="text-3xl font-bold text-white">
                          {item.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <h4 className="font-bold text-xl text-gray-800 mt-4">
                        {item.name}
                      </h4>
                      <p className="text-blue-600 font-medium">{item.role}</p>
                      <p className="text-gray-500 text-sm">
                        {item.city} • {item.date}
                      </p>

                      {/* Star Rating */}
                      <div className="flex gap-1 mt-3">
                        {renderStars(item.rating)}
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <div className="text-center relative z-10">
                      <p className="text-lg text-gray-700 leading-relaxed italic">
                        "{item.text}"
                      </p>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-tl-full opacity-50" />
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prev}
              className="absolute top-1/2 left-2 sm:left-6 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-blue-600 p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10 group"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6 group-hover:-translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute top-1/2 right-2 sm:right-6 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-blue-600 p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10 group"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-3"
                    : "bg-gray-300 hover:bg-gray-400 w-3 h-3"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 max-w-md mx-auto">
            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300"
                style={{
                  width: `${((current + 1) / testimonials.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-500">
              {current + 1} / {testimonials.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
