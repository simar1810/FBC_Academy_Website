// src/components/AboutSection.js
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="bg-gray-50 py-20 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto bg-white md:rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-8 p-6 md:p-12 border border-gray-100"
      >
        
        {/* Left: Image + Stats */}
        <div className="flex-1 relative w-full group overflow-hidden rounded-xl">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            src="/images/Client/client_2.jpg"
            alt="Ankush S. Bhaskar"
            className="w-full h-[400px] md:h-[520px] object-cover object-top rounded-xl shadow-lg"
          />

          {/* Small Stats Box */}
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-gray-800 rounded-lg px-6 py-3 shadow-xl text-center border border-gray-200">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">Experience</p>
            <p className="text-xl font-bold text-[#1142D4]">12+ Years</p>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="flex-1 flex flex-col justify-center space-y-6 md:pl-8 mt-3">
          <h2 className="text-3xl sm:text-5xl font-bold font-playfair leading-tight text-gray-900">
            
            One Mission: <span className="text-[#67bc2a]">Fitness Literacy.</span>
          </h2>
          
          <div className="space-y-4 text-gray-700 text-base sm:text-lg text-justify leading-relaxed">
            <p>
               I’m <strong>Ankush S. Bhaskar</strong>, an internationally accredited Fitness Coach, Author, and Mentor. My journey in the fitness industry isn't just about sets and reps—it's about building systems that survive the real world.
            </p>
            <p>
               Since 2014, I’ve coached clients across India and globally—from the USA to Dubai—helping busy professionals, CEOs, and actors reclaim their health. I don't sell temporary motivation; I build high-performing bodies and minds through Fitness Literacy.
            </p>
            <blockquote className="border-l-4 border-[#1142D4] pl-4 italic text-xl font-medium text-gray-800 my-6">
              "I believe fitness should support your life, not fight it."
            </blockquote>
          </div>

          {/* Link */}
          <a
            href="/about-founder"
            className="inline-flex items-center gap-2 bg-[#1142D4] text-white px-6 py-3 rounded-md font-bold hover:bg-blue-800 transition w-fit shadow-md"
          >
            Read My Full Story <FaArrowRight />
          </a>
        </div>
      </motion.div>
    </section>
  );
}