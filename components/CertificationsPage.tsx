

"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "./Navbar";

// Types
interface Certificate {
  title: string;
  pdf: string;
  logo: string;
}

// Inline SVG icons
const EyeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// Certificates data
const certificates: Certificate[] = [
  {
    title: "Halal Certificate",
    pdf: "/certificates/Halal-Certificate.pdf",
    logo: "/logo/logo-3.jpeg",
  },
  {
    title: "PSQCA License – SD Bottlers 2025",
    pdf: "/certificates/Psqca-Certificate.pdf",
    logo: "/logo/logo-4.jpeg",
  },
  {
    title: "ISO 9001 Certificate – SD Bottlers",
    pdf: "/certificates/SB - ISO 9001 Certificate - SD Bottlers.pdf",
    logo: "/logo/logo-2.png",
  },
  {
    title: "SFA License – SD Bottlers",
    pdf: "/certificates/Sfa-Certificate.pdf",
    logo: "/logo/logo-1.jpeg",
  },
];

// Simple Footer
const Footer: React.FC = () => (
  <footer className="bg-blue-900 text-white py-8 px-6">
    <div className="max-w-6xl mx-auto text-center">
      <p>© {new Date().getFullYear()} Asia Water. All rights reserved.</p>
    </div>
  </footer>
);

// Main component
const CertificationsPage: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [selected, setSelected] = useState<Certificate | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return certificates;
    return certificates.filter((c) => c.title.toLowerCase().includes(q));
  }, [query]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    if (selected) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
      setTimeout(() => closeBtnRef.current?.focus(), 0);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selected]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    img.style.display = "none";
    const fallback = img.nextElementSibling as HTMLElement | null;
    if (fallback) fallback.classList.remove("hidden");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <section
        id="certifications"
        className="pt-28 pb-16 bg-gradient-to-r from-blue-50 to-cyan-50 flex-1"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-6">
            Our Certifications & Approvals
          </h1>

          <p className="text-lg text-slate-700 text-center max-w-2xl mx-auto mb-8">
            Asia Water is approved by national and international organizations.
            Browse and view our official certifications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((cert) => (
              <div
                key={cert.title}
                className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow"
              >
                <div className="mb-4">
                  <img
                    src={cert.logo}
                    alt={`${cert.title} logo`}
                    className="w-16 h-16 object-contain rounded-md"
                    onError={handleImageError}
                  />
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 hidden items-center justify-center" />
                </div>

                <h3 className="text-lg font-bold text-blue-800 mb-4">
                  {cert.title}
                </h3>

                <button
                  onClick={() => setSelected(cert)}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-sky-600 text-white rounded-full shadow hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  aria-label={`View ${cert.title}`}
                >
                  <EyeIcon className="w-4 h-4" />
                  <span>View PDF</span>
                </button>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-10 text-center text-slate-600">
              No certificates match your search.
            </div>
          )}
        </div>
      </section>

      <Footer />

      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.title} PDF viewer`}
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl w-full max-w-5xl h-full max-h-screen flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <div>
                <h2 className="text-base font-semibold text-slate-800">
                  {selected.title}
                </h2>
                <p className="text-xs text-slate-500">
                  View only — downloads disabled
                </p>
              </div>
              <button
                ref={closeBtnRef}
                onClick={() => setSelected(null)}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
                aria-label="Close viewer"
              >
                <CloseIcon className="w-5 h-5" />
                <span className="text-sm">Close</span>
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <iframe
                title={`${selected.title} PDF`}
                src={selected.pdf}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificationsPage;
