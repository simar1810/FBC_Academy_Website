import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import EliteBlueprints from "@/components/resource/EliteBlueprints"
import FitnessPartnerSection from "@/components/resource/FitnessPartnerSection "
import LatestResearch from "@/components/resource/LatestResearch"
import PerformanceCTA from "@/components/resource/PerformanceCTA "
import ProvenBlueprints from "@/components/resource/ProvenBlueprints "
import ResourcesHero from "@/components/resource/ResourcesHero"
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';


const Resources = () => {
  return (
    <>

      <Navbar />

      <a
        href="https://wa.me/919923646881?text=Hey%2C%20I%27m%20interested%20in%20your%20coaching%20programs%21"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-12 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>

      <main className="pt-16 overflow-hidden">

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
          <ResourcesHero />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }}>
          <LatestResearch />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }}>
          <EliteBlueprints />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }}>
          <ProvenBlueprints />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }}>
          <PerformanceCTA />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }}>
          <FitnessPartnerSection />
        </motion.div>

        <Footer />
      </main>
    </>
  )
}

export default Resources