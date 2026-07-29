import ContactHero from "@/components/contact/ContactHero"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { FaWhatsapp } from "react-icons/fa"
import { WHATSAPP_URL } from "@/data/siteLinks"

const ContactUs = () => {
  return (
    <>
      <Navbar />

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-12 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-[60]"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>

      <main className="pt-16 overflow-hidden">
        <ContactHero />
        <Footer />
      </main>
    </>
  )
}

export default ContactUs
