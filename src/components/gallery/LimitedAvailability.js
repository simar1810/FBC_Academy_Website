

const LimitedAvailability = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-10 py-20">

      {/* Square / Card */}
      <div className="bg-[#F3F3F7] rounded-xl p-8 md:p-14 h-[300px] sm:h-[400px] flex flex-col items-center justify-center text-center space-y-6">

        {/* Top Text */}
        <p className="text-[#434655] text-xs md:text-sm tracking-wide uppercase">
          Limited availability for high personal coaching in our private London arena
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-7xl font-playfair font-semibold">
          Start Your Chapter
        </h2>

        {/* Buttons */}
        <div className="flex flex-row gap-4 mt-4">

          {/* Primary Button */}
          <button className="bg-[#1142D4] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:opacity-90 transition">
            Apply now
          </button>

          {/* Secondary Button */}
          <button className="bg-[#67bc2a] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md  hover:text-white transition">
            The Process
          </button>

        </div>

      </div>
    </section>
  )
}

export default LimitedAvailability