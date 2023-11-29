"use client";

import React from "react";
import TitleBg from "./TitleBg";
import { DescriptionComp, HeadingComp } from "@/lib/Common";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const AboutBanner = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-x-12 p-2 lg:p-8">
      <div className="flex items-start justify-start flex-col gap-8">
        <TitleBg title="Who we are" />
        <HeadingComp
          title="We mould you into your dream physique"
          advStyle="capitalize text-[28px]"
        />
        <DescriptionComp
          desc="At FitnessHub, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals."
          advStyle="text-left text-muted-foreground max-w-[600px]"
        />
        <Link href={"/contact"}>
          <Button variant={"custom1"} size={"lg"} className="w-[300px]">
            Contact us{" "}
          </Button>
        </Link>
      </div>
      <div className="relative mt-20 mb-5 lg:mb-0 lg:mt-0">
        <Image
          src={"/assets/running.png"}
          alt="running-img"
          height={1600}
          width={1600}
          className="w-[300px] lg:w-[360px] h-auto -scale-x-100 bottom-2 relative z-10 "
        />
        <div className="w-[180px] h-[360px] lg:w-[210px] lg:h-[420px] rounded-r-full bg-[#ce032c] absolute -right-[24px] -bottom-[20px]"></div>
        <Image
          width={500}
          height={500}
          alt="wind"
          src={"/assets/wind.png"}
          className="w-16 h-16 lg:w-20 lg:h-20 absolute z-20 right-10 bottom-36 lg:bottom-40"
        />

        <Image
          width={400}
          height={400}
          src={"/assets/run.png"}
          alt="runn"
          className="absolute w-[36px] lg:w-[44px] h-auto bottom-12 lg:bottom-16 left-10 dark:opacity-50"
        />
      </div>
    </div>
  );
};

export default AboutBanner;
