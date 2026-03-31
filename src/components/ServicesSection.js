"use client";

import React from "react";
import { FiActivity, FiHeart, FiZap, FiExternalLink, FiCheckCircle } from "react-icons/fi";
import { FiRefreshCw,FiShield, FiStar, FiTrendingUp, FiMove, FiEye, FiBriefcase  } from "react-icons/fi";


// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const ServicesSection = () => {
  const reasons = [
    {
      title: "Clinical Reversal",
      description:
        "HbA1c dropped from 10.1 to 7.9 in 2 months through strategic exercise, nutrition and lifestyle modifications.",
      icon: <FiActivity className="w-8 h-8" />,
      color: "bg-cyan-50",
      iconColor: "text-[#67bc2a]",
      verification: "Verified Lab Results",
    },
    {
      title: "Lifestyle Transformation",
      description:
        "Reversed Stage 2 Hypertension (175/100 BP) and lost 27 kgs while managing a high-stress corporate role.",
      icon: <FiRefreshCw className="w-8 h-8" />,
      color: "bg-cyan-50",
      iconColor: "text-[#67bc2a]",
      verification: "Client Transformation Story",
    },
    {
      title: "Condition Management",
      description:
        "Overcame PCOD symptoms and established a permanent preventive lifestyle.",
      icon: <FiShield className="w-8 h-8" />,
      color: "bg-cyan-50",
      iconColor: "text-[#67bc2a]",
      verification: "Symptom Tracking Data",
    },
    {
      title: "Physical Performance",
      description:
        "Doubled deadlift strength 2x — from 60kg to 120kg - using only home-based workouts.",
      icon: <FiTrendingUp  className="w-8 h-8" />,
      color: "bg-cyan-50",
      iconColor: "text-[#67bc2a]",
      verification: "Strength Progress Data",
    },
    {
      title: "Elite Performance",
      description:
        "Guided individual to complete 100km Himalayan Treks and double their strength—all through strategic training.",
      icon: <FiStar  className="w-8 h-8" />,
      color: "bg-cyan-50",
      iconColor: "text-[#67bc2a]",
      verification: "Elite Case Documentation",
    },
    {
      title: "Mobility & Longevity",
      description:
        "Lost 25 kgs, significantly improved bone health, and restored painfree knee mobility.",
      icon: <FiMove  className="w-8 h-8" />,
      color: "bg-cyan-50",
      iconColor: "text-[#67bc2a]",
      verification: "Mobility Assessment Data",
    },
    {
      title: "Aesthetic Excellence",
      description:
        "Achieved a dream body transformation for an Actor & Model, maintaining a stage-ready.",
      icon: <FiEye  className="w-8 h-8" />,
      color: "bg-cyan-50",
      iconColor: "text-[#67bc2a]",
      verification: "Physique Transformation Proof",
    },
    {
      title: "Corporate Athlete",
      description:
        "Achieved a physical transformation while balancing a demanding schedule as a Business Analyst.",
      icon: <FiBriefcase className="w-8 h-8" />,
      color: "bg-cyan-50",
      iconColor: "text-[#67bc2a]",
      verification: "Corporate Case Study",
    },
  ];

  return (
    <section className="py-24 bg-white">
      {/* Header */}
      <div className="w-full mb-16 px-6 md:px-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="text-sm md:text-md flex flex-col gap-2">
          <h2 className="text-4xl font-bold font-playfair">
            The Data-Backed <span className="text-[#67bc2a]">Proof</span>
          </h2>
          <p>
            Clinical-level results through lifestyle optimization, not
            pharmaceutical shortcuts.
          </p>
        </div>

        <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto">
          <a
            href="#case-studies"
            className="px-4 py-2 text-sm bg-indigo-50 text-black flex items-center gap-2 rounded-md hover:bg-indigo-100 transition"
          >
            View all case studies <FiExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Slider */}
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{
           delay: 1000,              // 👈 makes it continuous
           disableOnInteraction: false,
          }}
          speed={3000} 
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reasons.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="p-8 rounded-3xl border shadow-xl mb-2 border-gray-100 transition-all duration-300  hover:-translate-y-2 group h-full">
                
                {/* Icon */}
                <div
                  className={`${item.color} ${item.iconColor} w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-transform group-hover:rotate-12`}
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 font-playfair">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500">{item.description}</p>

                {/* Footer */}
                <p className="flex gap-2 text-gray-400 text-xs mt-4 mb-3">
                  <FiCheckCircle className="w-4 h-4" />
                  {item.verification}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ServicesSection;