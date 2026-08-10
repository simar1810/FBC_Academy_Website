import { useState } from "react"
import ResourceModal from "./ResourceModal"
import { EBOOKS, TBR_AMAZON_URL } from "@/data/siteLinks"

const ProvenBlueprints = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedEbook, setSelectedEbook] = useState(null)

  const handleOpenModal = (ebook) => {
    setSelectedEbook(ebook)
    setIsModalOpen(true)
  }

  return (
    <section className="w-full bg-white py-20">
      <div className="text-center space-y-4 mb-16 px-4">
        <h2 className="text-3xl md:text-5xl font-playfair font-semibold">
          Proven Blueprints for Busy Professionals
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          Premium eBooks by Ankush S. Bhaskar. Share your details to continue to
          the purchase page.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10">
        {/* Book cards with real photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {EBOOKS.map((ebook) => (
            <button
              key={ebook.id}
              type="button"
              onClick={() => handleOpenModal(ebook)}
              className="group bg-[#F3F3F7] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow cursor-pointer text-left flex flex-col"
            >
              <div className="relative h-[300px] md:h-[340px] overflow-hidden">
                <img
                  src={ebook.image}
                  alt={ebook.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 md:p-8 space-y-3 flex-1 flex flex-col">
                <h3 className="text-lg md:text-xl font-semibold leading-snug">
                  {ebook.title}
                </h3>
                <p className="text-sm text-gray-600 flex-1">
                  {ebook.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-[#1142D4]">
                  <div className="w-5 h-5 rounded-full bg-[#1142D4] flex items-center justify-center text-white text-xs">
                    ✓
                  </div>
                  {ebook.badge}
                  <span className="ml-auto text-[#67bc2a] font-semibold">
                    Get This eBook →
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Published book: Total Body Re-Set */}
        <div className="mt-10 bg-gray-950 rounded-2xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-8 items-center">
          <img
            src="/images/ebooks/tbr_promo.jpg"
            alt="Total Body Re-Set book, available on Amazon, Flipkart, Google and Amazon Kindle"
            className="w-48 md:w-60 rounded-lg shadow-lg mx-auto"
          />
          <div className="text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#67bc2a] mb-2">
              Published Book · Released Worldwide
            </p>
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-white">
              Total Body Re-Set
            </h3>
            <p className="text-white/70 text-sm md:text-base mt-2 max-w-xl">
              A simplified fitness guide for busy professionals to own a high
              performing mind and body. A complete fitness course in a book:
              exercise, nutrition, recovery, and lifestyle habits for real
              life.
            </p>
          </div>
          <a
            href={TBR_AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#67bc2a] text-white px-8 py-3 rounded-md font-semibold hover:bg-green-600 transition mx-auto md:mx-0"
          >
            Buy on Amazon
          </a>
        </div>
      </div>

      <ResourceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        ebook={selectedEbook}
      />
    </section>
  )
}

export default ProvenBlueprints
