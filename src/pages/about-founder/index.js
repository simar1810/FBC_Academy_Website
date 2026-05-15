import Footer from '@/components/Footer'
import FounderHero from '@/components/founder/FounderHero'
import GlobalAuthority from '@/components/founder/GlobalAuthority'
import JourneySection from '@/components/founder/JourneySection'
import MissionSection from '@/components/founder/MissionSection'
import Navbar from '@/components/Navbar'
import EvolveSection from '@/components/founder/EvolveSection'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';
import AchievementsSection from '@/components/founder/AchievementsSection'
import { motion } from 'framer-motion';

const AboutFounder = () => {
  return (
    <>
      <Navbar/>

      <a
        href="https://wa.me/919923646881?text=Hey%2C%20I%27m%20interested%20in%20your%20coaching%20programs%21"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-12 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
        aria-label="Chat on WhatsApp">
          <FaWhatsapp className="w-6 h-6" />
      </a>

      <main className="pt-16 overflow-hidden">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
          <FounderHero/>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }}>
          <JourneySection/>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }}>
          <AchievementsSection/>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }}>
          <GlobalAuthority/>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }}>
          <MissionSection/>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }}>
          <EvolveSection/>
        </motion.div>
        
        
        <Footer/>
      </main>
    </>
  )
}

export default AboutFounder
