"use client"

import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Founder", path: "/about-founder" },
    { label: "Programs", path: "/plans" },
    { label: "Gallery", path: "/gallery" },
    { label: "Resources", path: "/resources" },
  ]

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/images/fbc_logo.jpeg"
              alt="Fitness"
              className="w-16 h-16 object-contain"
            />
            <span className="font-bold text-xl text-gray-800 font-manrope">
              FBC
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-gray-700 hover:text-indigo-600 font-medium font-manrope"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Get Started */}
          <div className="hidden md:block">
            <Link
              href="/contact-us"
              className="bg-indigo-600 text-white px-5 py-2 rounded-2xl hover:bg-indigo-700 transition font-manrope"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <FaTimes className="text-2xl text-gray-700" />
              ) : (
                <FaBars className="text-2xl text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center px-2 pt-2 pb-4 space-y-1">

            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium text-lg font-manrope"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact-us"
              className="w-[80%] text-center bg-[#1142D4] text-white px-3 py-2 rounded-2xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>

          </div>
        </div>
      )}
    </nav>
  )
}