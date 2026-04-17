import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import EliteBlueprints from "@/components/resource/EliteBlueprints"
import FitnessPartnerSection from "@/components/resource/FitnessPartnerSection "
import LatestResearch from "@/components/resource/LatestResearch"
import PerformanceCTA from "@/components/resource/PerformanceCTA "
import ProvenBlueprints from "@/components/resource/ProvenBlueprints "
import ResourcesHero from "@/components/resource/ResourcesHero"
import { FaWhatsapp } from 'react-icons/fa';


const Resources = () =>
{
    return(
        <>
          
          <Navbar/>

           <a
            // href="https://wa.me/9625691566?text=Hey%2C%20I%27m%20here%20from%20your%20website%21"
            href = "#"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed right-4 bottom-12 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp className="w-6 h-6" />
          </a>

          <main className="pt-16">

            <ResourcesHero/>
            <LatestResearch/>
            <EliteBlueprints/>
            <ProvenBlueprints/>
            <PerformanceCTA/>
            <FitnessPartnerSection/>
            <Footer/>
          </main>
        </>
    )
}


export default Resources