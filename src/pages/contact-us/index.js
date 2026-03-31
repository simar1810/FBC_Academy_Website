import ContactHero from "@/components/contact/ContactHero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar"
import { FaWhatsapp } from 'react-icons/fa';

const ContactUs = () =>{
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
            <ContactHero/>
            <Footer/>
          </main>

        </>
    )
}

export default ContactUs;