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
import TitleBg from "./TitleBg";
import { HeadingComp } from "@/lib/Common";
import { Button } from "./ui/button";
import CountUp from "react-countup";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

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
      <div className="w-[66%] h-[80vh] overflow-hidden relative transition-all ease-in duration-1000 ">
        <Image
          src={heroImage}
          alt="hero-image"
          width={500}
          height={500}
          className="w-full h-full object-contain object-bottom blur-[6px] transform translate-y-20 scale-[1.8] bg-[#0c0a09]"
        />
        {/* Sharing icons */}
        <div className="absolute z-20 text-white text-lg top-20 right-0 flex items-center transform -rotate-90 gap-5">
          <div className="flex items-center flex-col gap-5 transform rotate-90 pt-32">
            <div className="bg-gray-200 group rounded-full p-1">
              <Instagram
                color="#5f5f5f"
                strokeWidth={2}
                className="w-4 h-4 group-hover:stroke-[#ce032c] transition-all ease-in duration-150"
              />
            </div>
            <div className="bg-gray-200 group rounded-full p-1">
              <Facebook
                fill="#5f5f5f"
                stroke="1px"
                color="#5f5f5f"
                className="w-4 h-4 group-hover:fill-[#ce032c] transition-all ease-in duration-150"
              />
            </div>
            <div className="bg-gray-200 group rounded-full p-1">
              <Twitter
                fill="#5f5f5f"
                stroke="1px"
                color="#5f5f5f"
                className="w-4 h-4 group-hover:fill-[#ce032c] transition-all ease-in duration-150"
              />
            </div>
            <div className="bg-gray-200 group rounded-full p-1">
              <Youtube
                color="#5f5f5f"
                strokeWidth={2}
                className="w-4 h-4 group-hover:stroke-[#ce032c] transition-all ease-in duration-150"
              />
            </div>
          </div>
          <div className="w-[40px] h-[2px] bg-[#ff0134]"></div>
          <h2 className="font-bold uppercase text-md tracking-wider">SHARE</h2>
        </div>
        {/* Main body - Overview */}
        <div className="absolute z-10 text-white text-lg top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-5">
          <TitleBg title="Come join us" />
          <h1 className=" capitalize text-center lg:!leading-[50px] lg:text-[36px] max-w-[450px] font-bold tracking-[0.2px]  dark:text-white text-xl">
            Make your body{" "}
            <span className="text-[#ff0134] uppercase italic border-b-[2px] border-[#ff0134] ">
              fit
            </span>{" "}
            and{" "}
            <span className="text-[#ff0134] uppercase italic border-b-[2px] border-[#ff0134] ">
              perfect
            </span>
          </h1>
          <Button
            variant={"custom1"}
            size={"lg"}
            className="mt-5 min-w-[300px] lg:w-[400px] mx-auto"
          >
            Join our classes
          </Button>
          <div className="flex items-center justify-evenly gap-8 mt-10 bg-background/5 dark:bg-background/20 p-4 rounded-xl">
            <div className="flex items-center flex-col gap-1">
              <CountUp start={0} end={55} delay={1} duration={3}>
                {({ countUpRef }) => (
                  <div className="text-2xl font-semibold">
                    <span ref={countUpRef} />
                    K+
                  </div>
                )}
              </CountUp>
              <p className="dark:text-muted-foreground font-medium text-sm">
                Happy Clients
              </p>
            </div>
            <div className="flex items-center flex-col">
              <CountUp start={0} end={10} delay={1} duration={3}>
                {({ countUpRef }) => (
                  <div className="text-2xl font-semibold">
                    <span ref={countUpRef} />+
                  </div>
                )}
              </CountUp>
              <p className="dark:text-muted-foreground font-medium text-sm">
                Expert Trainers
              </p>
            </div>
            <div className="flex items-center flex-col">
              <CountUp start={0} end={5} delay={1} duration={3}>
                {({ countUpRef }) => (
                  <div className="text-2xl font-semibold">
                    <span ref={countUpRef} />+
                  </div>
                )}
              </CountUp>
              <p className="dark:text-muted-foreground font-medium text-sm">
                Years Of Experience
              </p>
            </div>
          </div>
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
        className="mySwiper flex items-end justify-end flex-row w-[34%] h-full !mr-0 bg-[#0c0a09]"
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
            <div className="absolute uppercase bottom-16 right-0 w-[200px] h-[80px] text-center text-lg font-bold m-auto border-[1px] flex items-center justify-center tracking-wide bg-muted/80 rounded-l-xl">
              {item.title}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LandingHero;
