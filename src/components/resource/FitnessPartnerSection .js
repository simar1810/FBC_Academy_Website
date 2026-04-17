const FitnessPartnerSection = () => {
  return (
    <section className="w-full py-20 bg-white">

      {/* CENTERED CONTAINER (THIS FIXES IT) */}
      <div className="max-w-7xl mx-auto bg-[#F3F3F7] overflow-hidden">

        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center space-y-6 p-8 md:p-14">

            <h2 className="text-3xl md:text-6xl font-playfair font-semibold leading-tight">
              Your Digital <br />
              Fitness Partner.
            </h2>

            <p className="text-gray-600 text-sm md:text-base text-justify leading-relaxed">
              Download the FBC Academy app to experience
              the exact system my VIP clients use — high fidelity
              tracking meets high-performance science.
            </p>

            {/* FEATURES */}
            <div className="space-y-6 mt-4">

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 flex items-center justify-center rounded-lg">
                  📊
                </div>
                <div>
                  <h4 className="font-semibold text-sm md:text-base">
                    Smart Calculator
                  </h4>
                  <p className="text-sm text-gray-600">
                    Instantly calculate your Fat %, BMR, and TDEE.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 flex items-center justify-center rounded-lg">
                  📈
                </div>
                <div>
                  <h4 className="font-semibold text-sm md:text-base">
                    Track & Design
                  </h4>
                  <p className="text-sm text-gray-600">
                    Build your personalized performance system.
                  </p>
                </div>
              </div>

            </div>

            <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl w-fit hover:bg-blue-700 transition">
              Download for Free
            </button>

            <div className="flex gap-4 flex-wrap">
              <button className="px-6 py-3 border border-gray-300 rounded-lg bg-black text-white text-sm  transition">
                App Store
              </button>

              <button className="px-6 py-3 border border-gray-300 rounded-lg bg-black text-white text-sm  transition">
                Google Play
              </button>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative min-h-[400px] md:min-h-[600px]">
            <img
              src="/images/resource_3.jpg"
              alt="app preview"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>

      </div>

    </section>
  );
};

export default FitnessPartnerSection;