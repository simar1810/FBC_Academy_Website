// src/components/Hero.js
import { FaPlay } from "react-icons/fa";

export default function FounderHero() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 py-16">

          {/* Left Section: Text */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left space-y-6 ">
            {/* Headline */}
            <p className = "text-xs text-orange-300">EXECUTIVE PERFORMANCE COACH</p>
            <h1 className="text-4xl sm:text-7xl font-bold leading-tight font-playfair">
              The Visionary<br />
              <span className="text-[#9ba7ca]">Behind FBC</span>
            </h1>

            {/* Sub-headline */}
           <p className="text-base md:text-sm text-gray-700 max-w-110 mx-auto md:mx-0">
              Ankush S. Bhaskar Empowering high-stakes prefessionals through a unique fusion of
              elite fitness storytelling and scientific authority.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 justify-center md:justify-start">
              <a
                href=""
                className="bg-[#1142D4] font-playfair text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-indigo-700 transition"
              >
                Read the story
              </a>
              <a
                href=""
                className="border font-playfair border-gray-300  px-6 py-3 rounded-md text-lg font-medium bg-[#67bc2a] text-white transition"
              >
                View Credentials
              </a>
            </div>
          </div>

          {/* Right Section: Image + Overlay */}
          <div className="flex-1 relative w-full max-w-lg md:max-w-xl">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.kngZbTwqqa3_1P91HJFxzAHaEb?pid=Api&P=0&h=180"
              alt="Hero"
              className="w-full h-130 rounded-xl shadow-lg"
            />

             <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

            {/* White Info Box Overlay */}
            <div className="absolute bottom-6 left-6">
               <p className="text-white text-lg md:text-xl italic font-medium">
                   “Precision is the foundation.”
               </p>
            </div>

          </div>

        </div>
      </div>

      {/* Trust Strip (full width) */}
     <div className="w-full bg-white border border-gray-300 py-6 mt-12">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-4 text-center">

          {/* Feature Heading */}
              <span className="text-gray-500 font-medium">
                As Featured In
              </span>

         {/* Company Names */}
              <div className="flex flex-wrap items-center justify-center gap-6">
                <span className="text-gray-700 font-semibold">FORBES</span>
                <span className="text-gray-700 font-semibold">GQ</span>
                <span className="text-gray-700 font-semibold">MEN'S HEALTH</span>
                <span className="text-gray-700 font-semibold">VOGUE</span>
                <span className="text-gray-700 font-semibold">THE TIMES</span>
              </div>

          </div>
       </div>
    </section>
  );
}
