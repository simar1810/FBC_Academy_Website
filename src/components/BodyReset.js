"use client";
import React from "react";
import { FiShield } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { FiZap } from "react-icons/fi";
import { FaHeadphones } from "react-icons/fa";
import { motion } from "framer-motion";

const highlight = "font-semibold text-gray-800";
const accent = "font-semibold text-[#1142D4]";

const BodyReset = () => {
    const reasons = [
    {
        title: "The 3-Day Advantage",
        description: (
            <>
                We prove that{" "}
                <span className={accent}>3 x 30-45 Minutes sessions</span>{" "}
                per week are more effective than six days of random effort when every move is backed by{" "}
                <span className={highlight}>science</span>. It is the{" "}
                <span className={accent}>&quot;minimum effective dose&quot;</span>{" "}
                that builds <span className={highlight}>strength</span> and boosts{" "}
                <span className={highlight}>metabolism</span> without leaving you drained.
            </>
        ),
        icon: <FiShield className="w-8 h-8" />,
        color: "bg-cyan-50",
        iconColor: "text-[#67bc2a]",
    },
    {
        title: "Freedom from the \"Diet\" Mentality",
        description: (
            <>
                Forget the headache of rigid &quot;diet charts&quot; or the social awkwardness of constantly saying, &quot;No, I&apos;m on a diet&quot;. We use a{" "}
                <span className={accent}>flexible, habit-based nutrition system</span>{" "}
                that integrates into your life so you can handle{" "}
                <span className={highlight}>business travel</span>,{" "}
                <span className={highlight}>meetings</span> and{" "}
                <span className={highlight}>family dinners</span>.
            </>
        ),
        icon: <FaStar className="w-8 h-8" />,
        color: "bg-cyan-50",
        iconColor: "text-[#67bc2a]",
    },
    {
        title: "Energy as Your Primary Metric",
        description: (
            <>
                We prioritize fixing your{" "}
                <span className={accent}>internal health</span>{" "}
                first by nourishing your body with{" "}
                <span className={highlight}>sufficient food</span>,{" "}
                <span className={highlight}>optimizing your hormones</span>, and improving{" "}
                <span className={highlight}>sleep quality</span>. By ending{" "}
                <span className={accent}>mid-day crashes</span> and{" "}
                <span className={highlight}>sharpening your focus</span>, we ensure you perform at your peak.
            </>
        ),
        icon: <FiZap className="w-8 h-8" />,
        color: "bg-cyan-50",
        iconColor: "text-[#67bc2a]",
    },
    {
        title: "Becoming Your Own Coach",
        description: (
            <>
                You won&apos;t just follow a plan; you will{" "}
                <span className={accent}>master the &quot;Why&quot;</span>{" "}
                behind it through{" "}
                <span className={accent}>Fitness Literacy</span>. We equip you with the logic to make the{" "}
                <span className={highlight}>right decisions</span> for yourself, giving you the{" "}
                <span className={highlight}>lifelong skills</span> to{" "}
                <span className={accent}>stay fit, healthy, and in shape 365 days a year</span>.
            </>
        ),
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
                        The Solution: The Total Body <span className="text-[#1142D4]">Re-Set</span>
                    </h2>
                    <p className="text-xl font-bold text-gray-800">
                        Finally, a Plan Designed for Your Reality
                    </p>
                    <p className="text-gray-600">
                        The Total Body Re-Set isn&apos;t another &quot;21-day challenge&quot; or a temporary fix. It is the bridge between the high-performing life you lead and the high-performing body you deserve. It is a structured, strategic pathway built to give you a High-Performing Mind & Body without asking you to sacrifice your career, family, or peace of mind. We bridge the gap between complex fitness science and your busy schedule, moving you away from &quot;exhaustion&quot; and toward &quot;efficiency&quot; by simplifying fitness for you. It is practical, it is doable, and because it respects your reality, it is the last program you will ever need.
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
                            className="relative p-8 rounded-3xl border border-gray-200 border-l-4 border-l-[#1142D4] bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-gray-300 group"
                        >
                            <div className={`${item.color} ${item.iconColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:rotate-12`}>
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-4 font-playfair">{item.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
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
