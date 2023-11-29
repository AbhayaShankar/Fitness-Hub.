"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ALL_CLASSES } from "@/constants";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { useAuth } from "@clerk/nextjs";

const SubscribeComp = (props: any) => {
  const { isSignedIn } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={cn("z-50 pb-10")}>
      <h1 className="uppercase text-lg lg:text-2xl font-semibold text-center mt-10">
        <span className="text-[#ff0336] font-bold">Subscribe </span> to Fitness
      </h1>
      <div className="relative">
        <Image
          src={"/assets/subscribe-cover.jpg"}
          alt="subscribe-cover-img"
          width={500}
          height={500}
          className="w-full h-[380px] object-cover p-2 rounded-2xl"
        />
        <div className="w-[calc(100%-50px)] lg:w-[320px] absolute bottom-5 left-6 lg:left-6 bg-[#3333337b] rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 p-4">
          <h1 className="text-lg lg:text-2xl font-semibold text-white">
            Struggle is Crucial & Essential to progress
          </h1>
          <p className="text-sm dark:text-muted-foreground text-white/50">
            Abhaya Shankar, Personal Trainer
          </p>
        </div>
      </div>
      {!isSignedIn && (
        <Link
          className="flex items-center py-2 px-5"
          href={"/sign-in"}
          onClick={() => props.setSheetOpen(false)}
        >
          <Button className="w-full mt-2" size={"lg"} variant={"custom2"}>
            {" "}
            Subscribe{" "}
          </Button>
        </Link>
      )}
      <div className="w-full flex items-start flex-col gap-3">
        <h3 className="capitalise text-[#ff0335] font-bold text-left tracking-wide mt-4 text-xl px-6 ">
          Classes
        </h3>
        <div className="grid grid-rows-2 grid-cols-3 mx-auto gap-[10px]">
          {ALL_CLASSES.map((item) => (
            <Image
              key={item.id}
              src={item.imageUrl}
              alt={item.name}
              height={400}
              width={400}
              className="h-[95px] w-[95px] lg:h-[102px] lg:w-[102px] object-cover rounded-xl"
            />
          ))}
        </div>
      </div>
      <div className="w-full flex items-start flex-col gap-3 px-6 py-4">
        <h3 className="capitalise text-[#ff0336] font-bold text-left tracking-wide mt-2 text-xl">
          Contact Info
        </h3>
        <div className="text-muted-foreground font-medium">
          <div className="flex justify-start items-center gap-x-2 mb-1">
            <MapPin
              stroke="#ff033594"
              className="h-5 w-5 relative -left-[2px]"
            />
            <p>Putki, Dhanbad Jharkhand</p>
          </div>
          <div className="flex items-center gap-x-2 mb-1">
            <Phone stroke="#ff033594" className="h-5 w-5" />
            <p>+91-654xxxxx58</p>
          </div>
          <div className="flex items-center gap-x-[10px]">
            <Mail stroke="#ff033594" className="h-5 w-5 relative left-[2px]" />
            <p>fitnesshub@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="w-full flex items-start flex-col gap-3 px-6 py-5">
        <h3 className="capitalise text-[#ff0336] font-bold text-left tracking-wide text-xl">
          Follow us on
        </h3>
        <div className="flex items-center gap-5 ">
          <div className="bg-gray-200 group rounded-full p-2">
            <Instagram
              color="#5f5f5f"
              strokeWidth={2}
              className="w-6 h-6 group-hover:stroke-[#ce032c] transition-all ease-in duration-150"
            />
          </div>
          <div className="bg-gray-200 group rounded-full p-2">
            <Facebook
              fill="#5f5f5f"
              stroke="1px"
              color="#5f5f5f"
              className="w-6 h-6 group-hover:fill-[#ce032c] transition-all ease-in duration-150"
            />
          </div>
          <div className="bg-gray-200 group rounded-full p-2">
            <Twitter
              fill="#5f5f5f"
              stroke="1px"
              color="#5f5f5f"
              className="w-6 h-6 group-hover:fill-[#ce032c] transition-all ease-in duration-150"
            />
          </div>
          <div className="bg-gray-200 group rounded-full p-2">
            <Youtube
              color="#5f5f5f"
              strokeWidth={2}
              className="w-6 h-6 group-hover:stroke-[#ce032c] transition-all ease-in duration-150"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeComp;
