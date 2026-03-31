// src/components/WhyPlansFail.js
import { FaDumbbell, FaUtensils, FaBolt } from "react-icons/fa";

export default function WhyPlansFail() {
  return (
    <section className="py-20 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-50 items-center">

          {/* Left Side */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left space-y-6">
            <h2 className="text-4xl sm:text-6xl font-playfair font-bold leading-tight">
              Why Most <br />
              Fitness Plans <span className="text-[#67bc2a]">Fail</span>
            </h2>
            <p className="text-gray-800 text-base sm:text-md text-justify">
              Most professionals don't fail because they lack discipline. They fail because the "Indian Fitness
              Industry" is built on a broken, all-or-nothing mindset.
            </p>
          </div>

          {/* Right Side: Info Cards */}
          <div className="flex-1 flex flex-col gap-8">
            
            {/* Card 1 */}
            <div className="flex flex-col bg-gray-900 p-6 rounded-lg space-y-3">
              <div className="flex items-center gap-3">
                <FaDumbbell className="text-[#67bc2a] w-6 h-6 flex-shrink-0" />
                <h3 className="text-lg font-semibold font-playfair text-white">The "Gym-Only" Mindset</h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base pl-9">
                You are told that 5–6 days at the gym is the only way to get fit. But when a hectic work week or travel catches up, 
                you miss a few sessions, feel like a failure.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col bg-gray-900 p-6 rounded-lg space-y-3">
              <div className="flex items-center gap-3">
                <FaUtensils className="text-[#67bc2a] w-6 h-6 flex-shrink-0" />
                <h3 className="text-lg font-semibold font-playfair text-white">The Food Prison</h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base pl-9">
                Rigid meal timings and strict recipes don't survive uncertain work schedules or back-to-back meetings.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col bg-gray-900 p-6 rounded-lg space-y-3">
              <div className="flex items-center gap-3">
                <FaBolt className="text-[#67bc2a] w-6 h-6 flex-shrink-0" />
                <h3 className="text-lg font-semibold font-playfair text-white">The "Intensity" Obsession</h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base pl-9">
                Most plans obsess over "the mirror," imposing a body building mindset that ignores your real-world struggles. 
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}