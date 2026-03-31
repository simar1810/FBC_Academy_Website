import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import PlansHero from '@/components/plans/PlansHero'
import PlansPricing from '@/components/plans/PlansPricing';
import { FaWhatsapp } from 'react-icons/fa';
const Plans = () =>
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
          <main>
            <PlansHero/>
            <PlansPricing/>
            <Footer/>
          </main>
        </>
    )
}

export default Plans;