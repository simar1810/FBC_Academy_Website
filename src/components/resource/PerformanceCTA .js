"use client"
import { useState } from "react"
import { EBOOK_PURCHASE_URLS, EBOOKS } from "@/data/siteLinks"

const PerformanceCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    ebookId: EBOOKS[0]?.id || "",
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
            source: "Resources Performance CTA",
          }),
        })
      }

      const purchaseUrl = EBOOK_PURCHASE_URLS[formData.ebookId] || ""
      setFormData({
        name: "",
        email: "",
        phone: "",
        ebookId: EBOOKS[0]?.id || "",
      })

      if (purchaseUrl) {
        window.location.href = purchaseUrl
        return
      }

      alert(
        "Thanks! Your details are saved. We will share the purchase link shortly."
      )
    } catch (error) {
      console.error(error)
      alert("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="w-full py-20 px-4 md:px-10 flex justify-center bg-white">
      <div className="w-full max-w-2xl bg-[#1D4ED8] text-white rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-lg">
        <h2 className="text-2xl md:text-4xl font-playfair font-semibold text-center">
          Get the premium eBook toolkit
        </h2>
        <p className="mt-3 text-sm text-white/85 text-center">
          Not free downloads. Share your details to continue to the purchase
          page.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full md:w-1/2 bg-white/10 border border-white/40 px-4 py-3 text-white placeholder-white/70 outline-none rounded-xl"
            />
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full md:w-1/2 bg-white/10 border border-white/40 px-4 py-3 text-white placeholder-white/70 outline-none rounded-xl"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              required
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Contact Number"
              className="w-full md:w-1/2 bg-white/10 border border-white/40 px-4 py-3 text-white placeholder-white/70 outline-none rounded-xl"
            />
            <select
              name="ebookId"
              value={formData.ebookId}
              onChange={handleChange}
              className="w-full md:w-1/2 bg-white text-[#1D4ED8] border border-white/40 px-4 py-3 outline-none rounded-xl"
            >
              {EBOOKS.map((ebook) => (
                <option key={ebook.id} value={ebook.id}>
                  {ebook.title.length > 48
                    ? `${ebook.title.slice(0, 48)}...`
                    : ebook.title}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 bg-white text-[#1D4ED8] py-3 font-medium rounded-xl hover:bg-white/90 transition disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Continue to Purchase"}
          </button>
        </form>

      </div>
    </section>
  )
}

export default PerformanceCTA
