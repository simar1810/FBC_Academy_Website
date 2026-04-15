import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { FaWhatsapp } from 'react-icons/fa';


const RefundPolicy = () => {
  return (
    <>
      <Navbar />

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

      <main className="pt-20">

        <section className="max-w-4xl mx-auto px-4 md:px-10 py-16">

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-playfair font-semibold mb-8">
            Refund & Cancellation
          </h1>

          {/* Intro */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            Please read this Refund & Cancellation policy carefully before using this website.
          </p>

          <p className="text-gray-600 mb-10 leading-relaxed text-justify">
            <span className="font-semibold text-black">
              Fit Body Culture (fbc_academy)
            </span>{" "}
            is committed to providing the best services at the best pricing. Unfortunately, we cannot offer refunds or exchanges on the purchase or subscription of any membership plan.
          </p>

          {/* Section 1 */}
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Why No Refunds?
            </h2>

            <p className="text-gray-600 leading-relaxed text-justify">
              We believe in delivering value through transparency and thorough understanding. Before you sign up for the Total Body Re-Set Program, we conduct an in-depth assessment of your current health, goals, and challenges. This ensures that you fully understand the program structure, expectations, and outcomes.
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed text-justify">
              By clarifying the journey beforehand, we prioritize your confidence in choosing the program, leaving no room for confusion or uncertainty.
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed text-justify">
              Additionally, our personalized coaching approach involves significant time, effort, and resources, which begin as soon as you sign up. This makes it challenging to offer refunds while maintaining the integrity of the services we provide.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 ">
              Adjustments to Membership Plan
            </h2>

            <p className="text-gray-600 leading-relaxed text-justify">
              In case you wish to change the duration of your membership plan, this may be discussed and adjusted after consultation with your assigned coach.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Medical Emergencies
            </h2>

            <p className="text-gray-600 leading-relaxed">
              If you are unable to continue the program due to unforeseen medical emergencies, such cases will be handled on a case-by-case basis.
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              The refund percentage, if applicable, will be at the discretion of Fit Body Culture (fbc_academy) management, based on the specifics of the situation.
            </p>
          </div>

          {/* Closing */}
          <p className="text-[#1142D4] mt-12 text-center font-bold font-playfair leading-relaxed text-xl sm:text-2xl">
            Thank you for your understanding and trust in{" "}
            <span className="font-semibold">
              Fit Body Culture (fbc_academy)
            </span>.
          </p>

        </section>

      </main>

      <Footer />
    </>
  )
}

export default RefundPolicy