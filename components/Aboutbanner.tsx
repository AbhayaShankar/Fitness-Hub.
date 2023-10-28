import React from "react";
import TitleBg from "./TitleBg";
import { DescriptionComp, HeadingComp } from "@/lib/Common";
import Image from "next/image";

const Aboutbanner = () => {
  return (
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
          className="w-[360px] h-auto -scale-x-100 bottom-2 relative z-10 "
        />
        <div className="w-[210px] h-[420px] rounded-r-full bg-[#ce032c] absolute -right-[24px] -bottom-[20px]"></div>
        {/* <Wind
            color="#bebebe"
            className="w-20 h-20 absolute z-20 right-10 bottom-40"
            strokeWidth={1.75}
          /> */}
        <Image
          width={500}
          height={500}
          alt="wind"
          src={"/assets/wind.png"}
          className="w-20 h-20 absolute z-20 right-10 bottom-40"
        />

        <Image
          width={400}
          height={400}
          src={"/assets/run.png"}
          alt="runn"
          className="absolute w-[44px] h-auto bottom-16 left-10 dark:opacity-50"
        />
      </div>
    </div>
  );
};

export default Aboutbanner;
