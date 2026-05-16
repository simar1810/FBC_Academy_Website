import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ResourceModal({ isOpen, onClose, resourceType }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "Professional seeking Transformation",
    struggle: "Lack of time",
    city: "",
    age: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  // Determine button text and redirect link based on resourceType
  const isPdfGuide = resourceType === "pdf";
  const buttonText = isPdfGuide ? "Get PDF+Audio Guide" : "Get Step-By-Step Protocol";
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // TODO: Replace with your actual Google Sheets Web App URL
      const GOOGLE_SHEETS_WEBHOOK_URL = "YOUR_GOOGLE_SHEETS_WEBHOOK_URL_HERE";

      // Submit to Google Sheets
      if (GOOGLE_SHEETS_WEBHOOK_URL !== "YOUR_GOOGLE_SHEETS_WEBHOOK_URL_HERE") {
        await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            resourceRequested: isPdfGuide ? "PDF + Audio Guide" : "Step-By-Step Protocol"
          }),
        });
      }

      // Reset form
      setFormData({
        name: "",
        category: "Professional seeking Transformation",
        struggle: "Lack of time",
        city: "",
        age: "",
        phone: "",
      });

      // Redirect
      // TODO: Replace with your actual resource links
      const redirectLink = isPdfGuide ? "YOUR_PDF_GUIDE_LINK_HERE" : "YOUR_PROTOCOL_LINK_HERE";
      
      if (redirectLink !== "YOUR_PDF_GUIDE_LINK_HERE" && redirectLink !== "YOUR_PROTOCOL_LINK_HERE") {
        window.location.href = redirectLink;
      } else {
        alert("Thank you! (Redirect link placeholder reached)");
        onClose();
      }
      
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden relative"
        >
          {/* Close Button */}
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-gray-500 hover:text-black z-10 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full"
          >
            ✕
          </button>

          <div className="p-8 max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-semibold mb-2 font-playfair">
              Discovery Form
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              All information is kept strictly confidential
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
               {/* Form Fields from ContactHero.js */}
               <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm mb-1 block">Full Name</label>
                  <input required type="text" className="w-full p-3 rounded-lg bg-[#1142D4]/5 outline-none" placeholder="John Doe" onChange={handleChange} name="name" value={formData.name} />
                </div>
                <div>
                  <label className="text-sm mb-1 block">Category</label>
                  <select className="w-full p-3 rounded-lg bg-[#1142D4]/5 outline-none" onChange={handleChange} name="category" value={formData.category}>
                    <option>Professional seeking Transformation</option>
                    <option>Trainer looking to grow</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm mb-1 block">Your Biggest Struggle</label>
                <select className="w-full p-3 rounded-lg bg-[#1142D4]/5 outline-none" onChange={handleChange} name="struggle" value={formData.struggle}>
                  <option>Lack of time</option>
                  <option>PCOS/Diabetes/Hypertension</option>
                  <option>Weight loss</option>
                  <option>Low fitness</option>
                  <option>Career growth</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm mb-1 block">City</label>
                  <input required type="text" className="w-full p-3 rounded-lg bg-[#1142D4]/5 outline-none" placeholder="e.g. New York " onChange={handleChange} name="city" value={formData.city} />
                </div>
                <div>
                  <label className="text-sm mb-1 block">Age</label>
                  <input required type="number" className="w-full p-3 rounded-lg bg-[#1142D4]/5 outline-none" placeholder="25" onChange={handleChange} name="age" value={formData.age} />
                </div>
              </div>

              <div>
                <label className="text-sm mb-1 block">WhatsApp Number</label>
                <input required type="tel" className="w-full p-3 rounded-lg bg-[#1142D4]/5 outline-none" placeholder="+91 9876543210" onChange={handleChange} name="phone" value={formData.phone} />
              </div>

              <p className="text-xs text-gray-500">
                We value your privacy. No spam. Only program related communication.
              </p>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 mt-4 rounded-md bg-[#67bc2a] cursor-pointer text-white flex items-center justify-center gap-2 hover:opacity-90 transition disabled:opacity-50"
              >
                {loading ? "Submitting..." : buttonText} →
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
