'use client'
import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


export const testimonials = [
    {
        name: "Natalie Summers",
        description: "Internet banking made my life easier—effortless transactions, robust security. A game-changer for financial management!",
        image: "/aboutus-1.png",
        rating: 5,
    },
    {
        name: "Owen Evans",
        description: "Seamless and secure, Internet banking streamlines my transactions, providing convenience and peace of mind. Highly recommended!",
        image: "/aboutus-1.png",
        rating: 4,
    },
    {
        name: "Natalie Summers",
        description: "Internet banking made my life easier—effortless transactions, robust security. A game-changer for financial management!",
        image: "/aboutus-1.png",
        rating: 3,
    },
    {
        name: "Natalie Summers",
        description: "Internet banking made my life easier—effortless transactions, robust security. A game-changer for financial management!",
        image: "/aboutus-1.png",
        rating: 2,
    },
    {
        name: "Natalie Summers",
        description: "Internet banking made my life easier—effortless transactions, robust security. A game-changer for financial management!",
        image: "/aboutus-1.png",
        rating: 1,
    },
    {
        name: "Natalie Summers",
        description: "Internet banking made my life easier—effortless transactions, robust security. A game-changer for financial management!",
        image: "/aboutus-1.png",    
        rating: 0,
    }
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="bg-white  flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <div className="flex justify-center">
          <span className="  text-[14px] font-medium tracking-[0.14em] uppercase text-[#031B1D] border border-[#f1eded] px-4 py-1.5 rounded-full w-fit">
            Testimonals
          </span>
        </div>

        <h2 className="text-[48px]  font-medium text-[#111]  text-center ">
          What they say about us
        </h2>

        <h3 className="text-[16px]   font-medium text-[#6B6969] leading-[25px]  text-center ">
          Real Stories. Real Relief. Real Results.
        </h3>
      </div>
      <div className="">
      <Swiper
      slidesPerView={1}
      spaceBetween={20}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      modules={[Autoplay]}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      className="mySwiper"
    >
      {testimonials.map((testimonial, index) => {
        const isActive = index === activeIndex;
        return (
          <SwiperSlide key={index} className="h-auto!">
            <div
              className={`border rounded-3xl min-h-[475px] px-10 py-[32px] transition-colors duration-300 h-auto! flex flex-col justify-center ${
                isActive
                  ? "bg-[#0F2A47] border-[#0F2A47] text-white"
                  : "border-[#0F2A47] bg-white text-[#111]"
              }`}
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={172}
                height={172}
                className="rounded-full mb-8 mx-auto"
              />
              <p
                className={`text-[28px] font-medium ${
                  isActive ? "text-white" : "text-[#111]"
                }`}
              >
                {testimonial.name}
              </p>
              <p
                className={`text-[16px] font-medium mt-3 mb-5 ${
                  isActive ? "text-white/80" : "text-[#111]"
                }`}
              >
                {testimonial.description}
              </p>
              <div className="flex gap-1 justify-end">
  {Array.from({ length: testimonial.rating }, (_, i) => (
    <svg key={i} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.1 28.3333L10.2667 18.9667L3 12.6667L12.6 11.8333L16.3333 3L20.0667 11.8333L29.6667 12.6667L22.4 18.9667L24.5667 28.3333L16.3333 23.3667L8.1 28.3333Z" fill="#FAD445"/>
    </svg>
  ))}
</div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
        
      </div>
    </section>
  );
};

export default Testimonials;
