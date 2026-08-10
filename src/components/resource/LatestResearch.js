import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { blogsData } from '@/data/blogs';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/navigation';

const LatestResearch = () => {
  return (
    <section id="blogs" className="max-w-7xl mx-auto px-4 md:px-10 py-20 relative scroll-mt-20">

      {/* Header */}
      <div className="text-center mb-12">
         <h2 className="text-3xl md:text-5xl font-playfair font-semibold">
           Blogs
         </h2>
      </div>

      {/* Cards Slider */}
      <div className="relative px-2">
        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev-custom absolute left-0 md:left-[-20px] top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white shadow-lg p-2 rounded-full text-gray-800 hover:bg-gray-100 flex items-center justify-center">
           <IoIosArrowBack size={24} />
        </div>
        
        <div className="swiper-button-next-custom absolute right-0 md:right-[-20px] top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white shadow-lg p-2 rounded-full text-gray-800 hover:bg-gray-100 flex items-center justify-center">
           <IoIosArrowForward size={24} />
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full h-full py-4"
        >
          {blogsData.map((item) => (
            <SwiperSlide key={item.id} className="flex h-auto">
              <div className="flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow h-full w-full">
                
                {/* Image */}
                <div className="w-full h-[250px] bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Text */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-[#1142D4] text-xs uppercase tracking-wide font-semibold mb-2">
                    {item.category} • {item.date}
                  </p>

                  <h3 className="text-xl font-semibold leading-snug mb-3 line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1 line-clamp-3">
                   {item.excerpt}
                  </p>

                  <Link href={`/resources/blog/${item.id}`} className="mt-auto inline-block cursor-pointer">
                    <button className="bg-[#1142D4] text-white px-6 py-2 rounded hover:bg-blue-800 transition w-full cursor-pointer">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  )
}

export default LatestResearch;