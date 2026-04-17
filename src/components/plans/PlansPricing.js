/* eslint-disable @next/next/no-img-element */
export default function PlansPricing() {
  return (
    <section className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-6 py-16 font-sans">
      
      {/* Top Chip */}
      <div className="bg-[#1142D4]/10 text-[#1142D4] px-4 py-1 rounded-full text-sm font-medium mb-6">
        For Individuals
      </div>

      {/* Heading */}
      <h2 className="text-3xl font-playfair md:text-5xl font-bold text-center mb-4">
        Get Fit: Personal Transformations
      </h2>

      {/* Subheading */}
      <p className="text-gray-600 text-center max-w-2xl mb-12">
        Proven protocols to customize your health and physique without sacrificing your professional
        performance
      </p>

      {/* Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-7xl">
        
        {/* CARD 1 */}
        <div className="border-2 border-[#67bc2a] rounded-2xl p-6 flex flex-col justify-between">
          
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <h3 className="font-semibold text-lg">
              7-day <br /> Kickstarter
            </h3>
            <span className="bg-[#1142D4]/10 text-[#1142D4] text-xs px-3 py-1 rounded-md">
              Best Entry
            </span>
          </div>

          {/* Price */}
          <div className="mb-6">
            <div className="flex items-end gap-1">
              <span className="text-3xl">₹</span>
              <span className="text-3xl font-bold">499</span>
              <p className="text-gray-500 text-md">/one-time</p>
            </div>     
          </div>

          {/* Features */}
          <ul className="space-y-3 mb-6 text-sm">
            <li className="flex items-center gap-2">✔ Who it is for: Beginners</li>
            <li className="flex items-center gap-2">✔ 7 Short, High-Impact Videos</li>
            <li className="flex items-center gap-2">✔ Daily Breakthrough Task</li>
            <li className="flex items-center gap-2">✔ Two Premium eBooks</li>
          </ul>

          {/* Button */}
          <button className="bg-[#67bc2a] text-white py-3 rounded-md cursor-pointer">
            Start Now
          </button>
        </div>

        {/* CARD 2 (Most Popular) */}
        <div className="border-2 border-[#67bc2a] rounded-2xl p-6 flex flex-col justify-between relative">
          
          {/* Badge */}
          <div className="absolute top-0 right-0 bg-[#67bc2a] text-white text-xs px-3 py-1 rounded-bl-xl rounded-tr-xl ">
            Most Popular
          </div>

          {/* Header */}
          <h3 className="font-semibold text-lg mb-6">
            28-day Foundation
          </h3>

          {/* Price */}
          <div className="mb-6">
            <div className="flex items-end gap-1">
              <span className="text-3xl">₹</span>
              <span className="text-3xl font-bold">4,999</span>
              <p className="text-gray-500 text-md">/one-time</p>
            </div>     
          </div>

          {/* Features */}
          <ul className="space-y-3 mb-6 text-sm">
            <li className="flex items-center gap-2">✔ Who it is for: Busy Professinals</li>
            <li className="flex items-center gap-2">✔ Baseline Assessment</li>
            <li className="flex items-center gap-2">✔ Foundation Workout Plan</li>
            <li className="flex items-center gap-2">✔ 5 Simple Food Rules</li>
            <li className="flex items-center gap-2">✔ FBC Academy App Access</li>
            <li className="flex items-center gap-2">✔ 2x Live Group Q&A Calls</li>
            <li className="flex items-center gap-2">✔ Free Access to the 7-Day Kickstarter</li>
            <li className="flex items-center gap-2">✔ 2 Premium eBooks</li>
          </ul>

          {/* Button */}
          <button className="bg-[#67bc2a] text-white py-3 rounded-md cursor-pointer">
            Start Now
          </button>
        </div>

        {/* CARD 3 */}
        <div className="border-2 border-[#67bc2a] rounded-2xl p-6 flex flex-col justify-between">
          
          {/* Header */}
          <h3 className="font-semibold text-lg mb-6">
            DIY Library
          </h3>

          {/* Price */}
          <div className="mb-6">
            <div className="flex items-end gap-1">
              <span className="text-3xl">₹</span>
              <span className="text-3xl font-bold">7,999</span>
              <p className="text-gray-500 text-md">/lifetime</p>
            </div>     
          </div>

          {/* Features */}
          <ul className="space-y-3 mb-6 text-sm">
            <li className="flex items-center gap-2">✔ Who it is for: Self Starters</li>
            <li className="flex items-center gap-2">✔ Full Recorded Curriculum</li>
            <li className="flex items-center gap-2">✔ 6-Phase Workout System</li>
            <li className="flex items-center gap-2">✔ 3-Phase Nutrition System</li>
            <li className="flex items-center gap-2">✔ FBC App Access</li>
            <li className="flex items-center gap-2">✔ Monthly Strategy Calls</li>
          </ul>


          {/* Button */}
          <button className="bg-[#67bc2a] border text-white py-3 rounded-md cursor-pointer">
            Start Now
          </button>
        </div>

        {/* CARD 4 */}
        <div className="border-2 border-[#67bc2a] rounded-2xl p-6 flex flex-col justify-between">
          
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <h3 className="font-semibold text-lg">
              Hybrid Coaching
            </h3>
            <span className="bg-black text-white text-xs px-3 py-1 rounded-md">
              Elite
            </span>
          </div>

          {/* Price */}
          <div className="mb-6">
            <div className="flex items-end gap-1">
              <span className="text-3xl">₹</span>
              <span className="text-3xl font-bold">24,999</span>
              <p className="text-gray-500 text-md">/monthly</p>
            </div>     
          </div>

          {/* Features */}
          <ul className="space-y-3 mb-6 text-sm">
            <li className="flex items-center gap-2">✔ Who it is for: High Performers</li>
            <li className="flex items-center gap-2">✔ In-depth Lifestyle & Health Assessment</li>
            <li className="flex items-center gap-2">✔ Tailored Exercise & Nutrition Plans</li>
            <li className="flex items-center gap-2">✔ Daily WhatsApp Support</li>
            <li className="flex items-center gap-2">✔ Tracking & Accountability</li>
            <li className="flex items-center gap-2">✔ FBC App Access</li>
          </ul>

          {/* Button */}
          <button className="bg-[#67bc2a] text-white py-3 rounded-md cursor-pointer">
            Start Now
          </button>
        </div>

      </div>
    </section>
  );
}