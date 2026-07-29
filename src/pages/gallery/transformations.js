import Footer from "@/components/Footer"
import BodyJournal from "@/components/gallery/BodyJournal"
import GalleryHero from "@/components/gallery/GalleryHero"
import LimitedAvailability from "@/components/gallery/LimitedAvailability"
import Navbar from "@/components/Navbar"
import { FaWhatsapp } from "react-icons/fa"

const Transformations = () => {
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

      <main className="pt-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-4">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4">
            Real <span className="text-[#1142D4]">Transformations</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Proof of the FBC Method. Real clients, real physiques, and results
            built through consistency, simplified training, and nutrition that
            fits a demanding life.
          </p>
        </div>

        <GalleryHero
          showHeading={false}
          initialCount={9}
        />
        <BodyJournal />
        <LimitedAvailability />
        <Footer />
      </main>
    </>
  )
}

export default Transformations
