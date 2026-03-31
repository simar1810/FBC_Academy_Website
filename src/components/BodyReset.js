"use client";
import React from "react";
import { FiShield } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { FiZap } from "react-icons/fi";
import { FaHeadphones } from "react-icons/fa";

const BodyReset = () => {
    const reasons = [
    {
        title: "The 3-Day Advantage",
        description: "We prove that three 60-minute sessions per week are more effective than six days of random effort when every move is backed by science",
        icon: <FiShield className="w-8 h-8" />,
        color: "bg-cyan-50",
        iconColor: "text-[#67bc2a]",
    },
    {
        title: "Freedom from the Diet",
        description: "Forget the headache of rigid diet charts or the social awkwardness of constantly saying, No, I'm on a diet.",
        icon: <FaStar className="w-8 h-8" />,
        color: "bg-cyan-50",
        iconColor: "text-[#67bc2a]",
    },
    {
        title: "Measure Your Energy",
        description: "We prioritize fixing your internal health first by nourishing your body with sufficient food, optimizing your hormones, and improving sleep quality",
        icon: <FiZap className="w-8 h-8" />,
        color: "bg-cyan-50",
        iconColor: "text-[#67bc2a]",
    },
    {
        title: "Becoming Your Own Coach",
        description: "You won’t just follow a plan; you will master the Why behind it through Fitness Literacy.",
        icon: <FaHeadphones className="w-8 h-8" />,
        color: "bg-cyan-50",
        iconColor: "text-[#67bc2a]",
    },
 ];


    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary">
                        Total Body <span className="text-[#1142D4]">Re-Set</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                         A sustainable system designed for elite performance without sacrificing your carrer or lifestyle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((item, index) => (
                        <div
                            key={index}
                            className={`p-8 rounded-3xl border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group`}
                        >
                            <div className={`${item.color} ${item.iconColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto transition-transform group-hover:rotate-12`}>
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-4 font-playfair">{item.title}</h3>
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

export default BodyReset;
