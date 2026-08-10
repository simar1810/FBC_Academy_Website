const ResourcesHero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-10 py-16">

      {/* TOP HEADER BLOCK (NOW ABOVE CARD) */}
      <div className="mb-10">

        {/* Small Label */}
        <p className="text-xs md:text-sm font-medium text-[#1142D4] uppercase tracking-wide mb-4">
          THE RESOURCE HUB
        </p>

        {/* Heading + Divider + Text */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">

          {/* LEFT HEADING */}
          <h2 className="text-3xl md:text-5xl font-playfair font-semibold leading-tight ">
            THE FBC <br />
            <span className="text-[#1142D4]">Success ToolKit</span>
          </h2>

          {/* RIGHT SIDE */}
          <div className="flex items-start gap-4">
            <div className="w-[1px] h-full bg-gray-300"></div>

            <p className="text-gray-600 sm:mt-10 text-sm md:text-base border-l-2 border-gray-500 pl-3 leading-relaxed max-w-xs">
              Everything you need to stop guessing <br />
              and start growing
            </p>
          </div>

        </div>
      </div>

      {/* Card */}
      <div className="bg-white shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-15">

          {/* LEFT IMAGE */}
          <div className="p-0 flex items-start">
            <div className="w-full h-[90%] md:h-[540px] pr-0">
              <img
                src="/ank1.jpg"
                alt="featured"
                className="w-full h-full object-cover object-top block"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="p-6 md:p-10 flex flex-col justify-center space-y-6">

            <p className="text-xs md:text-sm text-[#1142D4] uppercase tracking-wide">
              Featured Analysis
            </p>

            <h2 className="text-3xl md:text-5xl font-playfair font-semibold leading-snug tracking-widest">
             The<br />
             Biological<br />
             Cost of <br />
             Extreme<br />
             Ambition.
            </h2>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              <span className="block">An executive guide to balancing cognitive load and </span>
              <span className="block">physiological recovery without sacrificing professional </span>
              <span className="block">output.</span>
            </p>

            <a
              href="#blogs"
              className="font-semibold text-black cursor-pointer hover:opacity-70 transition"
            >
              Explore the Blog{" "}
              <span className="text-gray-500">→ Latest Articles</span>
            </a>

          </div>

        </div>
      </div>

    </section>
  )
}

export default ResourcesHero