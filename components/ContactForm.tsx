
"use client";
import React, { useState } from "react";
import {
  MessageSquare,
  Phone,
  Send,
  User,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const whatsappNumber = "923000628873";
    const fullMessage = `Hi Asia Water Team 👋\n\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Emulate network delay for loading state
    setTimeout(() => {
      setStatus("success");
      const newWindow = window.open(whatsappURL, "_blank");
      if (
        newWindow === null ||
        newWindow.closed ||
        typeof newWindow.closed === "undefined"
      ) {
        setStatus("error");
      }

      // Reset after a brief delay
      setTimeout(() => {
        setStatus("idle");
        setName("");
        setPhone("");
        setMessage("");
      }, 1500);
    }, 600);
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 py-16 sm:py-20 font-sans antialiased"
    >
      <div className="max-w-3xl mx-auto px-4">
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-emerald-400 sm:text-5xl">
            Asia Water: Get In Touch
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-xl mx-auto">
            Our expert team is ready to assist. Reach out via WhatsApp or a
            quick phone call for speedy service.
          </p>
        </header>

        <form
          onSubmit={handleWhatsAppSend}
          noValidate
          className="bg-slate-800/60 backdrop-blur-md p-8 rounded-2xl shadow-2xl ring-1 ring-slate-700 space-y-6 max-w-lg mx-auto"
        >
          <div className="relative">
            <User className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              placeholder="Your Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-slate-700/50 rounded-lg py-3 pl-10 pr-3 text-slate-100 placeholder-slate-500 border border-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200 outline-none"
            />
          </div>

          <div className="relative">
            <Phone className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-slate-500" />
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              required
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-slate-700/50 rounded-lg py-3 pl-10 pr-3 text-slate-100 placeholder-slate-500 border border-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200 outline-none"
            />
          </div>

          <div className="relative">
            <MessageSquare className="absolute top-4 left-3 h-5 w-5 text-slate-500" />
            <textarea
              id="message"
              name="message"
              required
              placeholder="How can we help?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full bg-slate-700/50 rounded-lg py-3 pl-10 pr-3 text-slate-100 placeholder-slate-500 border border-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200 outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status !== "idle"}
            className={`
              w-full py-3.5 flex items-center justify-center text-base font-semibold rounded-lg transition-all duration-300 ease-in-out border focus:outline-none focus:ring-4 focus:ring-opacity-50
              ${status === "loading" ? "bg-slate-600 cursor-not-allowed" : ""}
              ${
                status === "success"
                  ? "bg-green-600 border-green-600 focus:ring-green-500"
                  : ""
              }
              ${
                status === "error"
                  ? "bg-red-600 border-red-600 focus:ring-red-500"
                  : ""
              }
              ${
                status === "idle"
                  ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 border-green-600 hover:shadow-lg hover:-translate-y-0.5 focus:ring-green-500"
                  : ""
              }
            `}
          >
            {
              {
                idle: (
                  <>
                    <Send className="h-5 w-5 mr-2" /> Send on WhatsApp
                  </>
                ),
                loading: (
                  <div className="w-5 h-5 border-t-2 border-slate-100 rounded-full animate-spin" />
                ),
                success: (
                  <>
                    <CheckCircle className="h-5 w-5 mr-2" /> Sent Successfully
                  </>
                ),
                error: (
                  <>
                    <AlertCircle className="h-5 w-5 mr-2" /> Message Not Sent
                  </>
                ),
              }[status]
            }
          </button>
        </form>

        <div className="text-center mt-12">
          <p className="text-slate-400">Rather call us?</p>
          <a
            href="tel:03000628873"
            className="inline-flex items-center text-xl font-bold text-sky-400 hover:text-sky-300 transition duration-200"
          >
            <Phone className="h-5 w-5 mr-2" />
            0300-0628873
          </a>
        </div>
      </div>
    </section>
  );
}

