import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function PlansIndexPage() {
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

      <main className="pt-24 min-h-screen bg-gray-50 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-gray-900 mb-4">
              Our <span className="text-[#1142D4]">Programs</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your path. Each route has its own programs and next steps.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <Link
              href="/plans/get-fit"
              className="group bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-xl hover:border-[#1142D4]/40 transition"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-[#1142D4] mb-3">
                Path 1
              </p>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 mb-3 group-hover:text-[#1142D4] transition">
                I Want to Get Fit
              </h2>
              <p className="text-gray-600 mb-6">
                Kickstarter, Foundation, DIY, and Hybrid coaching for busy professionals.
              </p>
              <span className="inline-flex items-center gap-2 font-bold text-[#1142D4]">
                View programs <FaArrowRight />
              </span>
            </Link>

            <Link
              href="/plans/elite-coach"
              className="group bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-xl hover:border-[#67bc2a]/50 transition"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-[#67bc2a] mb-3">
                Path 2
              </p>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 mb-3 group-hover:text-[#67bc2a] transition">
                Become an Elite Coach
              </h2>
              <p className="text-gray-600 mb-6">
                Fitness Coach Launchpad for trainers ready to build skill, systems, and premium rates.
              </p>
              <span className="inline-flex items-center gap-2 font-bold text-[#67bc2a]">
                View programs <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
