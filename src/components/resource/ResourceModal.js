import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { EBOOK_PURCHASE_URLS } from "@/data/siteLinks"

export default function ResourceModal({ isOpen, onClose, ebook }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const GOOGLE_SHEETS_WEBHOOK_URL =
        process.env.NEXT_PUBLIC_EBOOK_LEADS_WEBHOOK || ""

      if (GOOGLE_SHEETS_WEBHOOK_URL) {
        await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            ebookId: ebook?.id || "",
            ebookTitle: ebook?.title || "",
            source: "Resources eBook Lead",
          }),
        })
      }

      const purchaseUrl = EBOOK_PURCHASE_URLS[ebook?.id] || ""

      setFormData({ name: "", email: "", phone: "" })

      if (purchaseUrl) {
        window.location.href = purchaseUrl
        return
      }

      alert(
        "Thanks! Your details are saved. We will share the purchase link shortly."
      )
      onClose()
    } catch (error) {
      console.error("Error submitting ebook lead:", error)
      alert("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen || !ebook) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden relative"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-black z-10 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full"
            aria-label="Close"
          >
            ✕
          </button>

          <div className="p-8 max-h-[90vh] overflow-y-auto">
            <p className="text-[#1142D4] text-xs font-bold uppercase tracking-wider mb-2">
              Premium eBook
            </p>
            <h2 className="text-2xl font-semibold mb-2 font-playfair">
              {ebook.title}
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Enter your details to continue to the purchase page. These are not
              free downloads.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm mb-1 block">Full Name</label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-[#1142D4]/5 outline-none"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="text-sm mb-1 block">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-[#1142D4]/5 outline-none"
                  placeholder="you@email.com"
                />
              </div>

              <div>
                <label className="text-sm mb-1 block">Contact Number</label>
                <input
                  required
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-[#1142D4]/5 outline-none"
                  placeholder="+91 9876543210"
                />
              </div>

              <p className="text-xs text-gray-500">
                We value your privacy. No spam. Only purchase and program
                related communication.
              </p>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 mt-2 rounded-md bg-[#67bc2a] cursor-pointer text-white flex items-center justify-center gap-2 hover:opacity-90 transition disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Continue to Purchase →"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
