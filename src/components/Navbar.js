// src/components/Navbar.js
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdFitnessCenter } from "react-icons/md";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
  { label: "Home", path: "/" },
  { label: "Founder", path: "/about-founder" },
  { label: "Programs", path: "/plans" },
  // { label: "Gallery", path: "/gallery" },
  // { label: "Resource", path: "/resources" },
];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link href = "/"><div className="flex-shrink-0 flex items-center space-x-2">
            {/* <MdFitnessCenter className="text-2xl text-indigo-600" /> */}
            <img src="/images/fbc_logo.jpeg" alt="Fitness" className="w-16 h-16 object-contain"/>
            <span className="font-bold text-xl text-gray-800 font-manrope">FBC</span>
          </div></Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:space-x-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={item.path}
                className="text-gray-700 hover:text-indigo-600 font-medium font-manrope"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Get Started Button */}
          <div className="hidden md:block">
            <a
              href="/contact-us"
              className="bg-indigo-600 text-white px-5 py-2 rounded-2xl hover:bg-indigo-700 transition font-manrope"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="focus:outline-none">
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
              <a
                key={item}
                href={item.path}
                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium text-lg font-manrope"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/contact-us"
              className="block font-manrope w-[80%] text-center bg-[#1142D4] text-white px-3 py-2 rounded-2xl hover:bg-[#1142D4] font-medium"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}