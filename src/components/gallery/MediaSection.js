"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const mediaImages = [
  "/images/media/media_1.jpg",
  "/images/media/media_2.jpg",
  "/images/media/media_3.jpg",
  "/images/media/media_4.jpg",
  "/images/media/media_5.jpg",
  "/images/media/media_6.webp",
  "/images/media/media_7.webp",
  "/images/media/media_8.webp",
  "/images/media/media_9.webp",
  "/images/media/media_10.webp",
];

export default function MediaSection() {
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // ✅ Responsive logic
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 640) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  // ✅ Reset index on layout change
  useEffect(() => {
    setIndex(0);
  }, [itemsPerPage]);

  const totalPages = Math.ceil(mediaImages.length / itemsPerPage);

  const nextSlide = () => {
    setIndex((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const prevSlide = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-10 sm:mb-16">
          As Seen In <span className="text-[#67bc2a]">Media</span>
        </h2>

        {/* CAROUSEL */}
        <div className="relative">

          {/* TRACK */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${index * 100}%)`,
              }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div key={pageIndex} className="min-w-full px-2">
                  
                  <div
                    className={`grid gap-6 ${
                      itemsPerPage === 1
                        ? "grid-cols-1"
                        : itemsPerPage === 2
                        ? "grid-cols-2"
                        : "grid-cols-3"
                    }`}
                  >
                    {mediaImages
                      .slice(
                        pageIndex * itemsPerPage,
                        pageIndex * itemsPerPage + itemsPerPage
                      )
                      .map((src, i) => (
                        <div
                          key={i}
                          className="relative rounded-xl overflow-hidden shadow-md group"
                        >
                          <div className="relative w-full h-[300px] md:h-[400px]">
                            <Image
                              src={src}
                              alt="media"
                              fill
                              className="object-cover transition duration-500 group-hover:scale-105"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>
                          </div>
                        </div>
                      ))}
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* LEFT BUTTON */}
          <button
            onClick={prevSlide}
            disabled={index === 0}
            className={`absolute left-0 md:left-2 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-md z-10 transition-transform
              ${
                index === 0
                  ? "bg-gray-200 opacity-50 cursor-not-allowed"
                  : "bg-[#67bc2a] text-white hover:scale-110"
              }`}
          >
            <FaChevronLeft size={18} />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={nextSlide}
            disabled={index === totalPages - 1}
            className={`absolute right-0 md:right-2 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-md z-10 transition-transform
              ${
                index === totalPages - 1
                  ? "bg-gray-200 opacity-50 cursor-not-allowed"
                  : "bg-[#67bc2a] text-white hover:scale-110"
              }`}
          >
            <FaChevronRight size={18} />
          </button>
        </div>

        {/* DOTS (hidden on mobile) */}
        <div className="hidden sm:flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index ? "bg-black scale-110" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}