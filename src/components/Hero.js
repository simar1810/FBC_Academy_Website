// src/components/Hero.js
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

export default function Hero() {
  return (
    <section className="bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 py-16 items-center">

          {/* Left Section: Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 flex flex-col justify-center text-center md:text-left space-y-6"
          >
            {/* Headline */}
            <p className="text-sm sm:text-base font-medium text-gray-700 tracking-wide">
              Internationally Accredited Fitness Coach | Fitness Educator | Author
            </p>
            <h1 className="font-playfair text-4xl sm:text-7xl font-bold leading-tight">
              Ankush S <span className="text-[#1142D4]">Bhaskar</span>
            </h1>

            <p className="text-lg font-medium text-gray-800">
            For A Better Day to Day Life. Not Just Better Looks.
            </p>

            {/* Sub-headline */}
            <p className="text-base font-manrope md:text-sm text-gray-700 max-w-lg mx-auto md:mx-0">
              Backed by 12 years of ground-level experience, we simplify fitness for busy professionals. 
              Get elite results through practical, doable, and sustainable habits that work all year
              round, without extreme dieting or lifestyle disruption.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 justify-center md:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/plans"
                className="bg-[#1142D4] text-white px-6 py-3 font-playfair rounded-md text-lg font-medium hover:bg-blue-800 transition"
              >
                I Want to Get Fit
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/plans#fitness-coach-launchpad"
                className="text-white bg-[#67bc2a] px-6 py-3 font-playfair rounded-md text-lg font-medium hover:bg-green-600 transition"
              >
                Become an Elite Coach
              </motion.a>
            </div>
          </motion.div>

          {/* Right Section: Image + Overlay */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-1 relative w-full max-w-lg md:max-w-xl"
          >
            <img
              src="/images/Client/client_1.jpg"
              alt="Hero"
              className="w-full h-[400px] md:h-[520px] object-cover object-top rounded-lg shadow-lg"
            />

            {/* White Info Box Overlay */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md rounded-lg px-4 py-3 flex items-center justify-between shadow-lg"
            >
              <div>
                <p className="text-sm font-semibold text-[#1142D4] uppercase">Fitness Coach</p>
                <h3 className="text-lg font-bold text-gray-800">Ankush Bhaskar</h3>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Trust Strip (full width) */}
      <div className="w-full bg-[#f4f7f6] border-y border-gray-200 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Media Logos Marquee */}
          <div className="flex-1 overflow-hidden flex items-center">
            <span className="text-gray-500 font-medium whitespace-nowrap mr-6">As Featured In:</span>
            <Marquee gradient={true} gradientColor={[244, 247, 246]} speed={40} className="flex items-center">
              <img src="/thetimesofindia.png" alt="The Times of India" className="mx-8 h-12 object-contain" />
              <img src="/mid-day.png" alt="mid-day" className="mx-8 h-12 object-contain" />
              <img src="/zee5.png" alt="ZEE5" className="mx-8 h-12 object-contain" />
              <img src="/theprint.png" alt="The Print" className="mx-8 h-12 object-contain" />
            </Marquee>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-8 justify-center md:justify-end whitespace-nowrap md:border-l md:border-gray-300 md:pl-10">
            <div className="flex flex-col items-center gap-0.5">
                <h3 className="font-playfair text-3xl font-bold text-[#1142D4] leading-none">1,000+</h3>
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Clients</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
                <h3 className="font-playfair text-3xl font-bold text-[#1142D4] leading-none">12+</h3>
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Years Experience</span>
            </div>
            <div className="hidden sm:block w-px h-10 bg-gray-300" aria-hidden="true" />
            <div className="flex flex-col items-center gap-0.5">
                <h3 className="text-sm font-bold text-gray-800 text-center leading-snug">Internationally<br/>Accredited</h3>
            </div>
            <div className="flex flex-col items-center gap-0.5">
                <h3 className="text-sm font-bold text-gray-800">Fitness Author</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}