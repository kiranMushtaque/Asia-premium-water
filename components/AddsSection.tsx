
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import add1 from "../public/images/add-1.jpeg";
import add5 from "../public/images/add-5.jpg";
import add2 from "../public/images/add-2.jpg";
import add3 from "../public/images/add-3.jpg";
import add4 from "../public/images/add-4.jpg";

const AdsSection: React.FC = () => {
  // HERO SLIDER images
  const heroAds = [add1, add5];
  const [currentHero, setCurrentHero] = useState(0);

  // Automatic image change every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroAds.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroAds.length]);

  const otherAds = [
    { id: 2, image: add2, alt: "Water treatment system ad" },
    { id: 3, image: add3, alt: "Purification plant advertisement" },
    { id: 4, image: add4, alt: "Clean water supply ad" },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden py-8">
      <div className="container mx-auto px-4 relative z-10">
        {/* HERO without any animation */}
        <div
          className="relative w-full rounded-xl overflow-hidden shadow-2xl mx-auto"
          style={{
            maxWidth: "1200px",
            height: "auto",
            aspectRatio: "21 / 9",
            boxShadow: "0 30px 80px rgba(0,0,0,0.18)",
          }}
        >
          <Image
            src={heroAds[currentHero]}
            alt="Featured Asia Water Project Advertisement"
            fill
            priority
            sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 100vw,
                   1200px"
            className="object-cover"
            draggable={false}
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/20 pointer-events-none" />
        </div>

        {/* Grid for other ads (tilt effect can stay if needed) */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherAds.map((ad) => (
            <div
              key={ad.id}
              className="relative rounded-lg overflow-hidden shadow-lg h-96"
            >
              <Image
                src={ad.image}
                alt={ad.alt}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       33vw"
                className="object-contain"
                draggable={false}
              />

              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdsSection;

