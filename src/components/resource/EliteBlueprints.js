import Image from "next/image";

const videos = [
  {
    id: "TBV2pFjTleY",
    title: "Tarun Sharma Show",
    poster: "/tarun-sharma-poster.jpg",
    url: "https://youtu.be/TBV2pFjTleY?si=KxPJIksHjr7YVq-C"
  },
  {
    id: "9MSm_6pdKaE",
    title: "Dream With Neeraj Podcast",
    poster: "/dream-with-neeraj-poster.jpg",
    url: "https://youtu.be/9MSm_6pdKaE?si=JxkdAXBQPhtp1yQd"
  },
  {
    id: "zn77Kb9LK38",
    title: "The Spotlight Podcast: Episode 1",
    poster: "/the-spotlight-poster.jpg",
    url: "https://youtu.be/zn77Kb9LK38?si=fVJhfTBy0iAJ5Cyb"
  },
  {
    id: "4qcs8SXBczI",
    title: "The Spotlight Podcast: Episode 2",
    poster: "/the-spotlight-poster.jpg",
    url: "https://youtu.be/4qcs8SXBczI?si=vY-9KWoaMiaROM_h"
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
          Watch My Latest Podcast Appearances
        </h2>

        <p className="text-gray-600 max-w-4xl mx-auto text-sm md:text-base leading-relaxed">
          Watch my guest appearances and in-depth podcast talks where I break down the real gaps in the fitness industry. From unlearning bodybuilding myths to mastering minimalist workouts, these videos show you how to own a high-performing mind and body without sacrificing your lifestyle.
        </p>

      </div>

      {/* VIDEOS */}
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {videos.map((video, index) => (
            <a
              key={index}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-3xl shadow-xl bg-white transition hover:-translate-y-1"
            >

              <div className="relative h-[300px] w-full">
                <Image
                  src={video.poster}
                  alt={video.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/90 text-black shadow-lg transition group-hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-7 h-7 ml-1"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm text-gray-500 uppercase tracking-[0.24em] mb-2">
                  YouTube Podcast
                </p>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  {video.title}
                </h3>
              </div>

            </a>
          ))}

        </div>
      </div>

    </section>
  );
};

export default EliteBlueprints;