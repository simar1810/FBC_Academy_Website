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

const AboutFounder = () => {
  return (
    <>
      <Navbar/>

      <a
         // href="https://wa.me/9625691566?text=Hey%2C%20I%27m%20here%20from%20your%20website%21"
        href = "#"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-12 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
        aria-label="Chat on WhatsApp">
          <FaWhatsapp className="w-6 h-6" />
      </a>

      <main className="pt-16">
        <FounderHero/>
        <JourneySection/>
        <GlobalAuthority/>
        <MissionSection/>
        <EvolveSection/>
        <AchievementsSection/>
        <Footer/>
      </main>
    </>
  )
}

export default AboutFounder
