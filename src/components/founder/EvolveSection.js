"use client";
import React from "react";

export default  function EvolveSection()
{
    return(
        <div className="w-full mb-16 px-6 md:px-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6 mt-16">
                
                {/* Left Heading */}
                <div className = "text-sm md:text-md flex flex-col gap-2">
                  <h2 className="text-4xl md:text-4xl font-bold">
                    Ready to Evolve ?
                  </h2>
                  <p className = "text-lg text-gray-400">Schedule a private consultation with Ankush.</p>
                </div>
        
                {/* Right CTA */}
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 justify-center md:justify-start">
              <a
                href=""
                className="bg-[#1142D4] text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-[#1142D4] transition"
              >
                Apply Now
              </a>
              <a
                href=""
                className=" bg-[#67bc2a] text-white px-6 py-3 rounded-md text-lg font-medium  transition"
              >
               Contact Desk
              </a>
            </div>
        </div>
        
    )
}