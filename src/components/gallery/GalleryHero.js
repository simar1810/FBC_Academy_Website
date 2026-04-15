// "use client"
// import { useState } from "react"

// const tabs = [
//   "All Entries",
//   "Transformation",
//   "Workouts",
//   "Facilities"
// ]

// const GalleryHero = () => {
//   const [activeTab, setActiveTab] = useState("All Entries")

//   return (
//     <section className="max-w-7xl mx-auto px-4 md:px-10 py-10">

//       {/* Tabs (Improved Mobile UI) */}
//       <div className="overflow-x-auto mb-8 ">
//         <div className="bg-[#F3F3F7] inline-flex p-2 rounded-xl gap-2 min-w-max">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`px-4 py-2 rounded-lg text-sm md:text-base whitespace-nowrap transition-all duration-200 ${
//                 activeTab === tab
//                   ? "bg-[#1142D4] text-white shadow-sm"
//                   : "text-black hover:bg-white/60"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Content */}
//       <div className="space-y-8">

//         {/* Row 1 */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

//           {/* Large Image (with dark overlay) */}
//           <div className="relative md:col-span-2 h-[320px] md:h-[520px] rounded-lg overflow-hidden">
//             <img
//               src="/images/gallery_1.avif"
//               className="w-full h-full object-cover"
//             />

//             {/* Dark Gradient */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

//             {/* Text */}
//             <div className="absolute bottom-6 left-6">
//               <p className="text-[#1142D4] text-sm tracking-widest">
//                 FACILITY 01 / LONDON HEADQUARTERS
//               </p>
//               <h2 className="text-white text-xl md:text-3xl font-semibold">
//                 The Proving Grounds
//               </h2>
//             </div>
//           </div>

//           {/* Small Image */}
//           <div className="h-[260px] md:h-[420px]">
//             <img
//               src="/images/gallery_2.jpg"
//               className="w-full h-full object-cover rounded-lg"
//             />
//           </div>
//         </div>

//         {/* Row 2 */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

//           {/* Success Card (shorter) */}
//           <div className="bg-[#F3F3F7] border-l-4 border-[#67bc2a] p-5 rounded-lg flex flex-col justify-between md:h-[370px]">

//             <div>
//               <p className="text-[#1142D4] text-sm font-medium">
//                 Success Story
//               </p>

//               <h3 className="text-2xl font-playfair font-semibold mt-2">
//                 Arthur M.
//               </h3>

//               <p className="text-gray-600 mt-2 text-sm">
//                 "12 weeks of precision was all it took to redefine my executive performance."
//               </p>
//             </div>

//             {/* Images */}
//             <div className="flex gap-2 mt-4">
//               <img
//                 src="/images/gallery_3_1.webp"
//                 className="w-1/2 h-[200px] object-cover rounded-md"
//               />
//               <img
//                 src="/images/gallery_3_2.jpg"
//                 className="w-1/2 h-[200px] object-cover rounded-md"
//               />
//             </div>

//           </div>

//           {/* 4th Image (taller + dark overlay) */}
//           <div className="relative h-[320px] md:h-[420px] rounded-lg overflow-hidden">
//             <img
//               src="/images/gallery_4.webp"
//               className="w-full h-full object-cover"
//             />

//             {/* Dark overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
//           </div>

//           {/* 5th Image (taller) */}
//           <div className="relative h-[320px] md:h-[420px] rounded-lg overflow-hidden">
//             <img
//               src="/images/galley_5.jpg"
//               className="w-full h-full object-cover"
//             />

//             {/* Overlay card */}
//             <div className="absolute bottom-5 left-5 bg-white/50 backdrop-blur-md p-4 w-[85%] rounded-md">
//               <h4 className="font-semibold font-playfair text-lg md:text-2xl">
//                 The Standard
//               </h4>
//               <p className="text-sm text-gray-700">
//                 Equipment Selection
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }

// export default GalleryHero

"use client"
import { useState } from "react"

const tabs = [
  "All Entries",
  "Transformation",
  "Workouts",
  "Facilities"
]

const images = [
  "/images/gallery_1.avif",
  "/images/gallery_2.jpg",
  "/images/gallery_3_1.webp",
  "/images/gallery_3_2.jpg",
  "/images/gallery_4.webp",
  "/images/galley_5.jpg",
  "/images/gallery_10.png",
  "/images/gallery_11.png",
  "/images/gallery_12.png",
  "/images/gallery_13.png",
  "/images/gallery_14.png",
  "/images/gallery_15.png",
]

const GalleryHero = () => {
  const [activeTab, setActiveTab] = useState("All Entries")
  const [showAll, setShowAll] = useState(false)

  const visibleImages = showAll ? images : images.slice(0, 5)

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-10 py-10">

      {/* Tabs */}
      {/* <div className="overflow-x-auto mb-8">
        <div className="bg-[#F3F3F7] inline-flex p-2 gap-2 min-w-max rounded-xl">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm md:text-base whitespace-nowrap transition ${
                activeTab === tab
                  ? "bg-[#1142D4] text-white rounded-lg"
                  : "text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div> */}

      {/* MOSAIC GRID */}
      <div className="
        grid grid-cols-1 md:grid-cols-3
        gap-4 md:gap-6
        auto-rows-[240px] md:auto-rows-[220px]
      ">

        {visibleImages.map((img, index) => {

          // keep your mosaic logic ONLY for desktop
          const pattern = index % 6

          let className = "overflow-hidden"

          // 📱 MOBILE (ALL SAME)
          className += " h-[240px]"

          // 💻 DESKTOP MOSAIC ONLY
          if (pattern === 0) {
            className += " md:col-span-2 md:row-span-2 md:h-auto"
          } 
          else if (pattern === 3 || pattern === 4) {
            className += " md:row-span-2 md:h-auto"
          }

          return (
            <div key={index} className={className}>
              <img
                src={img}
                className="
                  w-full h-full object-cover
                  hover:scale-105 transition duration-300
                "
              />
            </div>
          )
        })}

      </div>

      {/* View More / Less Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-[#67bc2a] cursor-pointer text-white px-8 py-3 rounded-full text-sm hover:opacity-90 transition"
        >
          {showAll ? "View Less" : "View More"}
        </button>
      </div>

    </section>
  )
}

export default GalleryHero