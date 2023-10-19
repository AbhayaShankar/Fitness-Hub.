"use client";

import { cn } from "@/lib/utils";
import { ChevronUp, Facebook, Instagram, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import { Montserrat, Poppins } from "next/font/google";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

interface TrainerCardProps {
  name: string;
  type: string;
  src: string;
}

const TrainerCard = ({ name, type, src }: TrainerCardProps) => {
  return (
    <main className="flex flex-col w-[22rem] cursor-pointer text-center  rounded-[8px] pt-2">
      <div className="relative">
        <Image
          src={src}
          alt="trainer-img"
          width={800}
          height={800}
          className="w-[225px] h-[225px] grayscale hover:grayscale-0 transition-all duration-300 ease-in relative mx-auto z-10 object-cover object-top "
        />
        <Image
          src={"/assets/profileBg.png"}
          alt="profile-bg"
          width={500}
          height={500}
          className="absolute w-[320px] h-[320px] top-1 left-5  dark:opacity-80 "
        />
      </div>
      <div
        className={cn(
          "text-center px-5 py-8 space-x-5 z-10 bg-white dark:bg-white shadow-2xl relative flex items-center flex-col box-desc rounded-xl backdrop-blur-lg",
          font.className
        )}
      >
        <Image
          src={"/assets/card-top.png"}
          alt="trainer-card-badge"
          width={500}
          height={500}
          className="absolute -top-[25px] w-auto h-auto"
        />
        <ChevronUp
          className={cn(
            "absolute -top-4 left-[145px] w-auto h-auto dark:text-black"
          )}
        />
        <h2 className="text-2xl font-bold mb-1 dark:text-black ">{name}</h2>
        <p className="text-muted-foreground text-sm mb-[10px]">{type}</p>
        <div className="flex items-center gap-5" style={{ marginLeft: "5px" }}>
          <Facebook
            className="w-5 h-5"
            fill="#5f5f5f"
            stroke="1px"
            color="#5f5f5f"
          />
          <Instagram color="#5f5f5f" strokeWidth={2} className="w-5 h-5" />
          <Twitter
            className="w-5 h-5"
            fill="#5f5f5f"
            stroke="1px"
            color="#5f5f5f"
          />
          <Mail color="#5f5f5f" strokeWidth={2} className="w-5 h-5" />
        </div>
      </div>
    </main>
  );
};

export default TrainerCard;
