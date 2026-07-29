"use client";

import React, { useState, useEffect } from "react";
import {
  FaArrowRight,
  FaTimes,
  FaCheckCircle,
  FaInfoCircle,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { getJoinAction } from "@/data/plans";

const emptyEnquiry = {
  name: "",
  email: "",
  phone: "",
  occupation: "",
  healthConditions: "",
  weeklyAvailability: "",
  goals: "",
  commitment: "",
};

export default function ProgramsList({
  plans,
  title,
  highlight,
  subtitle,
}) {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryPlan, setEnquiryPlan] = useState(null);
  const [enquiry, setEnquiry] = useState(emptyEnquiry);
  const [enquirySent, setEnquirySent] = useState(false);
  const [lpNotice, setLpNotice] = useState(null);

  useEffect(() => {
    if (selectedPlan || enquiryOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedPlan, enquiryOpen]);

  useEffect(() => {
    if (typeof window === "undefined" || !window.location.hash) return;
    const hashId = window.location.hash.substring(1);
    const planFromHash = plans.find((p) => p.id === hashId);
    if (planFromHash) {
      setTimeout(() => setSelectedPlan(planFromHash), 100);
    }
  }, [plans]);

  const handleJoin = (plan) => {
    if (plan.comingSoon) return;
    const action = getJoinAction(plan);
    if (action.type === "enquiry") {
      setEnquiryPlan(plan);
      setEnquiry(emptyEnquiry);
      setEnquirySent(false);
      setEnquiryOpen(true);
      setSelectedPlan(null);
      return;
    }
    if (action.type === "lp" && action.url) {
      window.open(action.url, "_blank", "noopener,noreferrer");
      return;
    }
    setLpNotice(plan.title);
    setTimeout(() => setLpNotice(null), 4000);
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    const text = [
      `Hybrid Program Enquiry: ${enquiryPlan?.title || "Total Body Re-Set Hybrid"}`,
      `Name: ${enquiry.name}`,
      `Email: ${enquiry.email}`,
      `Phone: ${enquiry.phone}`,
      `Occupation: ${enquiry.occupation}`,
      `Health conditions / injuries: ${enquiry.healthConditions}`,
      `Weekly availability: ${enquiry.weeklyAvailability}`,
      `Goals: ${enquiry.goals}`,
      `Commitment: ${enquiry.commitment}`,
    ].join("\n");

    const waUrl = `https://wa.me/919923646881?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setEnquirySent(true);
  };

  return (
    <>
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-gray-900 mb-4">
          {title} <span className="text-[#1142D4]">{highlight}</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      </div>

      {lpNotice && (
        <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-amber-900 text-sm text-center">
          Landing page link for <strong>{lpNotice}</strong> will be added soon.
          Please check back shortly.
        </div>
      )}

      <div className="space-y-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.id}
            id={plan.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center hover:shadow-xl transition-shadow"
          >
            <div className="flex-1 space-y-4">
              <div className="flex flex-wrap gap-2">
                {plan.comingSoon && (
                  <span className="inline-flex rounded-full bg-amber-100 text-amber-800 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                    Coming Soon
                  </span>
                )}
                {plan.id === "fitness-coach-mastery" && (
                  <span className="inline-flex rounded-full bg-gray-900 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider">
                    Exclusively for Launchpad Graduates
                  </span>
                )}
              </div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900">
                {plan.title}
              </h2>
              <h3 className="text-md md:text-lg font-bold text-gray-700">
                {plan.subtitle}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {plan.shortDescription}
              </p>
            </div>

            <div className="flex flex-col gap-4 w-full md:w-auto md:min-w-[200px]">
              <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-100">
                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">
                  Investment
                </p>
                <p className="text-xl font-bold text-gray-900">{plan.price}</p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedPlan(plan)}
                className="w-full bg-white text-gray-800 border-2 border-gray-200 hover:border-gray-300 px-4 py-3 rounded-md font-bold flex justify-center items-center gap-2 transition"
              >
                Know More <FaInfoCircle />
              </button>

              <button
                type="button"
                onClick={() => handleJoin(plan)}
                disabled={!!plan.comingSoon}
                className={`w-full text-white px-4 py-3 rounded-md font-bold flex justify-center items-center gap-2 transition shadow-sm ${plan.buttonColor} ${
                  plan.comingSoon ? "opacity-70" : ""
                }`}
              >
                {plan.comingSoon
                  ? "Coming Soon"
                  : "Enquire"}{" "}
                {!plan.comingSoon && <FaArrowRight />}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Know More Modal */}
      <AnimatePresence>
        {selectedPlan && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPlan(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl z-[101]"
            >
              <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex justify-between items-start z-10">
                <div>
                  <h2 className="text-3xl font-playfair font-bold text-gray-900">
                    {selectedPlan.title}
                  </h2>
                  <h3 className="text-lg font-bold text-gray-600 mt-1">
                    {selectedPlan.subtitle}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedPlan(null)}
                  className="p-2 text-gray-400 hover:text-gray-800 hover:bg-gray-100 rounded-full transition"
                >
                  <FaTimes className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 md:p-8 space-y-8">
                <div>
                  <h4 className="text-xl font-bold font-playfair text-gray-900 mb-3">
                    What to Expect
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedPlan.details.whatToExpect}
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold font-playfair text-gray-900 mb-3">
                    Who it&apos;s For
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedPlan.details.whoItsFor}
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h4 className="text-xl font-bold font-playfair text-gray-900 mb-4">
                    What You Get
                  </h4>
                  <ul className="space-y-4">
                    {selectedPlan.details.whatYouGet.map((item, i) => {
                      const [boldPart, restPart] = item.split(":");
                      return (
                        <li key={i} className="flex items-start gap-3">
                          <FaCheckCircle className="mt-1 flex-shrink-0 text-[#67bc2a]" />
                          <span className="text-gray-700">
                            <strong>
                              {boldPart}
                              {restPart ? ":" : ""}
                            </strong>
                            {restPart}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold font-playfair text-gray-900 mb-3">
                    The Core Value
                  </h4>
                  <p className="text-gray-700 font-medium leading-relaxed italic border-l-4 border-gray-300 pl-4">
                    &quot;{selectedPlan.details.coreValue}&quot;
                  </p>
                </div>
              </div>

              <div className="sticky bottom-0 bg-white border-t border-gray-100 p-6 md:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="w-full sm:w-auto text-center sm:text-left">
                  <p className="text-gray-500 uppercase tracking-wider text-xs font-bold mb-1">
                    Investment
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {selectedPlan.price}
                  </p>
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setSelectedPlan(null)}
                    className="flex-1 sm:flex-none px-6 py-3 rounded-md font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 transition"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={() => handleJoin(selectedPlan)}
                    disabled={!!selectedPlan.comingSoon}
                    className={`flex-1 sm:flex-none px-8 py-3 rounded-md font-bold text-white flex justify-center items-center gap-2 shadow-md transition ${selectedPlan.buttonColor} ${
                      selectedPlan.comingSoon ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {selectedPlan.comingSoon ? "Coming Soon" : "Enquire"}{" "}
                    {!selectedPlan.comingSoon && <FaArrowRight />}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hybrid Enquiry Form */}
      <AnimatePresence>
        {enquiryOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setEnquiryOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl z-[101]"
            >
              <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#1142D4] mb-1">
                    Application Only
                  </p>
                  <h2 className="text-2xl font-playfair font-bold text-gray-900">
                    Hybrid Enquiry Form
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    {enquiryPlan?.title}. Answer a few qualification questions and
                    we&apos;ll follow up.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setEnquiryOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-800 hover:bg-gray-100 rounded-full transition"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>

              {enquirySent ? (
                <div className="p-8 text-center space-y-3">
                  <FaCheckCircle className="w-12 h-12 text-[#67bc2a] mx-auto" />
                  <h3 className="text-xl font-bold text-gray-900">Enquiry ready</h3>
                  <p className="text-gray-600">
                    WhatsApp should open with your details. If it didn&apos;t, tap
                    Apply again or message +91 99236 46881.
                  </p>
                  <button
                    type="button"
                    onClick={() => setEnquiryOpen(false)}
                    className="mt-4 px-6 py-3 rounded-md bg-[#1142D4] text-white font-bold"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="p-6 md:p-8 space-y-5">
                  {[
                    { key: "name", label: "Full Name", type: "text", required: true },
                    { key: "email", label: "Email", type: "email", required: true },
                    { key: "phone", label: "Phone / WhatsApp", type: "tel", required: true },
                  ].map((field) => (
                    <label key={field.key} className="block text-left">
                      <span className="text-sm font-semibold text-gray-800">
                        {field.label}
                      </span>
                      <input
                        type={field.type}
                        required={field.required}
                        value={enquiry[field.key]}
                        onChange={(e) =>
                          setEnquiry((prev) => ({
                            ...prev,
                            [field.key]: e.target.value,
                          }))
                        }
                        className="mt-1.5 w-full rounded-md border border-gray-300 px-3 py-2.5 text-gray-900 focus:border-[#1142D4] focus:outline-none focus:ring-1 focus:ring-[#1142D4]"
                      />
                    </label>
                  ))}

                  <label className="block text-left">
                    <span className="text-sm font-semibold text-gray-800">
                      What do you do professionally?
                    </span>
                    <input
                      type="text"
                      required
                      value={enquiry.occupation}
                      onChange={(e) =>
                        setEnquiry((prev) => ({
                          ...prev,
                          occupation: e.target.value,
                        }))
                      }
                      className="mt-1.5 w-full rounded-md border border-gray-300 px-3 py-2.5 focus:border-[#1142D4] focus:outline-none focus:ring-1 focus:ring-[#1142D4]"
                    />
                  </label>

                  <label className="block text-left">
                    <span className="text-sm font-semibold text-gray-800">
                      Any lifestyle conditions, injuries, or medical markers we should know?
                    </span>
                    <textarea
                      required
                      rows={3}
                      value={enquiry.healthConditions}
                      onChange={(e) =>
                        setEnquiry((prev) => ({
                          ...prev,
                          healthConditions: e.target.value,
                        }))
                      }
                      className="mt-1.5 w-full rounded-md border border-gray-300 px-3 py-2.5 focus:border-[#1142D4] focus:outline-none focus:ring-1 focus:ring-[#1142D4]"
                      placeholder="e.g. PCOS, hypertension, knee injury, none"
                    />
                  </label>

                  <label className="block text-left">
                    <span className="text-sm font-semibold text-gray-800">
                      How many days per week can you realistically train?
                    </span>
                    <select
                      required
                      value={enquiry.weeklyAvailability}
                      onChange={(e) =>
                        setEnquiry((prev) => ({
                          ...prev,
                          weeklyAvailability: e.target.value,
                        }))
                      }
                      className="mt-1.5 w-full rounded-md border border-gray-300 px-3 py-2.5 focus:border-[#1142D4] focus:outline-none focus:ring-1 focus:ring-[#1142D4]"
                    >
                      <option value="">Select</option>
                      <option value="1-2 days">1-2 days</option>
                      <option value="3 days">3 days</option>
                      <option value="4+ days">4+ days</option>
                    </select>
                  </label>

                  <label className="block text-left">
                    <span className="text-sm font-semibold text-gray-800">
                      What is your primary goal for Hybrid coaching?
                    </span>
                    <textarea
                      required
                      rows={3}
                      value={enquiry.goals}
                      onChange={(e) =>
                        setEnquiry((prev) => ({ ...prev, goals: e.target.value }))
                      }
                      className="mt-1.5 w-full rounded-md border border-gray-300 px-3 py-2.5 focus:border-[#1142D4] focus:outline-none focus:ring-1 focus:ring-[#1142D4]"
                    />
                  </label>

                  <label className="block text-left">
                    <span className="text-sm font-semibold text-gray-800">
                      Are you ready to follow a 12-week coached system with weekly check-ins?
                    </span>
                    <select
                      required
                      value={enquiry.commitment}
                      onChange={(e) =>
                        setEnquiry((prev) => ({
                          ...prev,
                          commitment: e.target.value,
                        }))
                      }
                      className="mt-1.5 w-full rounded-md border border-gray-300 px-3 py-2.5 focus:border-[#1142D4] focus:outline-none focus:ring-1 focus:ring-[#1142D4]"
                    >
                      <option value="">Select</option>
                      <option value="Yes, fully ready">Yes, fully ready</option>
                      <option value="Mostly, need clarity first">
                        Mostly, need clarity first
                      </option>
                      <option value="Exploring options">Exploring options</option>
                    </select>
                  </label>

                  <button
                    type="submit"
                    className="w-full bg-[#1142D4] hover:bg-blue-800 text-white font-bold py-3.5 rounded-md flex items-center justify-center gap-2 transition"
                  >
                    Submit Enquiry on WhatsApp <FaArrowRight />
                  </button>
                </form>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
