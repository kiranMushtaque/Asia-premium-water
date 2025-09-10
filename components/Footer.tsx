

"use client";
import { type FC } from "react";
import { QRCodeCanvas } from "qrcode.react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

interface Certification {
  title: string;
  logo: string;
}

const footerCertifications: Certification[] = [
  { title: "Halal Certificate", logo: "/certificates/halal.logo.png" },
  { title: "PSQCA License", logo: "/certificates/psqca_logo.jpg" },
  {
    title: "ISO 9001 Certificate",
    logo: "/certificates/SB - ISO 9001 Certificate - SD Bottlers.logo.png",
  },
  {
    title: "SFA License",
    logo: "/certificates/SFA LICENSE - SD BOTTLERS  (1).logo.png",
  },
];

const FooterComponent: FC = () => {
  const phoneDisplay = "0300-0628873";
  const phoneTel = "+923000628873";
  const whatsappLink = `https://wa.me/${phoneTel.replace(
    /\+/g,
    ""
  )}?text=I'd%20like%20to%20place%20an%20order.`;
  const instagramUrl =
    "https://www.instagram.com/asiapremiumwater?igsh=NnJ6cWVqejRtbml2";
  const facebookUrl = "https://www.facebook.com/share/1AwTsabE9V/";

  return (
    <footer className="w-full bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Logo & About */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-slate-200 rounded-lg p-3 shadow-lg">
                <img
                  src="/images/Asia-Website-logo.png"
                  alt="Asia Water"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Asia Premium Water
                </h2>
                <p className="text-sm text-slate-400 font-medium">
                  Quality Water Solutions
                </p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed max-w-md">
              Experience the pinnacle of hydration with our premium water
              delivery service. Pure, refreshing, and delivered right to your
              doorstep.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Same Day Delivery", "Eco-Friendly", "24/7 Support"].map(
                (tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white border-b border-slate-700 pb-2">
              Contact Information
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-800 transition-colors duration-200"
                >
                  <div className="bg-blue-600 p-2 rounded-md">
                    <FaMapMarkerAlt className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Address</p>
                    <p className="text-slate-400 text-sm">
                      Plot # G-15,malir industrial area,karachi
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${phoneTel}`}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-800 transition-colors duration-200"
                >
                  <div className="bg-green-600 p-2 rounded-md">
                    <FaPhoneAlt className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-slate-400 text-sm">{phoneDisplay}</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@asiapremiumwater.com"
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-800 transition-colors duration-200"
                >
                  <div className="bg-red-600 p-2 rounded-md">
                    <FaEnvelope className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-slate-400 text-sm">
                      info@asiapremiumwater.com
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* QR Code */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white border-b border-slate-700 pb-2">
              Quick Order
            </h3>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <QRCodeCanvas
                  value={whatsappLink}
                  size={120}
                  bgColor="#ffffff"
                  fgColor="#1e293b"
                  level="H"
                />
              </div>
              <p className="text-slate-700 text-sm font-medium mb-2">
                Scan to Order via WhatsApp
              </p>
              <div className="flex items-center justify-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-slate-600">Available 24/7</span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 pt-8 border-t border-slate-700">
          <h4 className="text-lg font-semibold text-white text-center mb-8">
            Our Certifications
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {footerCertifications.map((cert, idx) => (
              <div
                key={idx}
                className="w-20 h-20 bg-white rounded-lg flex items-center justify-center p-2 shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <img
                  src={cert.logo}
                  alt={cert.title}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex space-x-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 p-3 rounded-lg transition-colors duration-200"
            >
              <FaWhatsapp className="h-5 w-5 text-white" />
            </a>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-colors duration-200"
            >
              <FaFacebookF className="h-5 w-5 text-white" />
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 hover:bg-pink-700 p-3 rounded-lg transition-colors duration-200"
            >
              <FaInstagram className="h-5 w-5 text-white" />
            </a>
          </div>
          <p className="text-sm text-slate-400 text-center sm:text-right">
            © {new Date().getFullYear()} Asia Premium Water. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;






