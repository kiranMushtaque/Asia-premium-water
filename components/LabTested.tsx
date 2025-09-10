
import React, { JSX } from "react";
import Image from "next/image";

export default function LabTested(): JSX.Element {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
      <div className="max-w-screen-2xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-900">
          Lab-Tested Water for Your Safety
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="overflow-hidden rounded-3xl shadow-2xl border-4 border-blue-300">
              <Image
                src="/images/labpic.jpg"
                alt="Lab test report"
                width={800}
                height={600}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                Quality You Can Trust
              </h3>
              <p className="text-lg mb-4">
                At Asia Water, we take your health seriously. Our water
                undergoes rigorous testing in state of the art laboratories to
                ensure it meets the highest purity standards.
              </p>

              <p className="text-lg mb-4 font-semibold">
                Our purification & testing process includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
                <li>✅ Triple-layer filtration</li>
                <li>✅ UV treatment</li>
                <li>✅ Mineral balancing</li>
                <li>✅ Comprehensive lab testing for safety</li>
              </ul>

              <p className="text-lg mb-4">
                We test for bacterial contamination, pH balance and mineral
                content, chemical pollutants, taste and odor quality — ensuring
                every bottle meets our strict safety criteria.
              </p>

              <div className="mt-8 flex items-center">
                <div className="bg-blue-100 p-4 rounded-full mr-4">
                  <Image
                    src="/images/certificate.jpg"
                    alt="Certificate"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-blue-800">Certified Pure</h4>
                  <p>
                    Meets national and international safety standards —
                    lab-tested for your peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

