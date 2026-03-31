"use client";
import React from "react";
import { FiShield, FiZap, FiAward, FiCheckSquare, FiGlobe   } from "react-icons/fi";
import { FaStar, FaMicrophoneAlt } from "react-icons/fa";

const GlobalAuthority = () => {
  const reasons = [
    {
      title: "National-Level Athlete",
      description: " Former competitor and Mr. Chandigarh 2013 (IBBF).",
      color: "bg-white",
      iconColor: "text-[#67bc2a]",
    },
    {
      title: "Industry Authority",
      description: "Invited to Judge a National Bodybuilding Event (Valor Classic 2023, Mumbai).",
      color: "bg-white",
      iconColor: "text-[#67bc2a]",
    },
    {
      title: "World PhD Chakra Awardee",
      description: "The only fitness coach representing India among 21 doctors and medical experts in a global talk on preventive healthcare.",
      color: "bg-white",
      iconColor: "text-[#67bc2a]",
    },
    {
      title: "Global Speaker",
      description: " I have been invited to deliver keynote talks at organizations like Brahmakumaris, and Trainer’s Growth Conclave (Dubai) ",
      color: "bg-white",
      iconColor: "text-[#67bc2a]",
    },
  ];

  // Function to get icon based on title
  const getIcon = (title) => {
    switch (title) {
      case "National-Level Athlete":
        return <FiAward  className="w-8 h-8" />;
      case "Industry Authority":
        return <FiCheckSquare  className="w-8 h-8" />;
      case "World PhD Chakra Awardee":
        return <FiGlobe  className="w-8 h-8" />;
      case "Global Speaker":
        return <FaMicrophoneAlt className="w-8 h-8" />;
      default:
        return <FiShield className="w-8 h-8" />;
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Global Authority
          </h2>
          <div className="w-20 rounded-sm h-2 bg-[#67bc2a] mb-4 mx-auto"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
            >
              {/* Icon */}
              <div
                className={`${item.color} ${item.iconColor} w-16 h-16  flex items-center justify-center mb-6 mx-auto transition-transform group-hover:rotate-12`}
              >
                {getIcon(item.title)}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-primary mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 line-clamp-3 mb-6">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalAuthority;