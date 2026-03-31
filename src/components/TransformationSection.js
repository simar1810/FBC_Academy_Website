// src/components/TransformationSection.js
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

export default function TransformationSection() {
  return (
    <section className="w-full flex flex-col md:flex-row h-auto md:h-[80vh]">
      
      {/* Left Section: Dark Image with overlay */}
      <div className="flex-1 relative min-h-[300px] md:min-h-[80vh]">
        {/* Background image */}
        <Image
          src="/images/transformation.avif" // replace with your image path
          alt="Wellness Background"
          fill
          className="object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />

        {/* Dark Overlay + Text */}
        <div className="absolute inset-0 flex flex-col justify-center text-left px-6 md:px-16 py-12 z-20">
          <h2 className="text-2xl font-playfair sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Transformation Programs
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-md mb-6 max-w-full md:max-w-md">
            The flagship experience for busy executives seeking to reclaim their health and peak performance.
          </p>
          <a
          href="#"
          className="bg-[#1142D4] font-playfair px-6 py-3 rounded-md text-white font-semibold flex items-center gap-2 transition mt-3 w-50"
        >
          Start Your Reset <FaArrowRight />
        </a>
        </div>
      </div>

      {/* Right Section: White */}
      <div className="flex-1 bg-white flex flex-col items-start justify-center p-6 md:p-8 md:ml-10">
        {/* Badge */}
        <div className="bg-orange-100 text-[#C5A059] rounded-full px-4 py-2 text-xs mb-4">
          FOR ASPIRING COACHES
        </div>

        {/* Headline */}
        <h3 className="text-2xl sm:text-2xl md:text-5xl font-bold mb-2 font-playfair">
          Fitness Coach Launchpad
        </h3>

        {/* Subheadline */}
        <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-4 max-w-full md:max-w-lg mt-2">
          Build an elite business coaching business using the FBC methodology and high-ticket business systems.
        </p>

        {/* CTA */}
        <a
          href=""
          className="bg-[#67bc2a] font-playfair border-gray-300 px-6 py-3 rounded-md text-white font-semibold flex items-center gap-2  transition mt-3"
        >
          Launch Your Career <FaArrowRight />
        </a>
      </div>
    </section>
  );
}