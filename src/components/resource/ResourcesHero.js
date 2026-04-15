const ResourcesHero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-10 py-16">

      {/* Card */}
      <div className="bg-white shadow-2xl  overflow-hidden">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-15">

          {/* LEFT IMAGE (TOP + LEFT attached, bottom gap exists) */}
          <div className="p-0 md:p-0 flex items-start">

            <div className="w-full h-[90%] md:h-[540px] pr-0">
              <img
                src="/images/resource_hero.jpeg"
                alt="featured"
                className="w-full h-full object-cover block"
              />
            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="p-6 md:p-10 flex flex-col justify-center space-y-4">

            <p className="text-xs md:text-sm text-[#1142D4] uppercase tracking-wide">
              Featured Analysis
            </p>

            <h2 className="text-3xl md:text-5xl font-playfair font-semibold leading-snug tracking-widest">
              The <br />
              Biological <br />
              Cost Of <br />
              Extreme <br />
              Ambition
            </h2>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              <span className="block">An executive guide to balancing</span>
              <span className="block">cognitive load and physiological</span>
              <span className="block">recovery without sacrificing</span>
              <span className="block">professional output</span>
            </p>

            <p className="font-semibold text-black cursor-pointer hover:opacity-70 transition">
              Read Full Journal{" "}
              <span className="text-gray-500">→ 12 Mins Read</span>
            </p>

          </div>

        </div>
      </div>

    </section>
  )
}

export default ResourcesHero