"use client"
import { motion } from "framer-motion"
import Link from "next/link"

const BodyJournal = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-10 py-16 space-y-16 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative h-[300px] md:h-[420px] rounded-lg overflow-hidden group"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            src="/images/drive/transformations/5_Vishal_Sharma.jpg"
            alt="FBC client transformation"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/35" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-5"
        >
          <p className="text-[#1142D4] uppercase text-xs tracking-wider font-bold">
            The FBC Method in Action
          </p>

          <h2 className="text-3xl md:text-5xl font-playfair font-bold leading-snug text-gray-900">
            Results built on
            <br />
            consistency, not intensity
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            These transformations come from busy professionals, founders, and
            parents who followed a simplified system: clear training, practical
            nutrition, and habits that survive real life. No crash diets. No
            guesswork. Just measurable progress over time.
          </p>

          <Link
            href="/plans"
            className="inline-block text-[#1142D4] border-b-2 border-[#1142D4] pb-1 text-sm font-bold hover:opacity-80 transition"
          >
            EXPLORE PROGRAMS
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default BodyJournal
