"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdFitnessCenter } from "react-icons/md";
import { useRouter } from "next/navigation";
import { FiMail } from "react-icons/fi";
import { FaEnvelope } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {

    const explore = [
        { title: "Programs Details", href: "#" },
        { title: "Founder Bio", href: "#" },
        { title: "Success Stories", href: "#" },
        { title: "Blog", href: "#" },];
    
    const legal = [
        {title:"Privacy Policy", href: "#"},
        {title: "Terms of Service", href :"#"},
        {title: "Disclaimer", href:"#"},
    ]

    const router = useRouter();

    return (
        <footer className="bg-black pt-24 pb-12 relative overflow-hidden">

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Brand Column */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-white flex items-center gap-2">
                            <div className="w-13 h-13 bg-white rounded-full flex items-center justify-center">
                                 {/* <MdFitnessCenter className="text-2xl text-indigo-600" /> */}
                                 <img src="/images/fbc_logo.jpeg" alt="Fitness" className="w-20 h-20 object-contain mix-blend-multiply"/> 
                            </div>
                            FBC
                        </h2>
                        <p className="text-white/70 leading-relaxed text-sm">
                            Redefining elite fitness for the professinal world.<br/>Sustainable. Practical. Result - Driven.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { Icon: FaInstagram, href: "#" },
                                { Icon: FaEnvelope, href: "#" },
                                { Icon: FiMail, href: "#" },
                            ].map((item, i) => (
                                <Link key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-secondary transition-all">
                                    <item.Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div className="space-y-8 lg:ml-12">
                        <h4 className="text-xl font-bold text-white uppercase tracking-wider">Explore</h4>
                        <ul className="space-y-4">
                            {explore.map((link) => (
                                <li key={link.title}>
                                    <Link href={link.href} className="text-white/70 hover:text-secondary flex items-center gap-2 group" onClick={(e) => {
                                        // Check if it's an internal anchor link
                                      if (link.href.startsWith("/#") && window.location.pathname === "/") {
                                         e.preventDefault();
                                         const section = document.getElementById(link.href.replace("/#", ""));
                                         section?.scrollIntoView({ behavior: "smooth" });}}}>
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary scale-0 group-hover:scale-100 transition-transform"></span>
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div className="space-y-8">
                        <h4 className="text-xl font-bold text-white uppercase tracking-wider">Legal</h4>
                        <ul className="space-y-4">
                            {legal.map((link) => (
                                <li key={link.title}>
                                    <Link href={link.href} className="text-white/70 hover:text-secondary flex items-center gap-2 group" onClick={(e) => {
                                        // Check if it's an internal anchor link
                                      if (link.href.startsWith("/#") && window.location.pathname === "/") {
                                         e.preventDefault();
                                         const section = document.getElementById(link.href.replace("/#", ""));
                                         section?.scrollIntoView({ behavior: "smooth" });}}}>
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary scale-0 group-hover:scale-100 transition-transform"></span>
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                <div className="pt-12 border-t border-white/10 space-y-8">
                    <div className="flex flex-col items-center justify-between gap-2">
                        <p className="text-white/50 text-sm">
                            &copy; 2024 Fit Body Culture By Ankush S. Bhaskar. All rights reserved.
                        </p>

                        <div className = "flex gap-3 text-xs text-gray-500">
                            <span>London</span>
                            <span>Mumbai</span>
                            <span>New York</span>
                        </div>
                        
                    </div>

                  {/* <p className="flex flex-row flex-wrap items-center justify-center gap-2 text-white md:text-xl text:sm font-extrabold text-center">
                  Made with <span className="mx-1 text-red-500">❤️</span> by 
                  <img src="https://wellnessz.in/images/WellnessZ.svg" alt="WellnessZ Logo" className="h-3 md:h-7 mx-2 inline-block"/>
                  in India 
                  <img src="https://flagcdn.com/w40/in.png" alt="India Flag" className="h-5 md:h-6 inline-block ml-1 shadow-sm" />
                 </p> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
