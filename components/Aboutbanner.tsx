import React from "react";
import TitleBg from "./TitleBg";
import { DescriptionComp, HeadingComp } from "@/lib/Common";
import Image from "next/image";
import { Button } from "./ui/button";

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
        <Button variant={"custom1"} size={"lg"} className="w-[300px]">
          Contact us{" "}
        </Button>
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

export const AboutBanner2 = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-x-12 p-2 lg:p-8 lg:pb-24">
      <div className="flex items-center lg:items-start justify-center lg:justify-start flex-col gap-8 lg:mt-10 max-w-[600px]">
        <TitleBg title="Who we are" />
        <HeadingComp
          title="We transform you into your dream build"
          advStyle="capitalize text-[34px]"
        />
        <DescriptionComp
          desc="At FitnessHub, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals."
          advStyle="text-left text-muted-foreground max-w-[600px]"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 ">
          <div className="flex items-center flex-row lg:flex-col gap-2 lg:border-r-[1px] border-muted-foreground/30">
            <Image
              alt="trainer"
              src={"/assets/icons/trainer.png"}
              height={500}
              width={500}
              className="w-16 h-16 opacity-85"
            />
            <h1 className="uppercase text-lg text-muted-foreground/80 font-semibold dark:font-medium text-center">
              Professional Trainers
            </h1>
          </div>
          <div className="flex items-center flex-row lg:flex-col gap-2 lg:border-r-[1px] border-muted-foreground/30">
            <Image
              alt="trainer"
              src={"/assets/icons/gymEquip.png"}
              height={500}
              width={500}
              className="w-16 h-16 opacity-85"
            />
            <h1 className="uppercase text-lg text-muted-foreground/80 font-semibold dark:font-medium text-center">
              Modern Equipments
            </h1>
          </div>
          <div className="flex items-center flex-row lg:flex-col gap-2 ">
            <Image
              alt="trainer"
              src={"/assets/icons/machine.png"}
              height={500}
              width={500}
              className="w-16 h-16 opacity-85"
            />
            <h1 className="uppercase text-lg text-muted-foreground/80 font-semibold dark:font-medium text-center">
              Best Gym Machines
            </h1>
          </div>
        </div>
        <Button
          variant={"custom1"}
          size={"lg"}
          className="mt-5 min-w-[300px] lg:w-[400px] mx-auto"
        >
          Take a tour{" "}
        </Button>
      </div>
      <div className="relative mt-20 mb-5 lg:mb-0 lg:mt-0">
        <Image
          src={"/assets/running.png"}
          alt="running-img"
          height={1600}
          width={1600}
          className="w-[300px] lg:w-[500px] h-auto -scale-x-100 bottom-2 relative z-10 "
        />
        <div className="w-[180px] h-[360px] lg:w-[275px] lg:h-[550px] rounded-r-full bg-[#ce032c] absolute -right-[16px] bottom-[20px]"></div>
        <Image
          width={500}
          height={500}
          alt="wind"
          src={"/assets/wind.png"}
          className="w-16 h-16 lg:w-20 lg:h-20 absolute z-20 right-10 bottom-36 lg:bottom-64"
        />

        <Image
          width={400}
          height={400}
          src={"/assets/run.png"}
          alt="runn"
          className="absolute w-[36px] lg:w-[80px] h-auto bottom-12 lg:bottom-5 left-10 dark:opacity-50"
        />
      </div>
    </div>
  );
};

export default AboutBanner;
