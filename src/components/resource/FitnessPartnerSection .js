import { useState } from "react";
import { motion } from "framer-motion";

const features = [
  { label: "Diet Plan", screen: "/app-screen-diet.jpg" },
  { label: "Workout Plan", screen: "/app-screen-workout.jpg" },
  { label: "Habits and Goals", screen: "/app-screen-habits.jpg" },
  { label: "Tracking", screen: "/app-screen-tracking.jpg" },
  { label: "Progress", screen: "/app-screen-progress.jpg" },
  { label: "Achieve and Celebrate", screen: "/app-screen-achieve.jpg" },
];

const FitnessPartnerSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-[#F3F3F7] overflow-hidden font-manrope">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-6xl font-playfair font-semibold text-black mb-6">
            Your Digital <br className="md:hidden" /> Fitness Partner.
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Download the FBC Academy app to experience the exact system my VIP clients use: high fidelity tracking meets high-performance science.
          </p>
        </motion.div>

        {/* Interactive Feature Tabs + Phone */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto"
        >
          {/* Left: Tabs */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <button
                key={feature.label}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-center py-4 px-6 rounded-xl text-lg font-medium transition-all duration-300 cursor-pointer ${activeIndex === index
                  ? "bg-white border-2 border-blue-600 shadow-xl text-black scale-[1.02]"
                  : "bg-white border-2 border-gray-200 text-gray-500 hover:border-blue-300 hover:shadow-md"
                  }`}
              >
                {feature.label}
              </button>
            ))}
          </div>

          {/* Right: Phone Mockup */}
          <div className="flex justify-center items-end relative">
            {/* Phone frame */}
            <div className="relative w-64 md:w-[320px]">
              <div className="bg-black rounded-[3rem] p-3 shadow-2xl">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-10" />
                {/* Screen */}
                <div className="rounded-[2.5rem] overflow-hidden bg-white relative aspect-[9/19.5]">
                  {features.map((feature, index) => (
                    <img
                      key={feature.label}
                      src={feature.screen}
                      alt={feature.label}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${activeIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://apps.apple.com/in/app/fbc-academy/id6757097093"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-gray-300 bg-black px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:bg-gray-900 transition-all duration-300 text-white min-w-[200px]"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.97 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
              </svg>
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.wellnessz.fitbody&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-gray-300 bg-black px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:bg-gray-900 transition-all duration-300 text-white min-w-[200px]"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              Google Play
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FitnessPartnerSection;