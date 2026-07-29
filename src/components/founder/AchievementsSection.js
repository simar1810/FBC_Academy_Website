"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

/** Featured Valor Classic judge banner — used on founder page and homepage */
export function ValorClassicBanner({ showCta = true }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-950 shadow-lg">
      <div className="relative w-full aspect-square sm:aspect-[4/3] md:aspect-[5/4] bg-black">
        <Image
          src="/images/achievements/achievement_11.jpg"
          alt="Valor Classic National Level Championship - Confirmed Judge Ankush Bhaskar"
          fill
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-contain object-center"
          priority
        />
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-5 py-4 bg-gradient-to-r from-[#1a0a2e] to-[#2e1048] text-white">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-300 mb-1">
            National Stage
          </p>
          <h3 className="font-playfair text-lg sm:text-xl font-bold">
            Valor Classic 2023: Confirmed Judge
          </h3>
          <p className="text-sm text-white/70 mt-1">
            Vashi CIDCO Auditorium, Mumbai · 2nd July 2023
          </p>
        </div>
        {showCta && (
          <Link
            href="/about-founder"
            className="inline-flex w-fit items-center justify-center rounded-md bg-[#67bc2a] px-4 py-2.5 text-sm font-semibold text-white hover:bg-green-600 transition"
          >
            Meet the Founder
          </Link>
        )}
      </div>
    </div>
  );
}

const credentials = [
  {
    src: "/images/achievements/achievement_3.jpg",
    title: "National-Level Athlete",
    detail: "Former competitor and Mr. Chandigarh 2013 (IBBF).",
  },
  {
    src: "/images/achievements/achievement_11.jpg",
    title: "Industry Authority",
    detail: "Invited to judge Valor Classic National Championship 2023, Mumbai.",
    featured: true,
  },
  {
    src: "/images/achievements/achievement_12.jpg",
    title: "World PhD Chakra Awardee",
    detail:
      "The only fitness coach representing India among doctors and medical experts in a global preventive healthcare talk.",
  },
  {
    src: "/images/achievements/achievement_2.jpg",
    title: "Global Speaker",
    detail:
      "Keynote invitations including Brahmakumaris and Trainers Growth Conclave (Dubai).",
  },
];

const gallery = [
  "/images/achievements/achievement_1.jpg",
  "/images/achievements/achievement_4.jpg",
  "/images/achievements/achievement_5.jpg",
  "/images/achievements/achievement_6.jpg",
  "/images/achievements/achievement_7.jpg",
  "/images/achievements/achievement_9.jpg",
  "/images/achievements/achievement_10.jpg",
];

export default function AchievementsSection() {
  return (
    <section id="credentials" className="py-20 md:py-24 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1142D4] mb-3">
            Proof of Excellence
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold font-playfair text-gray-900">
            Credentials & <span className="text-[#67bc2a]">Recognition</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Athlete roots, national judging, global speaking, and awards — shown in full, not cropped.
          </p>
        </div>

        {/* Featured Valor Classic */}
        <div className="mb-14 max-w-5xl mx-auto">
          <ValorClassicBanner showCta={false} />
        </div>

        {/* Four core credentials with full images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-14">
          {credentials
            .filter((item) => !item.featured)
            .map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm"
              >
                <div className="relative w-full aspect-[4/5] bg-gray-100">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-2"
                  />
                </div>
                <div className="px-5 py-4 border-t border-gray-200 bg-white">
                  <h3 className="font-playfair text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm md:text-base text-gray-600 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </article>
            ))}
        </div>

        {/* Additional recognition gallery — contain, never crop posters */}
        <div>
          <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-6 text-center">
            More Recognition
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {gallery.map((src) => (
              <div
                key={src}
                className="relative aspect-[4/5] overflow-hidden rounded-xl border border-gray-200 bg-gray-100"
              >
                <Image
                  src={src}
                  alt="Founder recognition"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
