// src/components/AboutSection.js
import { FaArrowRight } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto bg-white md:rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-8 p-6 md:p-12">
        
        {/* Left: Image + Stats */}
        <div className="flex-1 relative">
          <img
            src="/images/Client/client_2.jpg"
            alt="About Image"
            // className="w-full h-100 object-cover rounded-md"
            className="w-full h-[400px] md:h-[520px] object-cover object-top rounded-lg shadow-lg"
          />

          {/* Small Stats Box */}
          <div className="absolute bottom-4 right-4 bg-[#C5A059] text-black rounded-md px-4 py-2 shadow-lg text-center">
            <p className="text-sm font-semibold">Experience</p>
            <p className="text-lg font-bold">12 Years</p>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="flex-1 flex flex-col justify-center space-y-4 md:pl-8 mt-3">
          {/* Name */}
          <h2 className="text-2xl sm:text-4xl font-bold font-playfair">Ankush S. Bashkar</h2>
          {/* Title */}
          <h3 className="text-[#1142D4] font-semibold">FOUNDER, FIT BODY CULTURE</h3>
          {/* Paragraph */}
          <p className="text-gray-700 text-base sm:text-lg max-w-lg text-justify">
             I’m <span className="text-[#67bc2a] font-bold">Ankush S. Bhaskar</span>, an internationally accredited Fitness Coach, Author, and Mentor. My journey
             in the fitness industry isn't just about sets and reps—it's about building systems that survive the real
             world. <br/><br/>
             Since 2014, I’ve coached clients across India and globally—from the USA to Dubai—helping busy
             professionals, CEOs, and actors reclaim their health. I don't sell temporary motivation; 
             I build high performing bodies and minds through Fitness Literacy.</p>
          {/* Link */}
          <a
            href="#full-story"
            className="inline-flex items-center gap-2 text-black  font-bold hover:underline"
          >
            Read Full Story 
          </a>
        </div>
      </div>
    </section>
  );
}