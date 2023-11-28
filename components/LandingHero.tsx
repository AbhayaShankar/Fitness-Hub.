"use client";

import React, { useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const heroImages = [
  {
    id: 1,
    imgUrl: "/assets/hero-1.jpg",
  },
  {
    id: 2,
    imgUrl: "/assets/hero-2.jpg",
  },
  {
    id: 3,
    imgUrl: "/assets/hero-3.jpg",
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
      <div className="w-[60%] h-[80vh] overflow-hidden">
        <Image
          src={heroImage}
          alt="hero-image"
          width={500}
          height={500}
          className="w-full h-full object-contain object-bottom blur-[6px] transform scale-[1.8] bg-[#0c0a09]"
        />
      </div>
      <Swiper
        onSlideChange={handleSlideChange}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper flex items-end justify-end flex-row w-[40%] h-full !mr-0 bg-[#0c0a09]"
      >
        {heroImages.map((item) => (
          <SwiperSlide key={item.id} className="w-[800px] !h-[80vh]">
            <Image
              src={item.imgUrl}
              alt="hero-image"
              width={500}
              height={500}
              className="w-full h-full object-cover object-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LandingHero;
