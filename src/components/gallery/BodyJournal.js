"use client"

const BodyJournal = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-10 py-16 space-y-16">

      {/* 🔹 Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* Left Image */}
       <div className="relative h-[300px] md:h-[420px] rounded-lg overflow-hidden">
  
           {/* Image */}
           <img
             src="/images/Client/client_6.jpg"
             alt=""
             className="w-full h-full object-cover"
           />

           {/* Dark Overlay */}
           <div className="absolute inset-0 bg-black/40"></div>

       </div>

        {/* Right Content */}
        <div className="space-y-5">
          <p className="text-[#1142D4] uppercase text-xs tracking-wider">
            Institutional Standard
          </p>

          <h2 className="text-2xl md:text-5xl font-playfair font-semibold leading-snug">
            Your body is the Journal <br />
            of your discipline
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            We track every metric, monitor every variable, and curate the
            <br />
            path to your peak.This is not just fitness — it is engineering.
            
          </p>

          <button className="text-[#1142D4] border-b-2 border-[#1142D4] pb-1 text-sm font-medium hover:opacity-80 transition">
             REVIEW THE METHODOLOGY
          </button>
        </div>
      </div>

      {/* 🔹 Bottom Gallery */}
      {/* <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-start">

         
          <div className="h-[250px] md:h-[300px] rounded-lg overflow-hidden">
            <img
              src="/images/gallery_7.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          
          <div className="h-[250px] md:h-[300px] rounded-lg overflow-hidden">
            <img
              src="/images/gallery_8.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          
          <div className="relative h-[320px] md:h-[360px] rounded-lg overflow-hidden">
            <img
              src="/images/gallery_9.jpg"
              alt=""
              className="w-full h-full object-cover"
            />

            
            <div className="absolute inset-0 bg-black/20" />

            
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white/90 backdrop-blur-md rounded-md px-6 py-3 text-sm shadow-md hover:scale-105 transition">
                Load more archives
              </button>
            </div>
          </div>

        </div>
      </div> */}

    </section>
  )
}

export default BodyJournal