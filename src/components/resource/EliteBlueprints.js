const videos = [
  {
    id: "Video_1",  
    title: "Podcast 1"
  },
  {
    id: "Video_2",
    title: "Podcast 2"
  }
];

const EliteBlueprints = () => {
  return (
    <section className="w-full bg-[#F3F3F7] py-20">

      {/* HEADER */}
      <div className="text-center space-y-4 mb-16 px-4">

        <p className="text-sm text-[#1142D4] uppercase tracking-widest">
          WATCH YOUTUBE PODCASTS
        </p>

        <h2 className="text-3xl md:text-6xl font-playfair font-semibold">
          The Science of "Minimum Effective Dose"
        </h2>

        <p className="text-gray-600 max-w-4xl mx-auto text-sm md:text-base leading-relaxed">
          Watch my guest appearances and in-depth podcast talks where I break down the real gaps in the fitness industry. From unlearning bodybuilding myths to mastering minimalist workouts, these videos show you how to own a high-performing mind and body without sacrificing your lifestyle.
        </p>

      </div>

      {/* VIDEOS */}
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {videos.map((video, index) => (
            <a
              key={index}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group cursor-pointer"
            >

              {/* THUMBNAIL */}
              <img
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.title}
                className="w-full h-[300px] md:h-[350px]  object-cover rounded-md"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition duration-300" />

              {/* SQUARE PLAY BUTTON */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-md flex items-center justify-center
                                backdrop-blur-md bg-white/30 border border-white/40
                                group-hover:scale-110 transition duration-300">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 ml-1"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>

                </div>
              </div>

            </a>
          ))}

        </div>
      </div>

    </section>
  );
};

export default EliteBlueprints;