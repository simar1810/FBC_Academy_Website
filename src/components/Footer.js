"use client"
import React from "react"
import Link from "next/link"
import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa"
import {
  SOCIAL_LINKS,
  APP_STORE_URL,
  PLAY_STORE_URL,
} from "@/data/siteLinks"

const Footer = () => {
  const explore = [
    { title: "Programs Details", href: "/plans" },
    { title: "Founder Bio", href: "/about-founder" },
    { title: "Success Stories", href: "/gallery/transformations" },
    { title: "Blog", href: "/resources" },
  ]

  const legal = [
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Terms of Service", href: "/terms-and-conditions" },
    { title: "Disclaimer", href: "/terms-and-conditions" },
    { title: "Refund Policy", href: "/RefundPolicy" },
  ]

  const socials = [
    { Icon: FaInstagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
    { Icon: FaYoutube, href: SOCIAL_LINKS.youtube, label: "YouTube" },
    { Icon: FaLinkedinIn, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
    { Icon: FaEnvelope, href: SOCIAL_LINKS.email, label: "Email" },
  ]

  return (
    <footer className="bg-black pt-24 pb-12 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white flex items-center gap-2">
              <div className="w-13 h-13 bg-white rounded-full flex items-center justify-center">
                <img
                  src="/images/fbc_logo.jpeg"
                  alt="Fitness"
                  className="w-20 h-20 object-contain mix-blend-multiply"
                />
              </div>
              FBC
            </h2>
            <p className="text-white/70 leading-relaxed text-sm">
              Redefining elite fitness for the professional world.
              <br />
              Sustainable. Practical. Result-Driven.
            </p>
            <div className="flex gap-4">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#1142D4] transition-all"
                >
                  <item.Icon size={18} />
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on the App Store"
              >
                <img
                  src="/appStore.png"
                  alt="Download on the App Store"
                  className="h-10 w-auto"
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
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>

          <div className="space-y-8 lg:ml-12">
            <h4 className="text-xl font-bold text-white uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-4">
              {explore.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#67bc2a] flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#67bc2a] scale-0 group-hover:scale-100 transition-transform" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xl font-bold text-white uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-4">
              {legal.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#67bc2a] flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#67bc2a] scale-0 group-hover:scale-100 transition-transform" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xl font-bold text-white uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-4 text-white/70 text-sm">
              <li>
                <a
                  href={SOCIAL_LINKS.email}
                  className="hover:text-[#67bc2a] transition"
                >
                  enquiry.teamfbc@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919923646881"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#67bc2a] transition"
                >
                  +91 99236 46881
                </a>
              </li>
              <li>Mumbai, India</li>
              <li>
                <Link
                  href="/contact-us"
                  className="hover:text-[#67bc2a] transition"
                >
                  Contact page →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 space-y-8">
          <div className="flex flex-col items-center justify-between gap-2">
            <p className="text-white/50 text-sm">
              &copy; 2026 Fit Body Culture By Ankush S. Bhaskar. All rights
              reserved.
            </p>
            <div className="flex gap-3 text-xs text-gray-500">
              <span>Mumbai</span>
              <span>Dubai</span>
              <span>Global Online</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
