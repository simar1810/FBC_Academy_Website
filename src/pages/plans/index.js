import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaWhatsapp, FaArrowRight, FaTimes, FaCheckCircle, FaLock, FaInfoCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from "framer-motion";

const plansData = [
  {
    id: "7-day-kickstarter",
    title: "The 7-Day Kickstarter",
    subtitle: "The 'Mindset First' Reset for Lasting Success",
    shortDescription: "A total mindset reset designed to reveal the 'Bigger Picture' of how fitness fuels your daily performance beyond just weight loss.",
    price: "₹499",
    category: "Option A: I Want to Get Fit",
    color: "bg-blue-50 text-[#1142D4]",
    buttonColor: "bg-[#1142D4] hover:bg-blue-800",
    details: {
      whatToExpect: "This is not a diet or a workout plan. It is the essential foundation you need before you ever start a fitness program. It is a total mindset reset designed to reveal the \"Bigger Picture\" of how fitness fuels your daily performance beyond just weight loss. This is the exact starting point for most of our VIP clients, providing the mental shift required to stop the \"start-stop\" cycle and stay on track for good.",
      whoItsFor: "The overwhelmed professional who has tried and failed multiple challenges and can’t seem to make a program stick. If you want the mental clarity that allows you to stick to a fitness regime and stay fit all year round, this is your starting point.",
      whatYouGet: [
        "7 Short, High-Impact Videos: Designed to give you the mental shift needed for fitness success in minutes a day.",
        "Daily Breakthrough Tasks: Simple activities to turn information into real, lasting change.",
        "Two Premium eBooks by Ankush S. Bhaskar: \"Why 75% of Professionals Fail at Fitness\" and \"The Busy Professional’s Guide to Losing 5-10kg Without the Gym\"."
      ],
      coreValue: "Absolute clarity over confusion through a 7-day psychological shift that makes fitness feel like a strategy, not a chore."
    }
  },
  {
    id: "28-day-foundation",
    title: "The 28-Day Foundation",
    subtitle: "The 'System Builder' for Independent High-Achievers",
    shortDescription: "Over four weeks, you will install the core habits of the Total Body Re-Set Program. Experience simplified fitness strategies in action.",
    price: "₹4,999",
    category: "Option A: I Want to Get Fit",
    color: "bg-blue-50 text-[#1142D4]",
    buttonColor: "bg-[#1142D4] hover:bg-blue-800",
    details: {
      whatToExpect: "This is where you build the \"Why\" and the \"How\" of a simplified fitness system. Over four weeks, you will install the core habits of the Total Body Re-Set Program. This is your chance to experience my simplified fitness strategies in action. It is the exact foundation our VIP clients use to build the habits that lead to the amazing transformations you see on our website.",
      whoItsFor: "This is for those who have failed in the past and are not ready for a bigger commitment yet or don't fully trust themselves to stick to a long-term plan. If you want a glimpse of the Total Body Re-Set journey but want to try it out first, this is where you start.",
      whatYouGet: [
        "Baseline Assessment: A simple evaluation to understand your starting point before you begin.",
        "Foundation Workout Plan: Custom exercise routines assigned based on your initial assessment.",
        "5 Simple Food Rules: No diet plans to follow. Practical nutrition strategies that solve over 50% of common problems.",
        "FBC Academy App Access: Your central hub for daily tracking, exercise videos, and nutrition tools.",
        "2 x Live Group Q&A Calls: Direct access to Ankush to answer your questions and refine your progress.",
        "Free Access to the 7-Day Kickstarter: The essential Mindset Shift program to ensure you stick to the journey."
      ],
      coreValue: "Discovering the real-world impact of simplified fitness and experiencing firsthand what minimalist effort, done with absolute consistency, can achieve for your body."
    }
  },
  {
    id: "total-body-reset-diy",
    title: "Total Body Re-Set DIY",
    subtitle: "Be Your Own Fitness Coach: The Complete Literacy Framework",
    shortDescription: "A complete education and execution system built from over 12 years of ground-level coaching experience.",
    price: "₹7,999",
    category: "Option A: I Want to Get Fit",
    color: "bg-blue-50 text-[#1142D4]",
    buttonColor: "bg-[#1142D4] hover:bg-blue-800",
    details: {
      whatToExpect: "This is not a collection of random workout videos; it is a complete education and execution system built from over 12 years of ground-level coaching experience. You will cut through the noise of conflicting social media advice to master the core science of metabolism, nutrition, and workout design, learning more than your local gym trainer ever will. By mastering the \"Minimum Effective Dose,\" you will gain the power to manage your fitness during work travels, festivals, and hectic weeks, staying in peak shape all year round.",
      whoItsFor: "The disciplined, self-driven professional who prefers depth and flexibility over constant hand-holding. If you travel frequently, have a hectic schedule, and want a science-backed system you can carry in your pocket without needing a 1-on-1 coach, this is for you.",
      whatYouGet: [
        "Full Recorded Curriculum: 7 Modules covering Exercise Science, Nutrition, Hormones, and Fat Loss fundamentals.",
        "6-Phase Workout System: A roadmap graduating you from beginner to elite, completed in just 35 mins, 3 times per week.",
        "3-Phase Nutrition System: A structured path with templates for veg/non-veg/eggetarians. No crash dieting allowed.",
        "FBC App Access: Digital trackers, fitness tools and a complete progress-tracking system.",
        "Monthly Strategy Call: A 1-on-1-style group coaching session with Ankush to clarify doubts and course-correct."
      ],
      coreValue: "Transitioning from \"guessing\" to \"knowing\": investing in a lifelong skill set that frees you from the cycle of fitness influencers and fad diets forever."
    }
  },
  {
    id: "total-body-reset-hybrid",
    title: "Total Body Re-Set Hybrid",
    subtitle: "Elite Results. Complete Accountability. Zero Guesswork.",
    shortDescription: "Our highest tier of coaching. You receive everything in the DIY curriculum but with personalized strategy, direct accountability, and continuous 1-on-1 feedback.",
    price: "By Application Only",
    category: "Option A: I Want to Get Fit",
    color: "bg-blue-50 text-[#1142D4]",
    buttonColor: "bg-[#1142D4] hover:bg-blue-800",
    details: {
      whatToExpect: "Our highest tier of coaching. You receive everything in the DIY curriculum but with the addition of personalized strategy, direct accountability, and continuous 1-on-1 feedback from Ankush. You don't have to think about \"What should I do today?\" We handle the strategy so you can simply execute and reap the rewards of peak performance.",
      whoItsFor: "The time-poor executive or professional who needs an expert to take the wheel. If you are struggling with a lifestyle disorder, recovering from an injury, or simply need someone to handle the heavy lifting of adjusting your macros and workouts, this is your fastest route to success.",
      whatYouGet: [
        "Complete Customization: Tailored workouts, diet strategies, and habit prescriptions built around your work hours, injuries, and family life.",
        "Weekly Check-Ins & Adjustments: Course corrections every 7 days based on your sleep data, stress levels, and progress tracking.",
        "Daily WhatsApp Accountability: Direct, private access to Ankush for immediate troubleshooting and motivation.",
        "Private App Portal: Your bespoke 12-week roadmap hosted on our elite, user-friendly platform.",
        "Everything from the DIY Tier: Full access to the video modules and frameworks."
      ],
      coreValue: "Total peace of mind. You execute; we strategize. The fastest, most secure route to your ideal physique and high-performing health."
    }
  },
  {
    id: "fitness-coach-launchpad",
    title: "Fitness Coach Launchpad",
    subtitle: "Build the Business. Master the Science. Command Premium Rates.",
    shortDescription: "A complete business and clinical mentorship. Transition from being a standard gym floor trainer to a highly skilled, independent business owner.",
    price: "₹34,999",
    category: "Option B: Become a Coach",
    color: "bg-green-100 text-[#67bc2a]",
    buttonColor: "bg-[#67bc2a] hover:bg-green-700",
    details: {
      whatToExpect: "A complete business and clinical mentorship. You will transition from being a standard \"gym floor trainer\" to a highly skilled, independent business owner. This 12-week program bridges the massive gap between textbook theory and the real-world skills needed to secure and transform high-ticket clients.",
      whoItsFor: "Aspiring coaches, struggling personal trainers, or certified professionals who have the knowledge but lack the system to package, price, and deliver elite results consistently. If you want to scale your income and reputation, this is the blueprint.",
      whatYouGet: [
        "10+ Modules of Business & Clinical Theory: Learn exactly how to reverse clinical conditions, manage PCOS/Thyroid clients, and build training phases for real people.",
        "The Confident Coach System: Our proprietary framework for assessing clients, writing precise programs in under 20 minutes, and setting up bulletproof tracking systems.",
        "Sales & Marketing Blueprint: Step-by-step guides on how to position your offer, handle sales calls without being \"salesy\", and command a premium price for your services.",
        "12 Weeks of Mentorship Calls: Direct problem-solving sessions with Ankush to break through your specific bottlenecks.",
        "\"Done For You\" Templates: Ready-to-use consultation scripts, diet planning tools, and progress trackers to start immediately."
      ],
      coreValue: "Skipping 5+ years of trial-and-error by plugging directly into a proven system that has managed hundreds of elite clients globally."
    }
  }
];

