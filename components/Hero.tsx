




"use client";
import React, { useEffect, useRef, useState } from "react";

interface Counters {
  customers: number;
  bottles: number;
  years: number;
}
interface Feature {
  icon: string;
  title: string;
  desc: string;
  color: string;
  bgColor: string;
  highlight: string;
}
interface Certification {
  title: string;
  description: string;
  logo: string;
  color: string;
  bgColor: string;
}

const HERO_TEXTS: string[] = ["Pure.", "Healthy.", "Affordable."];

export default function AsiaWaterLanding(): React.JSX.Element {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredCert, setHoveredCert] = useState<number | null>(null);
  const [currentHeroIndex, setCurrentHeroIndex] = useState<number>(0);
  const [counters, setCounters] = useState<Counters>({
    customers: 0,
    bottles: 0,
    years: 0,
  });

  const countersRef = useRef<HTMLDivElement | null>(null);
  const countersStarted = useRef<boolean>(false);

  // Hero text rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((p) => (p + 1) % HERO_TEXTS.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  // Counter animation on scroll
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setCounters({ customers: 10000, bottles: 50000, years: 30 });
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !countersStarted.current) {
            countersStarted.current = true;
            startCounters();
            obs.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    const elem = countersRef.current;
    if (elem) obs.observe(elem);
    return () => obs.disconnect();
  }, []);

  function startCounters() {
    const targets: Counters = {
      customers: 10000,
      bottles: 50000,
      years: 30,
    };
    const duration = 1600;
    const start = performance.now();
    function frame(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      setCounters({
        customers: Math.floor(targets.customers * progress),
        bottles: Math.floor(targets.bottles * progress),
        years: Math.floor(targets.years * progress),
      });
      if (progress < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features: Feature[] = [
    {
      icon: "🚚",
      title: "Delivery — Karachi",
      desc: "Delivery available in Karachi",
      color: "from-sky-400 to-blue-500",
      bgColor: "bg-sky-50",
      highlight: "Delivery available in Karachi (کراچی میں دستیاب ہے)",
    },
    {
      icon: "🧪",
      title: "Lab-Tested Safe Water",
      desc: "Water undergoes rigorous lab testing — bacterial, chemical, and mineral checks performed.",
      color: "from-emerald-400 to-teal-500",
      bgColor: "bg-emerald-50",
      highlight: "Lab-tested & certified",
    },
    {
      icon: "💸",
      title: "Most Affordable",
      desc: "Affordable drinking water in Pakistan — competitive pricing, bulk order discounts and low per-carton rates.",
      color: "from-violet-400 to-purple-500",
      bgColor: "bg-violet-50",
      highlight: "Starting at Per carton price 360",
    },
  ];

  const certifications: Certification[] = [
    {
      title: "HALAL Certification",
      description: "Certified for quality and purity standards",
      logo: "/logo/logo-3.jpeg",
      color: "from-blue-400 to-indigo-500",
      bgColor: "bg-blue-50",
    },
    {
      title: "PSQCA Certified",
      description: "Pakistan Standards and Quality Control Authority",
      logo: "/logo/logo-4.jpeg",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50",
    },
    {
      title: "ISO 9001 Certified",
      description: "International quality management standard",
      logo: "/logo/logo-2.png",
      color: "from-purple-400 to-violet-500",
      bgColor: "bg-purple-50",
    },
    {
      title: "SFA Licensed",
      description: "SFA Sindh Food Authority",
      logo: "/logo/logo-1.jpeg",
      color: "from-red-400 to-rose-500",
      bgColor: "bg-red-50",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 antialiased relative">
      {/* Decorative gradients behind */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-sky-300/30 rounded-full blur-3xl animate-animate-fade-in" />
        <div className="absolute top-60 right-0 w-72 h-72 bg-emerald-300/30 rounded-full blur-3xl animate-animate-fade-in animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-violet-300/30 rounded-full blur-3xl animate-animate-fade-in animation-delay-4000" />
      </div>

      <section className="relative px-6 py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-sky-100 to-cyan-100 rounded-full shadow-sm">
              <span className="text-sky-500 animate-pulse">💧</span>
              <span className="text-sky-900 font-medium text-sm sm:text-base">
                Pakistan's Trusted Water Brand
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900">
              Purity Within Reach — Asia Water
            </h1>
            <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-600 leading-relaxed">
              Pakistan’s choice for{" "}
              <strong>trusted, economical hydration,</strong>
              <br className="hidden sm:block" />
              <span className="text-sky-600 font-semibold">
                affordable & pure drinking water for everyone
              </span>
              .
            </p>

            <div className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-600 tracking-tight">
              {HERO_TEXTS[currentHeroIndex]}
            </div>
          </div>

          {/* Counters Section */}
          <div
            ref={countersRef}
            className="mt-12 text-center"
            aria-live="polite"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div>
                <div className="text-4xl font-semibold text-sky-600">
                  {counters.customers.toLocaleString()}+
                </div>
                <div className="text-slate-500 text-sm">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-semibold text-emerald-600">
                  {counters.bottles.toLocaleString()}+
                </div>
                <div className="text-slate-500 text-sm">Bottles Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-semibold text-violet-600">
                  {counters.years}+
                </div>
                <div className="text-slate-500 text-sm">Years Experience</div>
              </div>
            </div>
            <p className="mt-6 text-slate-600">
              Powered by <strong className="text-sky-700">30 years</strong> of
              water experience — Asia Water is growing fast.
            </p>
            <p className="text-sm text-slate-500 mt-1">
              Thanks to your trust and support!
            </p>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 justify-items-center">
            {features.map((item, i) => (
              <article
                key={i}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative overflow-hidden bg-white rounded-3xl border-2 border-transparent shadow-md transition-all duration-500 transform hover:-translate-y-1 hover:shadow-xl cursor-pointer w-full sm:w-80 lg:w-96`}
                tabIndex={0}
                aria-labelledby={`feature-${i}`}
              >
                <div className={`relative p-8 z-10 text-center`}>
                  {/* Icon */}
                  <div
                    className={`${item.bgColor} w-24 h-24 mx-auto mb-6 rounded-3xl flex items-center justify-center shadow-md`}
                  >
                    <span className="text-5xl select-none" aria-hidden>
                      {item.icon}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    id={`feature-${i}`}
                    className="text-2xl font-semibold text-slate-900 mb-3"
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>

                  {/* Highlight */}
                  <div className="mt-4 bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                    {item.highlight}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Certifications Section */}
          <div className="mt-24 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Certifications & Licenses
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-10">
              We maintain the highest standards of quality and safety, as
              recognized by these certifications
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredCert(index)}
                  onMouseLeave={() => setHoveredCert(null)}
                  className={`bg-white rounded-2xl p-6 shadow-md transition-all duration-300 transform ${
                    hoveredCert === index ? "-translate-y-2 shadow-lg" : ""
                  } border border-gray-100 flex flex-col items-center w-full sm:w-64 lg:w-72`}
                >
                  {/* Logo/Image */}
                  <div className="mb-4 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                    <img
                      src={cert.logo}
                      alt={cert.title}
                      className="w-full h-full object-contain rounded-lg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                  </div>

                  <h3 className="font-semibold text-lg text-slate-800 mb-2 text-center">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-slate-600 text-center">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-24 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-2xl p-10 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience Pure Water?
            </h2>
            <p className="text-sky-100 text-lg max-w-2xl mx-auto mb-8">
              Join thousands of satisfied customers who trust Asia Water for
              their daily hydration needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToProducts}
                className="bg-white text-sky-600 hover:bg-slate-100 px-8 py-3 rounded-lg font-semibold transition-colors shadow-md"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
