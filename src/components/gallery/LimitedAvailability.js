import { motion } from "framer-motion";

const LimitedAvailability = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-10 py-20 overflow-hidden">

      {/* Square / Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-[#F3F3F7] rounded-xl p-8 md:p-14 h-[300px] sm:h-[400px] flex flex-col items-center justify-center text-center space-y-6 shadow-sm border border-gray-100"
      >

        {/* Top Text */}
        <p className="text-[#434655] text-xs md:text-sm tracking-wide uppercase font-bold">
          Limited availability for elite personal coaching
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-7xl font-playfair font-bold text-gray-900">
          Start Your Chapter
        </h2>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">

          {/* Primary Button */}
          <a href="/contact-us" className="bg-[#1142D4] text-white px-8 py-3 rounded-md hover:bg-blue-800 transition font-bold shadow-md w-full sm:w-auto text-center">
            Apply now
          </a>

          {/* Secondary Button */}
          <a href="/plans" className="bg-[#67bc2a] text-white px-8 py-3 rounded-md hover:bg-green-700 transition font-bold shadow-md w-full sm:w-auto text-center">
            View Programs
          </a>

        </div>

      </motion.div>
    </section>
  )
}

export default LimitedAvailability