export default function PlansPage() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedPlan) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedPlan]);

  // Open modal if URL has a hash matching a plan
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hashId = window.location.hash.substring(1);
      const planFromHash = plansData.find(p => p.id === hashId);
      if (planFromHash) {
        // slight delay to allow page render before popup
        setTimeout(() => setSelectedPlan(planFromHash), 100);
      }
    }
  }, []);

  return (
    <>
      <Navbar />

      <a
        href="https://wa.me/919923646881?text=Hey%2C%20I%27m%20interested%20in%20your%20coaching%20programs%21"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-12 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>

      <main className="pt-24 min-h-screen bg-gray-50 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-gray-900 mb-4">Our <span className="text-[#1142D4]">Programs</span></h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Choose the path that fits your reality. Whether you want to get fit or become a high-level coach, we have a strategic plan for you.</p>
          </motion.div>

          <div className="space-y-8">
            {plansData.map((plan, index) => (
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
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-block ${plan.color}`}>
                    {plan.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900">{plan.title}</h2>
                  <h3 className="text-md md:text-lg font-bold text-gray-700">{plan.subtitle}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{plan.shortDescription}</p>
                </div>
                
                <div className="flex flex-col gap-4 w-full md:w-auto md:min-w-[200px]">
                  <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-100">
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Investment</p>
                    <p className="text-xl font-bold text-gray-900">{plan.price}</p>
                  </div>
                  
                  <button 
                    onClick={() => setSelectedPlan(plan)}
                    className="w-full bg-white text-gray-800 border-2 border-gray-200 hover:border-gray-300 px-4 py-3 rounded-md font-bold flex justify-center items-center gap-2 transition"
                  >
                    Know More <FaInfoCircle />
                  </button>
                  
                  <a 
                    href="/contact-us"
                    className={`w-full text-white px-4 py-3 rounded-md font-bold flex justify-center items-center gap-2 transition shadow-sm ${plan.buttonColor}`}
                  >
                    Join Program <FaArrowRight />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </main>

      {/* Modal / Popup */}
      <AnimatePresence>
        {selectedPlan && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPlan(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl z-[101]"
            >
              <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex justify-between items-start z-10">
                <div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-block mb-3 ${selectedPlan.color}`}>
                    {selectedPlan.category}
                  </span>
                  <h2 className="text-3xl font-playfair font-bold text-gray-900">{selectedPlan.title}</h2>
                  <h3 className="text-lg font-bold text-gray-600 mt-1">{selectedPlan.subtitle}</h3>
                </div>
                <button 
                  onClick={() => setSelectedPlan(null)}
                  className="p-2 text-gray-400 hover:text-gray-800 hover:bg-gray-100 rounded-full transition"
                >
                  <FaTimes className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 md:p-8 space-y-8">
                <div>
                  <h4 className="text-xl font-bold font-playfair text-gray-900 mb-3">What to Expect</h4>
                  <p className="text-gray-700 leading-relaxed">{selectedPlan.details.whatToExpect}</p>
                </div>

                <div>
                  <h4 className="text-xl font-bold font-playfair text-gray-900 mb-3">Who it’s For</h4>
                  <p className="text-gray-700 leading-relaxed">{selectedPlan.details.whoItsFor}</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h4 className="text-xl font-bold font-playfair text-gray-900 mb-4">What You Get</h4>
                  <ul className="space-y-4">
                    {selectedPlan.details.whatYouGet.map((item, i) => {
                      const [boldPart, restPart] = item.split(":");
                      return (
                        <li key={i} className="flex items-start gap-3">
                          <FaCheckCircle className={`mt-1 flex-shrink-0 ${selectedPlan.id === 'fitness-coach-launchpad' ? 'text-[#1142D4]' : 'text-[#67bc2a]'}`} />
                          <span className="text-gray-700">
                            <strong>{boldPart}{restPart ? ":" : ""}</strong>{restPart}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold font-playfair text-gray-900 mb-3">The Core Value</h4>
                  <p className="text-gray-700 font-medium leading-relaxed italic border-l-4 border-gray-300 pl-4">
                    "{selectedPlan.details.coreValue}"
                  </p>
                </div>
              </div>

              <div className="sticky bottom-0 bg-white border-t border-gray-100 p-6 md:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="w-full sm:w-auto text-center sm:text-left">
                  <p className="text-gray-500 uppercase tracking-wider text-xs font-bold mb-1">Investment</p>
                  <p className="text-3xl font-bold text-gray-900">{selectedPlan.price}</p>
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                  <button 
                    onClick={() => setSelectedPlan(null)}
                    className="flex-1 sm:flex-none px-6 py-3 rounded-md font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 transition"
                  >
                    Close
                  </button>
                  <a 
                    href="/contact-us"
                    className={`flex-1 sm:flex-none px-8 py-3 rounded-md font-bold text-white flex justify-center items-center gap-2 shadow-md transition ${selectedPlan.buttonColor}`}
                  >
                    Join Program <FaArrowRight />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}