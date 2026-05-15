"use client"
import { motion } from "framer-motion";

const BodyJournal = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-10 py-16 space-y-16 overflow-hidden">

      {/* 🔹 Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* Left Image */}
       <motion.div 
         initial={{ opacity: 0, x: -50 }}
         whileInView={{ opacity: 1, x: 0 }}
         viewport={{ once: true, margin: "-100px" }}
         transition={{ duration: 0.6 }}
         className="relative h-[300px] md:h-[420px] rounded-lg overflow-hidden group"
       >
           {/* Image */}
           <motion.img
             whileHover={{ scale: 1.05 }}
             transition={{ duration: 0.5 }}
             src="/images/Client/client_6.jpg"
             alt=""
             className="w-full h-full object-cover"
           />

           {/* Dark Overlay */}
           <div className="absolute inset-0 bg-black/40"></div>

       </motion.div>

        {/* Right Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-5"
        >
          <p className="text-[#1142D4] uppercase text-xs tracking-wider font-bold">
            Institutional Standard
          </p>

          <h2 className="text-3xl md:text-5xl font-playfair font-bold leading-snug text-gray-900">
            Your body is the Journal <br />
            of your discipline
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            We track every metric, monitor every variable, and curate the
            <br className="hidden md:block"/>
            path to your peak. This is not just fitness — it is engineering.
          </p>

          <button className="text-[#1142D4] border-b-2 border-[#1142D4] pb-1 text-sm font-bold hover:opacity-80 transition">
             REVIEW THE METHODOLOGY
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default BodyJournal