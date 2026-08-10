"use client";
import Image from "next/image";
import { useState, useEffect, useEffectEvent } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const mediaItems = [
  {
    src: "/images/media/media_1.jpg",
    outlet: "Times of India",
  },
  {
    src: "/images/media/media_2.jpg",
    outlet: "The Print",
  },
  {
    src: "/images/media/media_2.jpg",
    outlet: "The Print",
  },
  {
    src: "/images/media/media_4.jpg",
    outlet: "mid-day",
  },
  {
    src: "/images/media/media_4.jpg",
    outlet: "mid-day",
  },
  {
    src: "/images/media/media_8.webp",
    outlet: "mid-day Hindi",
    blurred: true,
  },
  {
    src: "/images/media/media_6.webp",
    outlet: "Lokmat Times",
  },
  {
    src: "/images/media/media_11.jpg",
    outlet: "Lokmat Times Online",
  },
  {
    src: "/images/media/media_10.webp",
    outlet: "Times of India",
  },
];

export default function MediaSection() {
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

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

  const onItemsPerPageChange = useEffectEvent(() => {
    setIndex(0);
  });

  useEffect(() => {
    onItemsPerPageChange();
  }, [itemsPerPage]);

  const totalPages = Math.ceil(mediaItems.length / itemsPerPage);
  const canPrev = index > 0;
  const canNext = index < totalPages - 1;

  const nextSlide = () => {
    setIndex((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const prevSlide = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1142D4] mb-3">
          Press Features
        </p>
        <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-4">
          As Seen In <span className="text-[#67bc2a]">Media</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 sm:mb-14">
          Coverage across national publications featuring Fit Body Culture and Ankush S. Bhaskar.
        </p>

        <div className="relative px-0 sm:px-12">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div key={pageIndex} className="min-w-full px-1 sm:px-2">
                  <div
                    className={`grid gap-5 ${
                      itemsPerPage === 1
                        ? "grid-cols-1"
                        : itemsPerPage === 2
                        ? "grid-cols-2"
                        : "grid-cols-3"
                    }`}
                  >
                    {mediaItems
                      .slice(
                        pageIndex * itemsPerPage,
                        pageIndex * itemsPerPage + itemsPerPage
                      )
                      .map((item, i) => (
                        <article
                          key={`${pageIndex}-${item.src}-${item.outlet}-${i}`}
                          className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                          <div className="relative w-full aspect-[3/4] sm:h-[360px] md:h-[420px] sm:aspect-auto">
                            <Image
                              src={item.src}
                              alt={`${item.outlet} feature`}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              className={`object-cover object-top transition duration-500 group-hover:scale-[1.03] ${
                                item.blurred ? "blur-md scale-105" : ""
                              }`}
                            />

                            {item.blurred && (
                              <div className="absolute inset-0 bg-white/25 backdrop-blur-[2px]" />
                            )}

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90" />

                            <div className="absolute top-3 left-3">
                              <span className="inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#1142D4] shadow-sm">
                                {item.outlet}
                              </span>
                            </div>

                            {item.blurred && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="rounded-full bg-black/55 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                                  Preview blurred
                                </span>
                              </div>
                            )}
                          </div>
                        </article>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={prevSlide}
            disabled={!canPrev}
            aria-label="Previous media"
            className={`absolute left-0 top-1/2 z-10 -translate-y-1/2 hidden sm:flex h-11 w-11 items-center justify-center rounded-full border transition
              ${
                canPrev
                  ? "border-[#1142D4] bg-[#1142D4] text-white hover:bg-blue-800 shadow-lg"
                  : "border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
          >
            <FaChevronLeft size={16} />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            disabled={!canNext}
            aria-label="Next media"
            className={`absolute right-0 top-1/2 z-10 -translate-y-1/2 hidden sm:flex h-11 w-11 items-center justify-center rounded-full border transition
              ${
                canNext
                  ? "border-[#67bc2a] bg-[#67bc2a] text-white hover:bg-green-600 shadow-lg"
                  : "border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
          >
            <FaChevronRight size={16} />
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={prevSlide}
            disabled={!canPrev}
            className="sm:hidden rounded-full border border-gray-300 px-3 py-2 text-sm disabled:opacity-40"
          >
            Prev
          </button>

          <div className="flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to page ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-8 bg-[#1142D4]"
                    : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextSlide}
            disabled={!canNext}
            className="sm:hidden rounded-full border border-gray-300 px-3 py-2 text-sm disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
