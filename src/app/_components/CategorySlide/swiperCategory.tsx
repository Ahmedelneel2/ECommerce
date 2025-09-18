"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const SwiperCategory = ({categories}) => {
  return (
    <div>
          <Swiper
          spaceBetween={2}
          slidesPerView={5}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
             modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
     {categories.map((category ,idx)=>{
            return <SwiperSlide key={idx} >
                <img className='h-[300px] rounded-sm object-cover ' src={category.image} alt="category image" ></img>
                <p className="text-center">{category.name}</p>
            </SwiperSlide>
        })  }            
           </Swiper>
    </div>
  )
}

export default SwiperCategory