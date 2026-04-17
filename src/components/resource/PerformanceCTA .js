const PerformanceCTA = () => {
  return (
    <section className="w-full py-20 px-4 md:px-10 flex justify-center bg-white">

      {/* CENTER CARD */}
      <div className="w-full max-w-2xl bg-[#1D4ED8] text-white rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-lg">

        {/* HEADING */}
        <h2 className="text-2xl md:text-4xl font-playfair font-semibold text-center">
          Claim your toolkit today
        </h2>

        {/* INPUTS */}
        <div className="mt-8 flex flex-col md:flex-row gap-4">

          {/* NAME */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full md:w-1/2 bg-white/10 border border-white/40 px-4 py-3 text-white placeholder-white/70 outline-none rounded-xl"
          />

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full md:w-1/2 bg-white/10 border border-white/40 px-4 py-3 text-white placeholder-white/70 outline-none rounded-xl"
          />

        </div>

        {/* BUTTON */}
        <button className="w-full mt-6 bg-white text-[#1D4ED8] py-3 font-medium rounded-xl hover:bg-white/90 transition">
          Send my free ebook
        </button>

        {/* FOOTNOTE */}
        <p className="mt-4 text-xs text-white/80 text-center">
          INSTANT DELIVERY VIA WHATSAPP AND EMAIL
        </p>

      </div>

    </section>
  );
};

export default PerformanceCTA;