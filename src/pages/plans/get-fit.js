import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import ProgramsList from "@/components/plans/ProgramsList";
import { getFitPlans } from "@/data/plans";

export default function GetFitProgramsPage() {
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
          >
            <ProgramsList
              plans={getFitPlans}
              title="I Want to"
              highlight="Get Fit"
              subtitle="Practical programs for busy professionals who want lasting results without extreme lifestyles."
            />
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
