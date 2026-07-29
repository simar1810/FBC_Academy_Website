// src/components/founder/JourneySection.js

export default function JourneySection() {
  return (
    <section className="w-full py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1142D4] mb-3">
            Origin Story
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold font-playfair text-gray-900">
            The <span className="text-[#67bc2a]">Journey</span>
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            From national-stage intensity to a system built for real life.
          </p>
        </div>

        {/* Act 1 */}
        <div className="grid md:grid-cols-[140px_1fr] gap-4 md:gap-10 mb-12 md:mb-16">
          <div className="md:pt-1">
            <span className="inline-flex rounded-full bg-[#1142D4]/10 text-[#1142D4] text-xs font-bold uppercase tracking-wider px-3 py-1.5">
              Act 01
            </span>
            <p className="mt-3 hidden md:block text-sm font-semibold text-gray-500 uppercase tracking-wide">
              The Peak
            </p>
          </div>
          <div className="border-l-4 border-[#1142D4] pl-5 md:pl-8 space-y-4">
            <h3 className="md:hidden text-lg font-bold font-playfair text-gray-900">
              The Peak
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Long before I founded Fit Body Culture, I lived at the peak of the{" "}
              <span className="font-semibold text-gray-900">&quot;intensity obsession&quot;</span>{" "}
              as a{" "}
              <span className="font-semibold text-[#1142D4]">National Fitness Athlete</span>{" "}
              (Mr. Chandigarh 2013) and an Actor in Mumbai&apos;s high-stakes film &amp; television industry.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              I mastered the science of stage-ready aesthetics, but I did so while navigating{" "}
              <span className="font-semibold text-gray-900">14-hour shooting days</span>{" "}
              and the erratic schedules of a daily soap.
            </p>
          </div>
        </div>

        {/* Act 2 */}
        <div className="grid md:grid-cols-[140px_1fr] gap-4 md:gap-10 mb-12 md:mb-16">
          <div className="md:pt-1">
            <span className="inline-flex rounded-full bg-[#67bc2a]/15 text-[#3d7a14] text-xs font-bold uppercase tracking-wider px-3 py-1.5">
              Act 02
            </span>
            <p className="mt-3 hidden md:block text-sm font-semibold text-gray-500 uppercase tracking-wide">
              The Shift
            </p>
          </div>
          <div className="border-l-4 border-[#67bc2a] pl-5 md:pl-8 space-y-4">
            <h3 className="md:hidden text-lg font-bold font-playfair text-gray-900">
              The Shift
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              It was on those shoot sets that my perspective shifted. I realized I was living a life identical to the{" "}
              <span className="font-semibold text-gray-900">corporate busy professionals and entrepreneurs</span>{" "}
              I was coaching: high pressure, zero &quot;perfect&quot; time, and constant performance demands.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Traditional, extreme fitness advice puts too much burden on an already hectic schedule, making it more complicated and tough to follow.
            </p>
            <blockquote className="rounded-xl bg-gray-900 text-white p-5 md:p-6 my-2">
              <p className="font-playfair text-xl md:text-2xl leading-snug">
                If a system requires you to sacrifice your career or your peace of mind to work, it isn&apos;t a strategy.{" "}
                <span className="text-[#67bc2a]">It&apos;s a liability.</span>
              </p>
            </blockquote>
          </div>
        </div>

        <div className="mb-14 md:mb-20 overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/images/founder_journey.jpg"
            alt="Ankush S. Bhaskar journey"
            className="w-full max-h-[480px] object-cover object-top"
          />
        </div>

        {/* Breakthrough */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1142D4] mb-2">
                Act 03
              </p>
              <h3 className="text-2xl sm:text-4xl font-playfair font-bold text-gray-900">
                The Breakthrough
              </h3>
            </div>
            <p className="text-sm font-medium text-gray-500 max-w-xs sm:text-right">
              Born from 12 years on the ground, not a textbook.
            </p>
          </div>

          <div className="space-y-5 text-gray-700 text-base md:text-lg leading-relaxed">
            <p>
              The Total Body Re-Set wasn&apos;t born in a classroom. It took shape through{" "}
              <span className="font-semibold text-[#1142D4]">12 years of coaching over 1,000 individuals</span>
              , including actors &amp; models, household CEOs, top busy professionals, and entrepreneurs across India, the USA, and Dubai.
            </p>
            <p>
              Through deep empathy and sharp observation, I noticed a frustrating gap: busy professionals were being set up to fail by extreme,{" "}
              <span className="font-semibold text-gray-900">&quot;all-or-nothing&quot; systems</span>{" "}
              that tried to train them like full-time athletes.
            </p>
            <p>
              For a busy professional, fitness cannot and should not be the top priority. Their focus is growing a career, managing finances, showing up for family, and enjoying a good social life. The moment life calls, whether it&apos;s a high-stakes meeting, work travel, or a family responsibility, traditional rigid fitness plans are the first thing to take a backseat.
            </p>
          </div>

          <div className="mt-8 rounded-xl border-l-4 border-[#67bc2a] bg-[#67bc2a]/10 px-5 py-4">
            <p className="text-gray-900 text-base md:text-lg leading-relaxed">
              I decided to change that by simplifying complex science into the{" "}
              <span className="font-bold text-[#3d7a14]">&quot;Minimum Effective Dose&quot;</span>
              : high-performance results that fit seamlessly into your demanding life, rather than forcing your life to fit around fitness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
