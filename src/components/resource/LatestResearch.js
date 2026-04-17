const researchData = [
  {
    id: 1,
    image: "/images/research_1.webp",
    category: "NUTRITION",
    title: "Metabolic flexibility for the C-suite",
    desc: "How to sustain peak cognitive performance through targeted micronutrient cycling and optimization strategies for elite executives."
  },
  {
    id: 2,
    image: "/images/research_2.jpg",
    category: "RECOVERY",
    title: "Advanced Bio Hacking: Beyond Sleep",
    desc: "Optimizing HRV through non sleep deep rest protocols and exogenous atmospheric conditioning for accelerated recovery."
  },
  {
    id: 3,
    image: "/images/research_3.jpg",
    category: "MINDSET",
    title: "The Stoic Performance Loop",
    desc: "Implementing ancient mental models to navigate high stakes decision making under physiological and psychological pressure."
  }
]

const LatestResearch = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-10 py-20">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">

        <div className="flex flex-col gap:6">
           <h2 className="text-2xl md:text-3xl font-playfair font-semibold">
             Insights & Articles (Blogs)
           </h2>

           <span className="text-sm text-[#44474E] mt-5 text-left sm:text-right">Moving beyond surface level hacks to understand "Why" behind your body.</span>
        </div>


        <p className="text-xs  text-[#1142D4] cursor-pointer hover:text-[#1142D4] transition">
          BROWSE ALL ARTICLES LATEST ARTICLES TO <br/> BUILD YOUR FITNESS LITERACY.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">

        {researchData.map((item) => (
          <div key={item.id} className="flex flex-col">

            {/* Image */}
            <img
              src={item.image}
              className="w-full h-[370px] object-cover"
            />

            {/* Text */}
            <div className="mt-4 space-y-2">

              <p className="text-[#1142D4] text-xs uppercase tracking-wide">
                {item.category}
              </p>

              <h3 className="text-lg md:text-3xl font-semibold leading-snug">
                {item.title}
              </h3>

              {/* Truncated Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
               {item.desc.split(" ").length > 10
                 ? item.desc.split(" ").slice(0, 12).join(" ") + "..."
                 : item.desc}
              </p>

            </div>
          </div>
        ))}

      </div>
    </section>
  )
}

export default LatestResearch