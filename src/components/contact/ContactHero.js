import { useState } from "react"
import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa"
import {
  SOCIAL_LINKS,
  APP_STORE_URL,
  PLAY_STORE_URL,
  WHATSAPP_URL,
} from "@/data/siteLinks"

export default function ContactHero() {
  const [formData, setFormData] = useState({
    name: "",
    category: "Professional seeking Transformation",
    struggle: "Lack of time",
    city: "",
    age: "",
    phone: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const GOOGLE_SHEETS_WEBHOOK_URL =
        process.env.NEXT_PUBLIC_CONTACT_LEADS_WEBHOOK || ""

      if (GOOGLE_SHEETS_WEBHOOK_URL) {
        await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            source: "Contact Us Page",
          }),
        })
      }
    } catch (error) {
      console.error("Error submitting to Google Sheets:", error)
    }

    const message =
      "*New Discovery Form Submission*\n\n" +
      "*Name:* " +
      formData.name +
      "\n" +
      "*Category:* " +
      formData.category +
      "\n" +
      "*Struggle:* " +
      formData.struggle +
      "\n" +
      "*City:* " +
      formData.city +
      "\n" +
      "*Age:* " +
      formData.age +
      "\n" +
      "*WhatsApp:* " +
      formData.phone

    const encodedMessage = encodeURIComponent(message.trim())
    const url = `https://wa.me/919923646881?text=${encodedMessage}`
    window.open(url, "_blank")

    setFormData({
      name: "",
      category: "Professional seeking Transformation",
      struggle: "Lack of time",
      city: "",
      age: "",
      phone: "",
    })
  }

  const socials = [
    { Icon: FaInstagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
    { Icon: FaYoutube, href: SOCIAL_LINKS.youtube, label: "YouTube" },
    { Icon: FaLinkedinIn, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
    { Icon: FaWhatsapp, href: WHATSAPP_URL, label: "WhatsApp" },
  ]

  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#f9fafb] font-sans px-4 py-16 md:px-12">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-start gap-12 md:gap-8">
        <div className="flex-1 flex flex-col">
          <p className="text-[#1142D4] font-medium mb-4 font-playfair">
            TRANSFORMATION AWAITS
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
            Start your <span className="text-[#1142D4]">Journey</span>
          </h1>

          <p className="text-gray-600 mb-10 max-w-md text-justify">
            Take the first step towards your fitness transformation with{" "}
            <span className="font-bold text-[#67bc2a]">Ankush S. Bhaskar</span>.
            High-performance coaching built for busy professionals.
          </p>

          <div className="bg-white shadow-md rounded-2xl p-6 max-w-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1142D4]/10 text-[#1142D4]">
                ✔
              </div>
              <h3 className="font-semibold">Why a Discovery Call?</h3>
            </div>

            <p className="text-gray-600 text-sm mb-6">
              A focused 15-minute session to audit your current lifestyle,
              identify barriers, and outline a clear roadmap. Zero pressure.
              Pure strategy.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1142D4]/10 text-[#1142D4]">
                  ✉
                </div>
                <div>
                  <p className="text-sm font-medium">Email us</p>
                  <a
                    href={SOCIAL_LINKS.email}
                    className="text-gray-600 text-sm hover:text-[#1142D4]"
                  >
                    enquiry.teamfbc@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1142D4]/10 text-[#1142D4]">
                  📞
                </div>
                <div>
                  <p className="text-sm font-medium">Phone / WhatsApp</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 text-sm hover:text-[#1142D4]"
                  >
                    +91 99236 46881
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1142D4]/10 text-[#1142D4]">
                  📍
                </div>
                <div>
                  <p className="text-sm font-medium">HQ Location</p>
                  <p className="text-gray-600 text-sm">Mumbai, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="mt-8 max-w-md">
            <p className="text-sm font-semibold text-gray-900 mb-3">
              Follow FBC
            </p>
            <div className="flex flex-wrap gap-3">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-800 hover:border-[#1142D4] hover:text-[#1142D4] transition shadow-sm"
                >
                  <item.Icon className="w-4 h-4" />
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* App downloads */}
          <div className="mt-8 max-w-md">
            <p className="text-sm font-semibold text-gray-900 mb-3">
              Download the FBC Academy App
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on the App Store"
              >
                <img
                  src="/appStore.png"
                  alt="Download on the App Store"
                  className="h-12 w-auto"
                />
              </a>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get it on Google Play"
              >
                <img
                  src="/playstore.png"
                  alt="Get it on Google Play"
                  className="h-12 w-auto"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full">
          <div className="bg-white shadow-lg rounded-2xl p-8 w-full">
            <h2 className="text-xl font-semibold mb-2">Discovery Form</h2>
            <p className="text-gray-500 text-sm mb-6">
              All information is kept strictly confidential
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm mb-1 block">Full Name</label>
                  <input
                    required
                    type="text"
                    className="w-full p-3 rounded-lg bg-[#1142D4]/5 outline-none"
                    placeholder="John Doe"
                    onChange={handleChange}
                    name="name"
                    value={formData.name}
                  />
                </div>

                <div>
                  <label className="text-sm mb-1 block">Category</label>
                  <select
                    className="w-full p-3 rounded-lg bg-[#1142D4]/5 outline-none"
                    onChange={handleChange}
                    name="category"
                    value={formData.category}
                  >
                    <option>Professional seeking Transformation</option>
                    <option>Trainer looking to grow</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm mb-1 block">
                  Your Biggest Struggle
                </label>
                <select
                  className="w-full p-3 rounded-lg bg-[#1142D4]/5 outline-none"
                  onChange={handleChange}
                  name="struggle"
                  value={formData.struggle}
                >
                  <option>Lack of time</option>
                  <option>PCOS/Diabetes/Hypertension</option>
                  <option>Weight loss</option>
                  <option>Low fitness</option>
                  <option>Career growth</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm mb-1 block">City</label>
                  <input
                    required
                    type="text"
                    className="w-full p-3 rounded-lg bg-[#1142D4]/5 outline-none"
                    placeholder="e.g. Mumbai"
                    onChange={handleChange}
                    name="city"
                    value={formData.city}
                  />
                </div>

                <div>
                  <label className="text-sm mb-1 block">Age</label>
                  <input
                    required
                    type="number"
                    className="w-full p-3 rounded-lg bg-[#1142D4]/5 outline-none"
                    placeholder="25"
                    onChange={handleChange}
                    name="age"
                    value={formData.age}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm mb-1 block">WhatsApp Number</label>
                <input
                  required
                  type="tel"
                  className="w-full p-3 rounded-lg bg-[#1142D4]/5 outline-none"
                  placeholder="+91 9876543210"
                  onChange={handleChange}
                  name="phone"
                  value={formData.phone}
                />
              </div>

              <p className="text-xs text-gray-500">
                We value your privacy. No spam. Only program related
                communication.
              </p>

              <button
                type="submit"
                className="w-full py-3 rounded-md bg-[#67bc2a] cursor-pointer text-white flex items-center justify-center gap-2 hover:opacity-90 transition"
              >
                Submit Application →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
