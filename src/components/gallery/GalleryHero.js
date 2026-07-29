"use client"
import { useState } from "react"
import { TRANSFORMATION_IMAGES } from "@/data/transformations"

const GalleryHero = ({
  title = (
    <>
      Client <span className="text-[#1142D4]">Transformations</span>
    </>
  ),
  subtitle,
  showHeading = true,
  initialCount = 6,
}) => {
  const [showAll, setShowAll] = useState(false)
  const visibleImages = showAll
    ? TRANSFORMATION_IMAGES
    : TRANSFORMATION_IMAGES.slice(0, initialCount)

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-10 py-10">
      {showHeading && (
        <div className="mt-5 mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-bold font-playfair">{title}</h2>
          {subtitle && (
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mt-4">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div
        className="
        grid grid-cols-1 md:grid-cols-3
        gap-4 md:gap-6
        auto-rows-[240px] md:auto-rows-[220px]
      "
      >
        {visibleImages.map((item, index) => {
          const pattern = index % 6
          let className = "relative overflow-hidden group rounded-lg"
          className += " h-[240px]"

          if (pattern === 0) {
            className += " md:col-span-2 md:row-span-2 md:h-auto"
          } else if (pattern === 3 || pattern === 4) {
            className += " md:row-span-2 md:h-auto"
          }

          return (
            <div key={`${item.src}-${index}`} className={className}>
              <img
                src={item.src}
                alt={`${item.name} transformation`}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm md:text-base font-semibold font-playfair">
                  {item.name}
                </p>
                <p className="text-white/80 text-xs tracking-wide uppercase mt-0.5">
                  Before & After
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {TRANSFORMATION_IMAGES.length > initialCount && (
        <div className="flex justify-center mt-10">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="bg-[#67bc2a] cursor-pointer text-white px-8 py-3 rounded-full text-sm hover:opacity-90 transition"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </section>
  )
}

export default GalleryHero
