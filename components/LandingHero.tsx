"use client";

import React, { useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "@/app/swiper.css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, Navigation, EffectFade } from "swiper/modules";
import Image from "next/image";

const heroImages = [
  {
    id: 1,
    imgUrl: "/assets/hero-1.jpg",
    title: "Happy clients",
    reach: "6K+",
    desc: "We build trust and establish a strong bond with our clients through personalized fitness journeys.",
  },
  {
    id: 2,
    imgUrl: "/assets/hero-2.jpg",
    title: "Expert trainers",
    reach: "10+",
    desc: "Our expert trainers help you achieve your fitness goals and dream physique.",
  },
  {
    id: 3,
    imgUrl: "/assets/hero-3.jpg",
    title: "Years of Experience",
    reach: "5+",
    desc: "Join us to benefit from our years of expertise and elevate your fitness experience to new heights.",
  },
];

const LandingHero: React.FC = () => {
  const [heroImage, setHeroImage] = useState<string>(heroImages[0].imgUrl);

  const handleSlideChange = (swiper: SwiperType) => {
    const activeIndex = swiper.realIndex;
    const activeImage = heroImages[activeIndex].imgUrl;
    setHeroImage(activeImage);
  };

  return (
    <div className="flex items-start justify-end">
      <div className="w-[60%] h-[80vh] overflow-hidden relative transition-all ease-in duration-1000 ">
        <Image
          src={heroImage}
          alt="hero-image"
          width={500}
          height={500}
          className="w-full h-full object-contain object-bottom blur-[6px] transform translate-y-20 scale-[1.8] bg-[#0c0a09]"
        />
        <div className="absolute z-10 text-white text-lg top-0 left-0">
          Abhaya
        </div>
      </div>
      <Swiper
        onSlideChange={handleSlideChange}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        effect="fade"
        navigation={true}
        modules={[Pagination, Navigation, EffectFade]}
        className="mySwiper flex items-end justify-end flex-row w-[40%] h-full !mr-0 bg-[#0c0a09]"
      >
        {heroImages.map((item) => (
          <SwiperSlide key={item.id} className="w-[800px] !h-[80vh] relative">
            <Image
              src={item.imgUrl}
              alt="hero-image"
              width={500}
              height={500}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute uppercase bottom-16 right-0 w-[200px] h-[80px] text-center text-lg font-semibold m-auto border-[1px] flex items-center justify-center tracking-wide bg-muted/80 rounded-l-xl">
              {item.title}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LandingHero;
