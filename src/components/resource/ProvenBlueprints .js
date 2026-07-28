import { useState } from "react";
import ResourceModal from "./ResourceModal";

const ProvenBlueprints = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resourceType, setResourceType] = useState("");

  const handleOpenModal = (type) => {
    setResourceType(type);
    setIsModalOpen(true);
  };

  return (
    <section className="w-full bg-white py-20">

      {/* HEADER */}
      <div className="text-center space-y-4 mb-16 px-4">
        <h2 className="text-3xl md:text-5xl font-playfair font-semibold">
          Proven Blueprints for Busy Professionals
        </h2>

        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          Actionable frameworks delivered straight to your pocket
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT BLOCK */}
        <div 
          onClick={() => handleOpenModal('pdf')}
          className="bg-[#F3F3F7] p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center cursor-pointer hover:shadow-xl transition-shadow rounded-xl"
        >

          {/* IMAGE */}
          <div className="w-full md:w-1/3 relative h-[220px] md:h-[180px] flex justify-center">
            <img
              src="/images/resource_1.png"
              alt="fitness"
              className="w-[80%] md:w-full h-full object-cover 
                         -rotate-3 md:-rotate-6 
                         rounded-lg shadow-lg 
                         transition duration-300 hover:scale-105"
            />
          </div>

          {/* CONTENT */}
          <div className="w-full md:w-2/3 space-y-4 text-center md:text-left">

            <h3 className="text-xl md:text-2xl font-semibold leading-snug">
              Why 75% Professionals <br />
              Fail at Fitness: And How to Fix It
            </h3>

            <p className="text-sm text-gray-600">
              Uncover the physiological barriers that prevent high achievers
              from mastering their health.
            </p>

            {/* TICK */}
            <div className="flex items-center justify-center md:justify-start gap-2 text-sm font-medium">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                ✓
              </div>
              PDF + Audio Guide
            </div>

          </div>
        </div>

        {/* RIGHT BLOCK */}
        <div 
          onClick={() => handleOpenModal('protocol')}
          className="bg-[#F3F3F7] p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center cursor-pointer hover:shadow-xl transition-shadow rounded-xl"
        >

          {/* IMAGE */}
          <div className="w-full md:w-1/3 relative h-[220px] md:h-[180px] flex justify-center">
            <img
              src="/images/resource_2.png"
              alt="fitness"
              className="w-[80%] md:w-full h-full object-cover 
                         rotate-3 md:rotate-6 
                         rounded-lg shadow-lg 
                         transition duration-300 hover:scale-105"
            />
          </div>

          {/* CONTENT */}
          <div className="w-full md:w-2/3 space-y-4 text-center md:text-left">

            <h3 className="text-xl md:text-2xl font-semibold leading-snug">
              The Busy Professional’s <br />
              Guide to Losing 5-10kg <br /> (Without the Gym)
            </h3>

            <p className="text-sm text-gray-600">
              The tactical guide to fat loss when your calendar
              is your biggest obstacle.
            </p>

            {/* TICK */}
            <div className="flex items-center justify-center md:justify-start gap-2 text-sm font-medium">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                ✓
              </div>
              Step-By-Step Protocol
            </div>

          </div>
        </div>

      </div>

      <ResourceModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        resourceType={resourceType} 
      />
    </section>
  );
};

export default ProvenBlueprints;