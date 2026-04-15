const cards = [
  {
    type: "image-left",
    chip: "FOUNDATIONAL GUIDE",
    title: "The 4AM Protocol",
    desc: "The complete system for morning optimization, from right exposure to neurochemical priming.",
    button: { text: "Download now", variant: "primary" },
    image: "/images/4_am.png"
  },
  {
    type: "text-only",
    chip: "ELITE BLUEPRINT",
    title: "Executive fasting cycles",
    desc: "Optimizing metabolic efficiency while maintaining 16-hour work days.",
    button: { text: "Unlock access", variant: "outline" }
  },
  {
    type: "text-only",
    chip: "TECHNICAL MANUAL",
    title: "Strength for longevity",
    desc: "The minimum effective dose of hypertrophy for orthopedic health and hormone support.",
    button: { text: "Unlock access", variant: "outline" }
  },
  {
    type: "image-right",
    chip: "FOUNDATIONAL GUIDE",
    title: "The Data-Driven Human",
    desc: "How to interpret blood work, HRV and Glucose monitoring to build a custom performance profile.",
    button: { text: "Download now", variant: "primary" },
    image: "/images/resource_data.png"
  }
]

const EliteBlueprints = () => {
  return (
    <section className="w-full bg-[#F3F3F7] py-20">

      {/* HEADER */}
      <div className="text-center space-y-4 mb-16 px-4">

        <p className="text-sm text-[#1142D4] uppercase tracking-widest">
          Premium Access
        </p>

        <h2 className="text-3xl md:text-5xl font-playfair font-semibold">
          Elite Performance Blueprints
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Comprehensive downloadable frameworks designed for immediate<br />
          implementation into a high performance lifestyle.
        </p>

      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 space-y-10">

        {/* ROW 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* BIG CARD 1 (IMAGE LEFT) */}
          <div className="md:col-span-2 bg-white overflow-hidden flex flex-col md:flex-row h-auto md:h-[450px]">

            {/* IMAGE */}
            <div className="w-full md:w-1/2 h-[220px] md:h-full">
              <img
                src={cards[0].image}
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center space-y-4">

              <div className="bg-[#1142D4]/10 text-[#1142D4] px-4 py-1 rounded-full w-fit text-xs font-medium">
                {cards[0].chip}
              </div>

              <h3 className="text-xl md:text-2xl font-semibold font-playfair">
                {cards[0].title}
              </h3>

              <p className="text-sm text-gray-600">
                {cards[0].desc}
              </p>

              <button className="bg-[#1142D4] text-white md:mt-20 px-6 py-3 text-sm w-full md:w-auto">
                {cards[0].button.text}
              </button>

            </div>
          </div>

          {/* SMALL CARD 1 */}
          <div className="bg-white p-6 md:p-8 flex flex-col justify-center space-y-4 h-auto md:h-[400px]">

            <div className="bg-[#1142D4]/10 rounded-full text-[#1142D4] px-4 py-1 w-fit text-xs font-medium">
              {cards[1].chip}
            </div>

            <h3 className="text-lg md:text-xl font-semibold font-playfair">
              {cards[1].title}
            </h3>

            <p className="text-sm text-gray-600">
              {cards[1].desc}
            </p>

            <button className="bg-[#67bc2a] md:mt-20 text-white px-6 py-3 text-sm w-full md:w-auto">
              {cards[1].button.text}
            </button>

          </div>
        </div>

        {/* ROW 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* SMALL CARD 2 */}
          <div className="bg-white p-6 md:p-8 flex flex-col justify-center space-y-4 h-auto md:h-[400px]">

            <div className="bg-[#1142D4]/10 rounded-full text-[#1142D4] px-4 py-1 w-fit text-xs font-medium">
              {cards[2].chip}
            </div>

            <h3 className="text-lg md:text-xl font-semibold font-playfair">
              {cards[2].title}
            </h3>

            <p className="text-sm text-gray-600">
              {cards[2].desc}
            </p>

            <button className="bg-[#67bc2a] md:mt-20 text-white px-6 py-3 text-sm w-full md:w-auto">
              {cards[2].button.text}
            </button>

          </div>

          {/* BIG CARD 2 (IMAGE RIGHT) */}
          <div className="md:col-span-2 bg-white overflow-hidden flex flex-col-reverse md:flex-row h-auto md:h-[450px]">

            {/* CONTENT */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center space-y-4">

              <div className="bg-[#1142D4]/10 rounded-full text-[#1142D4] px-4 py-1 w-fit text-xs font-medium">
                {cards[3].chip}
              </div>

              <h3 className="text-xl md:text-2xl font-semibold font-playfair">
                {cards[3].title}
              </h3>

              <p className="text-sm text-gray-600">
                {cards[3].desc}
              </p>

              <button className="bg-[#1142D4] md:mt-20 text-white px-6 py-3 text-sm w-full md:w-auto">
                {cards[3].button.text}
              </button>

            </div>

            {/* IMAGE */}
            <div className="w-full md:w-1/2 h-[220px] md:h-full">
              <img
                src={cards[3].image}
                className="w-full h-full object-cover"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default EliteBlueprints