import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyPlansFail from "@/components/WhyPlansFail";
import BodyReset from "@/components/BodyReset";
import TransformationSection from "@/components/TransformationSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import TestimonialsSection from "@/components/TestimonialsSection";
import MediaSection from "@/components/gallery/MediaSection";
import { ValorClassicBanner } from "@/components/founder/AchievementsSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Navbar />

      <a
        href="https://wa.me/919923646881?text=Hey%2C%20I%27m%20interested%20in%20your%20coaching%20programs%21"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-12 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>

      <main className="pt-16">
        <Hero />
        <WhyPlansFail />
        <TestimonialsSection />
        <BodyReset />
        <TransformationSection />
        <AboutSection />
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1142D4] mb-3">
                National Stage
              </p>
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900">
                Valor Classic <span className="text-[#67bc2a]">Judge</span>
              </h2>
            </div>
            <ValorClassicBanner />
          </div>
        </section>
        <MediaSection />
        <ServicesSection />
        <Footer />
      </main>
    </>
  );
}
