import TitleBg from "@/components/TitleBg";
import { DescriptionComp, HeadingComp } from "@/lib/Common";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-[url(/assets/bg/bg-2.jpg)] dark:bg-none">
      <h1 className="absolute top-[260px] left-[44%] text-[30px] tracking-wide font-semibold capitalize text-white dark:text-white">
        About
      </h1>
      <div className="flex justify-center gap-5 p-16">
        <div className="flex items-start justify-start flex-col w-[450px] gap-8">
          <TitleBg title="Who we are" />
          <HeadingComp
            title="We mould you into your dream physique"
            advStyle="capitalize text-[28px]"
          />
          <DescriptionComp
            desc="At Gymate, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals."
            advStyle="text-left text-muted-foreground"
          />
        </div>
        <div className="relative">
          <Image
            src={"/assets/running.png"}
            alt="running-img"
            height={1600}
            width={1600}
            className="w-[400px] h-auto -scale-x-100 bottom-2 relative z-10 "
          />
          <div className="w-[185px] h-[370px] rounded-r-full bg-[#ce032c] absolute right-[8px] bottom-[15px]"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
