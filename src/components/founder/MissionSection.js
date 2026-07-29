"use client";
import React from "react";

export default function MissionSection() {
  return (
    <section className="w-full relative py-24 md:py-32 flex justify-center overflow-hidden">
      <img
        src="/images/founder_mission.jpg"
        alt="Vision and mission background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/70" />

      <div className="relative text-center max-w-4xl px-6 text-white">
        <p className="text-xs sm:text-sm uppercase mb-5 tracking-[0.25em] text-[#67bc2a] font-semibold">
          Vision &amp; Mission
        </p>

        <h2 className="font-playfair text-3xl md:text-5xl font-bold leading-tight md:leading-snug">
          Our mission is to institutionalize{" "}
          <span className="text-[#67bc2a]">Fitness Literacy</span>.
        </h2>
        <p className="mt-5 md:mt-6 font-playfair text-xl md:text-3xl text-white/90 leading-snug">
          Our vision is to build a world where health is second nature.
        </p>

        <div className="mt-12 pt-8 border-t border-white/20 inline-block min-w-[240px]">
          <h3 className="text-xl md:text-2xl font-semibold font-playfair">
            Ankush S. Bhaskar
          </h3>
          <p className="text-white/70 text-sm md:text-base mt-2 tracking-wide">
            Founder &amp; Lead Strategist, FBC
          </p>
        </div>
      </div>
    </section>
  );
}
