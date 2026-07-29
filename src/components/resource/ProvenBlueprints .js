import { useState } from "react"
import ResourceModal from "./ResourceModal"
import { EBOOKS } from "@/data/siteLinks"

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

      <div className="max-w-7xl mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        {EBOOKS.map((ebook, index) => {
          const rotate =
            index % 2 === 0
              ? "-rotate-3 md:-rotate-6"
              : "rotate-3 md:rotate-6"

          return (
            <button
              key={ebook.id}
              type="button"
              onClick={() => handleOpenModal(ebook)}
              className="bg-[#F3F3F7] p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center cursor-pointer hover:shadow-xl transition-shadow rounded-xl text-left"
            >
              <div className="w-full md:w-1/3 relative h-[240px] md:h-[220px] flex justify-center">
                <img
                  src={ebook.image}
                  alt={ebook.title}
                  className={`w-[70%] md:w-full h-full object-cover object-top ${rotate} rounded-lg shadow-lg transition duration-300 hover:scale-105`}
                />
              </div>

              <div className="w-full md:w-2/3 space-y-4 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-semibold leading-snug">
                  {ebook.title}
                </h3>
                <p className="text-sm text-gray-600">{ebook.description}</p>
                <div className="flex items-center justify-center md:justify-start gap-2 text-sm font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#1142D4] flex items-center justify-center text-white text-xs">
                    ✓
                  </div>
                  {ebook.badge}
                </div>
              </div>
            </button>
          )
        })}
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
