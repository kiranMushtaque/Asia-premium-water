
import React from "react";
import {
  FileText,
  Award,
  CheckCircle,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

const certificates = [
  {
    title: "Halal Certificate",
    pdf: "/certificates/Halal-Certificate.pdf",
    icon: ShieldCheck,
    color: "from-emerald-400 to-emerald-600",
    description: "Certified Halal compliance",
  },
  {
    title: "PSQCA License – SD Bottlers 2025",
    pdf: "/certificates/Psqca-Certificate.pdf",
    icon: Award,
    color: "from-blue-400 to-blue-600",
    description: "Pakistan Standards Quality Control",
  },
  {
    title: "ISO 9001 Certificate – SD Bottlers",
    pdf: "/certificates/SB - ISO 9001 Certificate - SD Bottlers.pdf",
    icon: CheckCircle,
    color: "from-purple-400 to-purple-600",
    description: "International Quality Management",
  },
  {
    title: "SFA License – SD Bottlers",
    pdf: "/certificates/Sfa-Certificate.pdf",
    icon: FileText,
    color: "from-orange-400 to-orange-600",
    description: "Singapore Food Agency Approved",
  },
];

export default function CertificationsPreview() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-600 rounded-full mb-4">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Certified &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
              Approved
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our commitment to quality is backed by internationally recognized
            certifications and standards
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certificates.slice(0, 3).map((cert, i) => {
            const Icon = cert.icon;
            return (
              <a
                key={i}
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Card Content */}
                <div className="relative p-6">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${cert.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                    {cert.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 mb-4">
                    {cert.description}
                  </p>

                  {/* View Link */}
                  <div className="flex items-center text-sky-600 text-sm font-medium">
                    <span className="mr-2">View Certificate</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Decorative Corner */}
                <div
                  className={`absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br ${cert.color} rounded-full opacity-10`}
                />
              </a>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900 mb-1">4+</div>
            <div className="text-sm text-slate-600">Certifications</div>
          </div>
          <div className="text-center border-x border-slate-200">
            <div className="text-3xl font-bold text-slate-900 mb-1">100%</div>
            <div className="text-sm text-slate-600">Compliance</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900 mb-1">2025</div>
            <div className="text-sm text-slate-600">Valid Until</div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="/certifications"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-sky-600 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
          >
            <span className="mr-2">View All Certifications</span>
            <Award className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}