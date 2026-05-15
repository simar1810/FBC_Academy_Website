"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  "/images/testimonials/testimonial_1.jpg",
  "/images/testimonials/testimonial_2.jpg",
  "/images/testimonials/testimonial_3.jpg",
  "/images/testimonials/testimonial_4.jpg",
  "/images/testimonials/testimonial_5.jpg",
  "/images/testimonials/testimonial_6.jpg",
  "/images/testimonials/testimonial_7.jpg",
  "/images/testimonials/testimonial_8.jpg",
  "/images/testimonials/testimonial_9.jpg",
  "/images/testimonials/testimonial_11.jpg",
  "/images/testimonials/testimonial_12.jpg",
  "/images/testimonials/testimonial_13.jpg",
  "/images/testimonials/testimonial_14.png",
  "/images/testimonials/testimonial_15.png",
  "/images/testimonials/testimonial_16.png",
  "/images/testimonials/testimonial_17.png",
  "/images/testimonials/testimonial_18.png",
  "/images/testimonials/testimonial_19.jpg",
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* TITLE */}
        <h2 className="text-3xl md:text-5xl font-playfair font-bold text-primary mb-10 sm:mb-20">
          Client <span className="text-[#1142D4]">Testimonials</span>
        </h2>

        {/* CAROUSEL */}
        <div className="relative px-2 sm:px-8">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12" // Padding for pagination dots
          >
            {testimonials.map((src, i) => (
              <SwiperSlide key={i} className="pb-8">
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300 h-96 relative border border-gray-100 flex items-center justify-center p-2">
                  <Image
                    src={src}
                    alt={`Testimonial ${i + 1}`}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <style jsx global>{`
        .swiper-button-next, .swiper-button-prev {
          color: #67bc2a !important;
          background-color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 16px !important;
          font-weight: bold;
        }
        .swiper-pagination-bullet-active {
          background-color: #1142D4 !important;
        }
      `}</style>
    </section>
  );
}