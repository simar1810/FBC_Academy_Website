// src/components/Hero.js
import { FaPlay } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 py-16">

          {/* Left Section: Text */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left space-y-6 ">
            {/* Headline */}
            <h1 className=" font-playfair text-4xl sm:text-7xl font-bold leading-tight">
              Own a High-<br />
              Performing <span className="text-[#1142D4]">Mind</span> <br />
              <span className="text-[#1142D4]"> & Body.</span>
            </h1>

            {/* Sub-headline */}
           <p className="text-base font-manrope md:text-sm text-gray-700 max-w-l mx-auto md:mx-0">
              We simplify fitness for busy professionals.
              Get elite results through practical, doable, and sustainable habits that work all year
             round—without extreme dieting or lifestyle disruption.

            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 justify-center md:justify-start">
              <a
                href=""
                className="bg-[#1142D4] text-white px-6 py-3 font-playfair rounded-md text-lg font-medium hover:bg-[#1142D4] transition"
              >
                I Want to Get Fit
              </a>
              <a
                href=""
                className=" text-white bg-[#67bc2a] px-6 py-3 font-playfair rounded-md text-lg font-medium transition"
              >
                Become an Elite Coach
              </a>
            </div>
          </div>

          {/* Right Section: Image + Overlay */}
          <div className="flex-1 relative w-full max-w-lg md:max-w-xl">
            <img
              src="https://i.ytimg.com/vi/uOe2Z27sVl0/oar2.jpg?sqp=-oaymwEkCJgDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLBbjnYNzuVBmfnNtXZ4turZcMHQ1g"
              alt="Hero"
              className="w-full h-130 rounded-lg shadow-lg"
            />

            {/* White Info Box Overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/60 backdrop-blur-md rounded-lg px-4 py-3 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-[#1142D4] uppercase">Featured Success</p>
                <div className="flex items-center gap-3 mt-1">
                  {/* Circular Play Button */}
                  <div className="w-8 h-8 flex items-center justify-center bg-[#1142D4] rounded-full">
                    <FaPlay className="text-white text-sm" />
                  </div>
                  <span className="text-gray-800 font-medium text-sm">
                    Transformation Story: CEO of Tech
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Trust Strip (full width) */}
      <div className="w-full bg-white border border-gray-300 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Media Logos */}
          <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
            <span className="text-gray-500 font-medium">As Featured In:</span>
            <span className="text-gray-700 font-semibold">Times of India</span>
            <span className="text-gray-700 font-semibold">Mid-day</span>
            <span className="text-gray-700 font-semibold">ZEE5</span>
            <span className="text-gray-700 font-semibold">The Print</span>
         </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-6 justify-center md:justify-end text-gray-700">

            <div className="flex flex-col items-center gap-1">
                <h3 className="text-indigo-600 font-bold text-lg">1,000+</h3>
                <span className="text-sm">Happy Clients</span>
            </div>

            <div className="flex flex-col items-center gap-1">
                <h3 className="text-orange-600 font-bold text-lg">12,000+ Years</h3>
                <span className="text-sm">Elite Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}