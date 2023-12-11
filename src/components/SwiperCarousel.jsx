// import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { spotlights } from '../constant';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules

export default function SwiperCarousel() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280:{
              slidesPerView: 3,
              spaceBetween: 24,
            }
        }}
        className="mySwiper spotlight-carousel"
      >
      {
        spotlights.map((spotlight, index) =>(
          <SwiperSlide key = {index} className='relative'>
          {/* <div className="absolute md:left-[71%] lg:left-[75%] xl:left-[82%] bg-secondary-1100 w-[2.85rem] h-[7rem] min-h-fit grid items-center gap-x-4">
              <p className="absolute -left-4 font-exo font-normal text-caption text-white -rotate-90 capitalize border-2 border-white">
                  {spotlight.author}
              </p>
              <p className="absolute -left-3 font-dancing-script font-normal text-base text-tertiary-800 -rotate-90 capitalize border-2 border-white">
                  {spotlight.job}
              </p>
          </div> */}
          <img src={spotlight.img} alt="spotlight images" />
        </SwiperSlide>
        ))
      }
      </Swiper>
    </>
  );
}
