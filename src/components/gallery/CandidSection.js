"use client";

import Image from "next/image";

const images = [
  "/images/candid/candid_1.jpg",
  "/images/candid/candid_2.jpg",
  "/images/candid/candid_3.jpg",
  "/images/candid/candid_4.jpg",
  "/images/candid/candid_5.jpg",
  "/images/candid/candid_6.jpg",
  "/images/candid/candid_7.jpg",
  "/images/candid/candid_8.jpg",
  "/images/candid/candid_9.jpg",
  "/images/candid/candid_10.jpg",
  "/images/candid/candid_11.jpg",
  "/images/candid/candid_12.png",
  "/images/candid/candid_13.jpg",
  "/images/candid/candid_14.jpg",
];

export default function CandidSection() {
  return (
    <section className="py-20 bg-white">
      
      {/* HEADING */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-5xl font-bold font-playfair">
          Unfiltered <span className="text-[#67bc2a]">Moments</span> of Transformation
        </h2>
        <p className="text-gray-500 mt-4">
          Real people. Real journeys. Captured as they happened.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden group"
          >
            <Image
              src={src}
              alt={`candid-${index}`}
              width={500}
              height={500}
              className="w-full h-[300px] md:h-[360px] object-cover transition duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>
          </div>
        ))}
      </div>
    </section>
  );
}