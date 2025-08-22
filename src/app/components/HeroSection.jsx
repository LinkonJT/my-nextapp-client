"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules"; 
import "swiper/css";



const HeroSection = () => {
  return (
    <div>
      <Swiper
       modules={[Autoplay, EffectFade]}
         effect="fade"
        spaceBetween={5}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="md:h-[550px] lg:h-[650px] h-[250px] bg-[url('https://images.unsplash.com/photo-1593766787879-e8c78e09cbbe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center">
              <div className="pt-20 md:pt-30 px-4">
                <h1 className="text-center text-amber-400 mb-2 font-bold text-md md:text-3xl">
                  Transform Your Walls Into a Stadium
                </h1>
                <p className="text-xs md:text-lg text-gray-200 text-center md:font-medium">
                  Bring the thrill of the game home with high-quality sports wallpapers. 
                  From football to basketball, make every wall your arena of inspiration.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="md:h-[550px] lg:h-[650px] h-[250px] bg-[url('https://images.unsplash.com/photo-1521731736495-67c35dd360af?q=80&w=1151&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center">
              <div className="pt-20 md:pt-30 px-4">
                <h1 className="text-center text-amber-400 mb-2 font-bold text-lg text-shadow-2xs md:text-3xl">
                  Celebrate Your Heroes Every Day
                </h1>
                <p className="text-xs md:text-lg text-gray-200 text-center md:font-medium">
                  Showcase your passion for your favorite athletes with vibrant, 
                  premium prints designed to keep the spirit of the game alive.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="md:h-[550px] lg:h-[650px] h-[250px] bg-[url('https://images.unsplash.com/photo-1576683668932-8af4812cbb56?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center">
              <div className="pt-20 md:pt-30 px-4">
                <h1 className="text-center text-amber-400 mb-2 font-bold text-sm md:text-3xl">
                  Premium Quality. Unmatched Passion.
                </h1>
                <p className="text-xs md:text-lg text-gray-200 text-center md:font-medium">
                  Choose from matte or glossy finishes, in sizes from small to XL. 
                  WallScape wallpapers are built to inspire and made to last.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
