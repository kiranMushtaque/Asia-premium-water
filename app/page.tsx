

import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import ProductsPage from "@/components/Product";
import Hero from "@/components/Hero";
import AboutPage from "@/components/About";
import LabTested from "@/components/LabTested";
import TestimonialSlider from "@/components/Testimonials";
import AdsSection from "@/components/AddsSection";
import ContactForm from "@/components/ContactForm";
import Faqs from "@/components/Faqs";
import FooterComponent from "@/components/Footer";
import WaterSplashPopup from "@/components/WaterSplashPopup";
import CertificationsPreview from "@/components/CertificationsPreview";
import CertificationsPage from "@/components/CertificationsPage";

export default function Page() {
  return (
    <main className="min-h-screen space-y-10">
      <Navbar />
      <Banner />
      <ProductsPage />
      <Hero />
      <AboutPage />
      <CertificationsPreview />
      <LabTested />
      <TestimonialSlider />
      <AdsSection />
      <ContactForm />
      <Faqs />
      <FooterComponent />
      <WaterSplashPopup />
    </main>
  );
}
