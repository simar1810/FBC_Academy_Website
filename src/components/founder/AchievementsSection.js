"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const achievements = [
  "/images/achievements/achievement_1.jpg",
  "/images/achievements/achievement_2.jpg",
  "/images/achievements/achievement_3.jpg",
  "/images/achievements/achievement_4.jpg",
  "/images/achievements/achievement_5.jpg",
  "/images/achievements/achievement_6.jpg",
  "/images/achievements/achievement_7.jpg",
  "/images/achievements/achievement_12.jpg",
  "/images/achievements/achievement_9.jpg",
  "/images/achievements/achievement_10.jpg",
  "/images/achievements/achievement_11.jpg",
  
];

const AchievementsSection = () => {
  return (
    <section className="py-24 bg-white">
      
      {/* HEADER */}
      <div className="w-full mb-16 px-6 md:px-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-bold font-playfair">
            Founder <span className="text-[#67bc2a]">Achievements</span>
          </h2>
          <p className="text-gray-500">
            Milestones, recognitions, and proof of excellence.
          </p>
        </div>
      </div>

      {/* SLIDER */}
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          loopFillGroupWithBlank={true}
          slidesPerGroup={1}
          
          autoplay={{
            delay: 0, // continuous smooth scroll
            disableOnInteraction: false,
          }}
          speed={3000}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {achievements.map((src, index) => (
            <SwiperSlide key={index}>
              
              <div className="rounded-2xl overflow-hidden shadow-lg group">
                
                {/* IMAGE */}
                <div className="relative w-full h-[300px] md:h-[400px]">
                  <Image
                    src={src}
                    alt={`achievement-${index}`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />

                  {/* DARK OVERLAY */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>
                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AchievementsSection;