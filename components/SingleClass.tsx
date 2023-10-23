"use client";

import { HeadingComp } from "@/lib/Common";
import { Clock4, UserCircle } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";

interface SingleClassProps {
  name: string;
  instructor: string;
  timing: string;
  imageUrl: string;
}

const SingleClass = ({
  name,
  instructor,
  timing,
  imageUrl,
}: SingleClassProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer singleClassCard transition-all"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={imageUrl}
        alt="class-img"
        width={500}
        height={500}
        className="w-[350px] h-[450px] object-cover rounded-xl cursor-pointer"
      />

      <div
        className={`w-[350px] p-4 absolute bottom-0 z-10 transition-all duration-500 ease-in hidden group-hover:block  ${
          isHovered ? "hover:gradient-animate" : ""
        }`}
      >
        <div className="relative">
          <HeadingComp
            title={name}
            advStyle="capitalize text-2xl mb-3 text-white"
          />
          <span className="top-[40px] absolute w-[4rem] h-[4px] bg-[#ce032c]"></span>
        </div>
        <div className=" pt-3 flex flex-col items-start gap-2 text-white/70">
          <div className="flex items-center gap-4 break-all">
            <UserCircle className="w-5 h-5" />
            <p>{instructor}</p>
          </div>
          <div className="flex items-start gap-4 break-all ">
            <Clock4 className="w-5 h-5" />
            <p>{timing}</p>
          </div>
        </div>
        <div className="flex justify-center py-8">
          <Button
            className="w-[75%] mx-auto"
            variant={"custom1"}
            onClick={() => console.log("Hello")}
          >
            Join Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SingleClass;
