import { useState } from "react";

export default function ContactHero() {

  const [formData, setFormData] = useState({
    name: "",
    category: "Professional seeking Transformation",
    struggle: "Lack of time",
    city: "",
    age: "",
    phone: "",
  });

  const handleChange = (e)=>{
    setFormData({
    ...formData,
    [e.target.name]: e.target.value,
   });
  }

  const handleSubmit = async (e) =>
  {
    e.preventDefault();

    try {
      // TODO: Replace with your actual Google Sheets Web App URL
      const GOOGLE_SHEETS_WEBHOOK_URL = "YOUR_GOOGLE_SHEETS_WEBHOOK_URL_HERE";

      if (GOOGLE_SHEETS_WEBHOOK_URL !== "YOUR_GOOGLE_SHEETS_WEBHOOK_URL_HERE") {
        await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            source: "Contact Us Page"
          }),
        });
      }
    } catch (error) {
      console.error("Error submitting to Google Sheets:", error);
    }

    const message = "*New Discovery Form Submission*\n\n" +
    "*Name:* " + formData.name + "\n" +
    "*Category:* " + formData.category + "\n" +
    "*Struggle:* " + formData.struggle + "\n" +
    "*City:* " + formData.city + "\n" +
    "*Age:* " + formData.age + "\n" +
    "*WhatsApp:* " + formData.phone;

     const encodedMessage = encodeURIComponent(message.trim());
     const whatsappNumber = "919923646881";
     const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
     window.open(url, "_blank");

     setFormData({
       name: "",
       category: "Professional seeking Transformation",
       struggle: "Lack of time",
       city: "",
       age: "",
       phone: "",
    });

  }


  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#f9fafb] font-sans px-4 py-16 md:px-12">
      
      {/* Wrapper with controlled spacing */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-start gap-12 md:gap-8">
        
        {/* LEFT SIDE */}
        <div className="flex-1 flex flex-col">
          
          {/* Top Tag */}
          <p className="text-[#1142D4] font-medium mb-4 font-playfair">
            TRANSFORMATION AWAITS
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
            Start your <span className="text-[#1142D4]">Journey</span>
          </h1>

          {/* Paragraph */}
          <p className="text-gray-600 mb-10 max-w-md text-justify">
            Take the first step towards transforming your fitness transformation with <span className="font-bold text-[#67bc2a]">Ankush S. Bhaskar</span>. We specialize a high-performace coaching for busy professinals.
          </p>

          {/* Info Card */}
          <div className="bg-white shadow-md rounded-2xl p-6 max-w-md">
            
            {/* Title */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1142D4]/10 text-[#1142D4]">
                ✔
              </div>
              <h3 className="font-semibold">Why a Discovery Call?</h3>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-6">
             A focused 15 minutes session to audit your current lifestyle, identify barriers and outline a clear raodmap. <br/>Zero Pressure.pure strategy.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              
              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1142D4]/10 text-[#1142D4]">
                  ✉
                </div>
                <div>
                  <p className="text-sm font-medium">Email us</p>
                  <p className="text-gray-600 text-sm">enquiry.teamfbc@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1142D4]/10 text-[#1142D4]">
                  📞
                </div>
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <p className="text-gray-600 text-sm">+91 99236 46881</p>
                </div>
              </div>

              {/* HQ Location */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1142D4]/10 text-[#1142D4]">
                  📍
                </div>
                <div>
                  <p className="text-sm font-medium">HQ Location</p>
                  <p className="text-gray-600 text-sm">Mumbai, India</p>
                </div>
              </div>

            </div>
          </div>

         <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.123456789!2d-73.987654321!3d40.7123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x123456789abcdef!2sYour+Location!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              className="w-full md:w-[80%] h-64 md:h-60 rounded-2xl shadow-md border-0 mt-6"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        </div>

        {/* RIGHT SIDE (Large Form) */}
        <div className="flex-1 w-full">
          
          <div className="bg-white shadow-lg rounded-2xl p-8 w-full">
            
            {/* Heading */}
            <h2 className="text-xl font-semibold mb-2">
              Discovery Form
            </h2>

            <p className="text-gray-500 text-sm mb-6">
              All information is kept strictly confidential
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Row 1: Full Name + Category */}
              <div className="grid grid-cols-2 gap-4">
                
                <div>
                  <label className="text-sm mb-1 block">Full Name</label>
                  <input
                    type="text"
                    className="w-full p-3 rounded-lg bg-[#1142D4]/5 outline-none"
                    placeholder="John Doe"
                    onChange={handleChange}
                    name="name"
                    value={formData.name}
                  />
                </div>

                <div>
                  <label className="text-sm mb-1 block">Category</label>
                  <select className="w-full p-3 rounded-lg bg-[#1142D4]/5 outline-none" onChange={handleChange} name = "category" value={formData.category}>
                    <option>Professional seeking Transformation</option>
                    <option>Trainer looking to grow</option>
                  </select>
                </div>

              </div>

              {/* Biggest Struggle (as select) */}
              <div>
                <label className="text-sm mb-1 block">Your Biggest Struggle</label>
                <select className="w-full p-3 rounded-lg bg-[#1142D4]/5 outline-none" onChange={handleChange} name = "struggle" value={formData.struggle}>
                  <option>Lack of time</option>
                  <option>PCOS/Diabetes/Hypertension</option>
                  <option>Weight loss</option>
                  <option>Low fitness</option>
                  <option>Career growth</option>
                </select>
              </div>

              {/* Row 2: City + Age */}
              <div className="grid grid-cols-2 gap-4">
                
                <div>
                  <label className="text-sm mb-1 block">City</label>
                  <input
                    type="text"
                    className="w-full p-3 rounded-lg bg-[#1142D4]/5 outline-none"
                    placeholder="e.g. New York "
                    onChange={handleChange}
                    name="city"
                    value={formData.city}
                  />
                </div>

                <div>
                  <label className="text-sm mb-1 block">Age</label>
                  <input
                    type="number"
                    className="w-full p-3 rounded-lg bg-[#1142D4]/5 outline-none"
                    placeholder="25"
                    onChange={handleChange}
                    name="age"
                    value={formData.age}
                  />
                </div>

              </div>

              {/* WhatsApp Number */}
              <div>
                <label className="text-sm mb-1 block">WhatsApp Number</label>
                <input
                  type="tel"
                  className="w-full p-3 rounded-lg bg-[#1142D4]/5 outline-none"
                  placeholder="+91 9876543210"
                  onChange={handleChange}
                  name="phone"
                  value={formData.phone}
                />
              </div>

              {/* Privacy Text */}
              <p className="text-xs text-gray-500">
                We value your privacy. No spam. Only program related communication.
              </p>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-md bg-[#67bc2a] cursor-pointer text-white flex items-center justify-center gap-2 hover:opacity-90 transition"
              >
                Submit Application →
              </button>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}