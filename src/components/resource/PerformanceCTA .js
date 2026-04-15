const PerformanceCTA = () => {
  return (
    <section className="wfull py-20 px-4 md:px-10 flex justify-center">

      {/* Square Card */}
      <div className="bg-[#1D4ED8] w-full max-w-6xl p-8 md:p-20 text-white">

        {/* Heading */}
        <h2 className="text-xl md:text-4xl font-playfair font-semibold leading-snug">
          Performance Intelligence,<br />
          delivered.
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-sm md:text-base text-white/90 leading-relaxed max-w-2xl">
          Join 25,000+ high achievers receiving weekly breakdowns of clinical research and <br />
          field-tested performance strategies.
        </p>

        {/* Input + Button */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 md:items-center">

          {/* Input */}
          <input
            type="email"
            placeholder="professional@email.com"
            className="w-full md:w-[420px] bg-white/10 border border-white/50 px-4 py-3 text-white placeholder-white/70 outline-none flex-none"
          />

          {/* Button */}
          <button className="bg-white text-[#1D4ED8] px-6 py-3 font-medium whitespace-nowrap hover:bg-white/90 transition">
            JOIN ARCHIVE
          </button>

        </div>

      </div>

    </section>
  )
}

export default PerformanceCTA