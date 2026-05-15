// src/components/TransformationSection.js
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TransformationSection() {
  return (
    <section id="choose-path" className="w-full flex flex-col md:flex-row h-auto md:h-[80vh]">
      
      {/* Path A: I Want to Get Fit */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex-1 relative min-h-[400px] md:min-h-[80vh] group overflow-hidden"
      >
        <Image
          src="/images/Client/client_3.png" // replace with your image path
          alt="Get Fit Background"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20 z-10" />

        <div className="absolute inset-0 flex flex-col justify-end text-left px-8 py-12 md:p-16 z-20">
          <div className="bg-[#1142D4] text-white rounded-full px-4 py-1.5 text-xs font-bold w-fit mb-4 uppercase tracking-wider">
            Option A
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-white mb-2">
            I Want to Get Fit
          </h2>
          <h3 className="text-[#67bc2a] font-bold text-xl mb-4">The Total Body Re-Set Transformation</h3>
          
          <p className="text-gray-300 text-sm md:text-base mb-3 max-w-lg leading-relaxed">
            <strong>What it is:</strong> A total transition from a "fitness-first" obsession to a high-performing life. You’ll move from the all-or-nothing trap to a doable regime that optimizes your sleep, hormones, and mental focus.
          </p>
          <p className="text-gray-300 text-sm md:text-base mb-6 max-w-lg leading-relaxed">
            <strong>Who it is for:</strong> Busy professionals seeking lasting results through sustainable habits that allow for a flexible social life and staying fit 365 days a year.
          </p>

          <a
            href="/plans"
            className="bg-[#1142D4] hover:bg-blue-800 font-playfair px-6 py-3 rounded-md text-white font-semibold flex items-center justify-center gap-2 transition w-fit"
          >
            Explore Transformation Programs <FaArrowRight />
          </a>
        </div>
      </motion.div>

      {/* Path B: Become a Coach */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 relative min-h-[400px] md:min-h-[80vh] group overflow-hidden"
      >
        <Image
          src="/images/Client/client_2.jpg" // replace with another relevant image path
          alt="Coach Background"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/80 to-gray-900/40 z-10" />

        <div className="absolute inset-0 flex flex-col justify-end text-left px-8 py-12 md:p-16 z-20">
          <div className="bg-[#67bc2a] text-white rounded-full px-4 py-1.5 text-xs font-bold w-fit mb-4 uppercase tracking-wider">
            Option B
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-white mb-2">
            I Want to Become a Highly Skilled Coach
          </h2>
          <h3 className="text-[#1142D4] font-bold text-xl mb-4">The Fitness Coach Launchpad</h3>

          <p className="text-gray-300 text-sm md:text-base mb-3 max-w-lg leading-relaxed">
            <strong>What it is:</strong> The bridge between textbook theory and real-world results. You’ll master a proven "Confident Coach System" derived from 12 years of ground-level experience.
          </p>
          <p className="text-gray-300 text-sm md:text-base mb-6 max-w-lg leading-relaxed">
            <strong>Who it is for:</strong> Aspiring or certified trainers ready to skip years of trial-and-error to achieve high career growth and practical skill mastery.
          </p>

          <a
            href="/plans#fitness-coach-launchpad"
            className="bg-[#67bc2a] hover:bg-green-600 font-playfair px-6 py-3 rounded-md text-white font-semibold flex items-center justify-center gap-2 transition w-fit"
          >
            Explore Fitness Coach Launchpad <FaArrowRight />
          </a>
        </div>
      </motion.div>
    </section>
  );
}