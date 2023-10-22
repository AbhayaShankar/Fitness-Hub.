import { classes } from "@/constants";
import { HeadingComp } from "@/lib/Common";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-evenly px-6 py-10 gap-y-5">
      {/* Title */}
      <div className="flex flex-col gap-y-[16px]">
        <div className="flex items-center space-x-3 ">
          <Image
            src={"/logo.png"}
            width={500}
            height={500}
            className="h-10 w-10"
            alt="logo-fh"
          />
          <div>
            <h1 className="text-2xl tracking-normal font-bold">
              <span className="dark:text-[#fafe19]">Fitness </span>
              Hub
            </h1>
            <p className="text-[9.5px] uppercase tracking-wide text-muted-foreground">
              Ultimate Fitness Center
            </p>
          </div>
        </div>
        <p className="text-muted-foreground">
          We help building your dream Physique...
        </p>
        <div className="flex items-center gap-5">
          <div className="bg-gray-200 rounded-full p-2">
            <Instagram
              color="#5f5f5f"
              strokeWidth={2}
              className="w-6 h-6 hover:stroke-[#ce032c] transition-all ease-in duration-100"
            />
          </div>
          <div className="bg-gray-200 rounded-full p-2">
            <Facebook
              fill="#5f5f5f"
              stroke="1px"
              color="#5f5f5f"
              className="w-6 h-6 hover:fill-[#ce032c] transition-all ease-in duration-100"
            />
          </div>
          <div className="bg-gray-200 rounded-full p-2">
            <Twitter
              fill="#5f5f5f"
              stroke="1px"
              color="#5f5f5f"
              className="w-6 h-6 hover:fill-[#ce032c] transition-all ease-in duration-100"
            />
          </div>
          <div className="bg-gray-200 rounded-full p-2">
            <Youtube
              color="#5f5f5f"
              strokeWidth={2}
              className="w-6 h-6 hover:stroke-[#ce032c] transition-all ease-in duration-100"
            />
          </div>
        </div>
        <p className="text-muted-foreground">
          Privacy policy | ©️ FitnessHub 2023 <br /> Designed by{" "}
          <Link
            className=""
            href={"https://github.com/AbhayaShankar/Fitness-Hub."}
            target="_blank"
          >
            Abhaya Shankar
          </Link>
        </p>
      </div>
      <div className="relative">
        {/* classes and working hours */}
        <HeadingComp title="Our Classes" advStyle="capitalize text-2xl mb-3" />
        <span className="top-[33px] absolute w-[4rem] h-[4px] bg-[#ce032c]"></span>
        <div className="flex flex-col items-start gap-2">
          {classes.map((item) => (
            <Link
              href={"/classes"}
              key={item.name}
              className="font-semibold tracking-[0.15px] text-muted-foreground hover:text-[#ce032c]"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="relative">
        {/* classes and working hours */}
        <HeadingComp
          title="Training Hours"
          advStyle="capitalize text-2xl mb-3"
        />
        <span className="top-[33px] absolute w-[4rem] h-[4px] bg-[#ce032c]"></span>
        <div className="flex flex-col items-start gap-2">
          {classes.map((item) => (
            <Link
              href={"/classes"}
              key={item.name}
              className="font-semibold tracking-[0.15px] text-muted-foreground"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div></div>
        {/* Policies */}
      </div>
    </div>
  );
};

export default Footer;
