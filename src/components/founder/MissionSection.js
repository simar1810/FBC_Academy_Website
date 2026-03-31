"use client";
import React from "react";

export default function MissionSection() {
  return (
    <section className="w-full relative py-24 flex justify-center">
      {/* Background Image */}
      <img
        src="images/founder_mission.jpg"
        alt="Navy Blue Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay to make text more readable */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative text-center max-w-4xl px-6 text-white font-playfair">
        {/* Small subtext */}
        <p className="text-sm uppercase mb-4 tracking-wider text-[#C5A059]">
          Vision & Mission
        </p>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug text-italic">
          "Our mission is To Institutionalize <br/>Fitness Literacy . Our vision is to
          <br/>build A World Where Health is <br />Second Nature."
        </h2>

        {/* Founder Info */}
        <div className="mt-10">
          <h3 className="text-xl md:text-3xl font-semibold text-[#C5A059]">
            Ankush S. Bhaskar
          </h3>
          <p className="text-gray-200 text-sm md:text-base mt-1">
            Founder & Lead Strategist, FBC
          </p>
        </div>
      </div>
    </section>
  );
}