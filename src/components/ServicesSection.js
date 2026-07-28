"use client";

import React from "react";
import { FiActivity, FiRefreshCw, FiShield, FiStar, FiTrendingUp, FiMove, FiEye, FiBriefcase, FiExternalLink, FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

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
        "Doubled deadlift strength from 60kg to 120kg using home-based workouts.",
      icon: <FiTrendingUp  className="w-8 h-8" />,
      color: "bg-cyan-50",
      iconColor: "text-[#67bc2a]",
      verification: "Strength Progress Data",
    },
    {
      title: "Elite Performance",
      description:
        "Guided individual to complete 100km Himalayan Treks and double their strength, all through strategic training and nutrition.",
      icon: <FiStar  className="w-8 h-8" />,
      color: "bg-cyan-50",
      iconColor: "text-[#67bc2a]",
      verification: "Elite Case Documentation",
    },
    {
      title: "Mobility & Longevity",
      description:
        "Lost 25 kgs, significantly improved bone health, and restored pain-free knee mobility for a high-level Pharma Executive.",
      icon: <FiMove  className="w-8 h-8" />,
      color: "bg-cyan-50",
      iconColor: "text-[#67bc2a]",
      verification: "Mobility Assessment Data",
    },
    {
      title: "Aesthetic Excellence",
      description:
        "Achieved a \"dream body\" transformation for an Actor & Model, maintaining a stage-ready, shredded physique all year round.",
      icon: <FiEye  className="w-8 h-8" />,
      color: "bg-cyan-50",
      iconColor: "text-[#67bc2a]",
      verification: "Physique Transformation Proof",
    },
    {
      title: "Corporate Athlete",
      description:
        "Achieved a complete physical transformation while balancing a demanding schedule as a Business Analyst at JP Morgan.",
      icon: <FiBriefcase className="w-8 h-8" />,
      color: "bg-cyan-50",
      iconColor: "text-[#67bc2a]",
      verification: "Corporate Case Study",
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="w-full mb-16 px-6 md:px-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
      >
        <div className="text-sm md:text-md flex flex-col gap-3">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-gray-900">
            Real Results. <span className="text-[#67bc2a]">Real People.</span> Real Reversals.
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            We don't just track weight; we track quality of life. From C-Suite executives to "Household CEOs," here is the evidence of the FBC Method in action.
          </p>
        </div>

        <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto mt-4 md:mt-0">
          <a
            href="/gallery/transformations"
            className="px-6 py-3 text-sm font-semibold bg-[#1142D4] text-white flex items-center gap-2 rounded-md hover:bg-blue-800 transition shadow-md"
          >
            View all case studies <FiExternalLink className="w-4 h-4" />
          </a>
        </div>
      </motion.div>

      {/* Slider */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="container mx-auto px-4"
      >
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          loop={true}
          autoplay={{
           delay: 0,              // continuous
           disableOnInteraction: false,
          }}
          speed={4000} 
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
            1280: { slidesPerView: 4.5 },
          }}
          className="pb-4"
        >
          {reasons.map((item, index) => (
            <SwiperSlide key={index} className="h-auto">
              <div className="p-8 rounded-2xl border shadow-lg mb-2 border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group h-full bg-white flex flex-col">
                
                {/* Icon */}
                <div
                  className={`${item.color} ${item.iconColor} w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-transform group-hover:rotate-12`}
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 font-playfair text-gray-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 flex-grow text-sm leading-relaxed">{item.description}</p>

                {/* Footer */}
                <p className="flex items-center gap-2 text-[#1142D4] font-medium text-xs mt-6 pt-4 border-t border-gray-100">
                  <FiCheckCircle className="w-4 h-4" />
                  {item.verification}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default ServicesSection;