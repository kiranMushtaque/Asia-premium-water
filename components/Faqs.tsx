
"use client";

import React, { useState } from "react";

const faqs = [
  {
    emoji: "🚚",
    question: "Do you deliver outside Karachi?",
    answer:
      "Currently, we only deliver in Karachi. We're working on expanding our delivery network to other cities soon.",
    // soft theme color (Tailwind)
    theme: "from-blue-50 via-white to-white",
    accent: "bg-blue-100",
  },
 
  {
    emoji: "📅",
    question: "Do you offer subscription plans?",
    answer:
      "Yes, we have monthly subscription plans with 10% off and free delivery. You can customize your delivery frequency and bottle quantity.",
    theme: "from-yellow-50 via-white to-white",
    accent: "bg-yellow-100",
  },
  {
    emoji: "💳",
    question: "What payment methods do you accept?",
    answer:
      "We accept cash on delivery, bank transfers, and all major credit cards. All transactions are secure and encrypted.",
    theme: "from-purple-50 via-white to-white",
    accent: "bg-purple-100",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            SUPPORT
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-blue-700 max-w-2xl mx-auto">
            Find answers to common questions about our products and services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`relative overflow-hidden rounded-xl transition-shadow duration-300 ${
                  isOpen
                    ? "shadow-xl ring-2 ring-blue-200"
                    : "shadow-md hover:shadow-lg"
                }`}
              >
                {/* left accent bar */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 ${faq.accent} rounded-l-xl`}
                  aria-hidden="true"
                />

                {/* card body */}
                <div
                  className={`pl-4 pr-6 py-4 bg-white transition-colors duration-300 ${
                    isOpen ? "bg-gradient-to-r " + faq.theme : "bg-white"
                  }`}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full text-left flex items-start justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                  >
                    <div className="flex items-center">
                      <span className="mr-4 text-2xl">{faq.emoji}</span>
                      <span className="font-semibold text-lg text-blue-900">
                        {faq.question}
                      </span>
                    </div>

                    <svg
                      className={`w-6 h-6 text-blue-500 transform transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  <div
                    id={`faq-panel-${i}`}
                    className={`mt-3 overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                      isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pt-2 pb-4 text-blue-800 bg-transparent">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-4 text-blue-500">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <p className="text-lg">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Faqs;
