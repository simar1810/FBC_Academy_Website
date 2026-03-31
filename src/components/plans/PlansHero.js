
export default function PlansHero() {
  return (
    <section
      id="home"
      className="relative w-full h-[80vh] bg-[#111] overflow-hidden font-sans"
    >
      {/* Background Overlay & Image */}
      <div className="absolute inset-0 z-0 ">
        <div className="absolute inset-0 bg-black/60 z-10 " />
        <img
          src="images/plans_hero.avif"
          alt="Wellness Background"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
        <div className="max-w-6xl">
          
          <h1 className="text-4xl font-playfair md:text-7xl font-bold text-white leading-tight drop-shadow-[0_0_10px_rgba(0,0,0,0.7)]">
            Elite Transformation Paths
          </h1>

          <p className="text-gray-200 font-playfair text-lg md:text-xl leading-relaxed drop-shadow-[0_0_8px_rgba(0,0,0,0.6)]">
            Premium fitness programs designed for busy professionals by Ankush S Bhaskar
          </p>

        </div>
      </div>
    </section>
  );
}