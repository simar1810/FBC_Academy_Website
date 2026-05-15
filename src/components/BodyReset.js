"use client";
import React from "react";
import { FiShield } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { FiZap } from "react-icons/fi";
import { FaHeadphones } from "react-icons/fa";
import { motion } from "framer-motion";

const BodyReset = () => {
    const reasons = [
    {
        title: "The 3-Day Advantage",
        description: "We prove that three 60-minute sessions per week are more effective than six days of random effort when every move is backed by science. It is the \"minimum effective dose\" that builds strength and boosts metabolism without leaving you drained.",
        icon: <FiShield className="w-8 h-8" />,
        color: "bg-cyan-50",
        iconColor: "text-[#67bc2a]",
    },
    {
        title: "Freedom from the \"Diet\" Mentality",
        description: "Forget the headache of rigid \"diet charts\" or the social awkwardness of constantly saying, \"No, I'm on a diet\". We use a flexible, habit-based nutrition system that integrates into your life so you can handle business travel, meetings and family dinners.",
        icon: <FaStar className="w-8 h-8" />,
        color: "bg-cyan-50",
        iconColor: "text-[#67bc2a]",
    },
    {
        title: "Energy as Your Primary Metric",
        description: "We prioritize fixing your internal health first by nourishing your body with sufficient food, optimizing your hormones, and improving sleep quality. By ending mid-day crashes and sharpening your focus, we ensure you perform at your peak.",
        icon: <FiZap className="w-8 h-8" />,
        color: "bg-cyan-50",
        iconColor: "text-[#67bc2a]",
    },
    {
        title: "Becoming Your Own Coach",
        description: "You won’t just follow a plan; you will master the \"Why\" behind it through Fitness Literacy. We equip you with the logic to make the right decisions for yourself, giving you the lifelong skills to stay fit, healthy, and in shape 365 days a year.",
        icon: <FaHeadphones className="w-8 h-8" />,
        color: "bg-cyan-50",
        iconColor: "text-[#67bc2a]",
    },
 ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 space-y-4 max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary">
                        The Solution — The Total Body <span className="text-[#1142D4]">Re-Set</span>
                    </h2>
                    <p className="text-xl font-bold text-gray-800">
                        Finally, a Plan Designed for Your Reality
                    </p>
                    <p className="text-gray-600">
                        The Total Body Re-Set isn't another "21-day challenge" or a temporary fix. It is the bridge between the high-performing life you lead and the high-performing body you deserve. It is a structured, strategic pathway built to give you a High-Performing Mind & Body without asking you to sacrifice your career, family, or peace of mind. We bridge the gap between complex fitness science and your busy schedule, moving you away from "exhaustion" and toward "efficiency" by simplifying fitness for you. It is practical, it is doable, and because it respects your reality, it is the last program you will ever need.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((item, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            key={index}
                            className={`p-8 rounded-3xl border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group bg-white`}
                        >
                            <div className={`${item.color} ${item.iconColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:rotate-12`}>
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-4 font-playfair">{item.title}</h3>
                            <p className="text-gray-500 mb-6 text-sm">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BodyReset;
