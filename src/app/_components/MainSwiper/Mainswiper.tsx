"use client"
import React from 'react'
// Import Swiper styles
import banner1 from "./../../../../public/screens/slider/grocery-banner.png"
import banner2 from "./../../../../public/screens/slider/grocery-banner-2.jpeg"
import firstSlide from "./../../../../public/screens/slider/slider-image-1.jpeg"
import secSlide from "./../../../../public/screens/slider/slider-image-2.jpeg"
import thirdSlide from "./../../../../public/screens/slider/slider-image-3.jpeg"
import  Image  from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const Mainswiper = () => {
  return (
    <div className='flex p-3'>
        <div className='w-2/3 '>
  
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
         modules={[Autoplay]}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}>
      <SwiperSlide> <Image src={firstSlide} alt="firstSlide" className="h-[400px] object-cover w-[93%] mx-auto" ></Image> </SwiperSlide>
      <SwiperSlide> <Image src={secSlide} alt="firstSlide" className="h-[400px] object-cover w-[93%] mx-auto" ></Image> </SwiperSlide>
      <SwiperSlide> <Image src={thirdSlide} alt="firstSlide" className="h-[400px] object-cover w-[93%] mx-auto" ></Image> </SwiperSlide>
    </Swiper>
        </div>
        <div className='w-1/3'>
        <Image src={banner1} className="h-[200px] object-cover " alt='banner images'></Image>
        <Image src={banner2} className="h-[200px] object-cover " alt='banner images'></Image>
    
        </div>
    </div>
  )
}

export default Mainswiper