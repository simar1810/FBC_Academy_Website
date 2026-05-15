// src/components/JourneySection.js

export default function JourneySection() {
  return (
    <section className="w-full py-24 bg-gray-50 flex flex-col items-center text-center px-4 md:px-0">

     

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-playfair">
        The Journey
      </h2>

      {/* Paragraph 1 */}
      <p className="text-gray-600 max-w-xl md:max-w-4xl text-sm mt-8 text-justify">
        Long before I founded Fit Body Culture, I lived at the peak of the
        "intensity obsession" as a National Fitness Athlete (Mr. Chandigarh
        2013) and an Actor in Mumbai’s high-stakes film & television industry.
        I mastered the science of stage-ready aesthetics, but I did so while
        navigating 14-hour shooting days and the erratic schedules of a daily
        soap. 
      </p>

      {/* Paragraph 2 */}
      <p className="text-gray-600 max-w-xl md:max-w-4xl text-sm text-justify mt-6">
        It was on those shoot sets, while performing my acting job, that my
        perspective shifted. I realized I was living a life identical to the
        corporate busy professionals and entrepreneurs I was coaching. Facing
        similar high pressure, zero "perfect" time, and constant performance
        demands. I saw clearly how traditional, extreme fitness advice puts too
        much burden on an already hectic schedule making it more complicated
        and tough to follow.Ultimately realising, if a system requires you to sacrifice your
        career or your peace of mind to work, it isn’t a strategy—it’s a
        liability.
      </p>

      {/* Image */}
      <img
        src="images/founder_journey.jpg"
        alt="Journey Image"
        className="rounded-md w-full max-w-md md:max-w-4xl shadow-lg mt-10"
      />

      {/* Breakthrough Heading */}
      <h3 className="text-2xl font-playfair sm:text-3xl font-bold mt-10 mb-4 w-full max-w-md md:max-w-4xl text-left">
        THE BREAKTHROUGH
      </h3>

      {/* Paragraph 3 */}
      <p className="text-gray-600 max-w-xl md:max-w-4xl text-sm text-justify font-manrope">
        The Total Body Re-Set wasn't born in a classroom; it took birth through
        12 years of coaching over 1,000 Individuals including Actors & Models,
        Household CEOs, Top Busy Professionals, Entrepreneurs across India, the
        USA, and Dubai. Through deep empathy and sharp observation, I noticed a
        frustrating gap: Busy Professionals were being set up to fail by
        extreme, "all-or-nothing" systems that tried to train them like
        full-time athletes.
      </p>

      {/* Paragraph 4 */}
      <p className="text-gray-600 max-w-xl md:max-w-4xl text-sm text-justify mt-6">
        I realized that for a busy professional, fitness cannot and should not
        be the top priority. Their focus is on growing career, managing
        finances, showing up for family and enjoying a good social life. The
        moment life calls, whether it’s a high-stakes meeting, work travel, or a
        family responsibility, traditional rigid fitness plans are the first
        thing to take a backseat. I decided to change that by simplifying the
        complex science into what I call the "Minimum Effective Dose".High-performance 
        results that fit seamlessly into your demanding life, rather
        than forcing your life to fit around fitness.
      </p>

    </section>
  );
}