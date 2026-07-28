// src/components/WhyPlansFail.js
import { FaDumbbell, FaUtensils, FaBolt, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhyPlansFail() {
  return (
    <section className="py-20 mt-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">

          {/* Left Side */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex flex-col justify-center text-center md:text-left space-y-6"
          >
            <h2 className="text-4xl sm:text-6xl font-playfair font-bold leading-tight">
              Why Most <br />
              Fitness Plans <span className="text-[#67bc2a]">Fail You</span>
            </h2>
            <p className="text-xl font-bold text-gray-800">
              You aren't the problem. The system is.
            </p>
            <p className="text-gray-700 text-base sm:text-md text-justify">
              You’ve been told you lack discipline, but the reality is simpler: you are being judged by an athlete’s standard while living a working professional’s life. Most trainers expect you to prioritize fitness like a college student with endless time or a pro athlete whose pay-check depends on it. They forget you have a career to grow, a family to support, and a social life to enjoy.
            </p>
            <p className="text-gray-700 text-base sm:text-md text-justify font-medium">
              For a busy professional, fitness cannot be the top priority. It should be the tool that makes your actual priorities easier to handle.
            </p>
            <div className="relative overflow-hidden rounded-lg border border-amber-200 bg-amber-50 p-4 sm:p-5 text-left">
              <div className="absolute inset-y-0 left-0 w-1.5 bg-amber-400" aria-hidden="true" />
              <div className="flex gap-3 pl-2">
                <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-amber-400/20 text-amber-600">
                  <FaLightbulb className="h-4 w-4" aria-hidden="true" />
                </span>
                <p className="text-gray-800 text-base sm:text-md">
                  <strong className="text-amber-700">The Reality Check:</strong>{" "}
                  Most professionals don't fail because they lack discipline. They fail because the "Indian Fitness Industry" is built on a broken, all-or-nothing mindset.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Info Cards */}
          <div className="flex-1 flex flex-col gap-6">
            
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col bg-gray-900 p-6 rounded-xl shadow-lg space-y-3 hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-center gap-3">
                <FaDumbbell className="text-[#67bc2a] w-6 h-6 flex-shrink-0" />
                <h3 className="text-lg font-semibold font-playfair text-white">The "Gym-Only" Mindset</h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base pl-9">
                You are told that 5-6 days at the gym is the only way to get fit. But when a hectic work week or travel catches up, you miss a few sessions, feel like a failure, and quit, hoping for a "freer schedule" that never actually comes.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col bg-gray-900 p-6 rounded-xl shadow-lg space-y-3 hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-center gap-3">
                <FaUtensils className="text-[#67bc2a] w-6 h-6 flex-shrink-0" />
                <h3 className="text-lg font-semibold font-playfair text-white">The Food Prison</h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base pl-9">
                Rigid meal timings and strict recipes don't survive uncertain work schedules or back-to-back meetings. Labelling a single favourite meal a week as a "cheat" creates unnecessary psychological trauma and makes health feel like a burden instead of a lifestyle.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col bg-gray-900 p-6 rounded-xl shadow-lg space-y-3 hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-center gap-3">
                <FaBolt className="text-[#67bc2a] w-6 h-6 flex-shrink-0" />
                <h3 className="text-lg font-semibold font-playfair text-white">The "Intensity" Obsession</h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base pl-9">
                Most plans obsess over "the mirror," imposing a bodybuilding mindset that ignores your real-world struggles. They chase weight loss and muscle size while you are battling poor sleep, mid-day energy crashes, and mental fog. The industry treats your physical shape as the only goal, completely overlooking the quality of life you are actually trying to improve.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}