"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const SubscribeComp = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={cn("z-50", font.className)}>
      <h1 className="uppercase text-lg lg:text-2xl font-semibold text-center mt-10">
        Subscribe to Fitness
      </h1>
      <div className="relative">
        <Image
          src={"/assets/subscribe-cover.jpg"}
          alt="subscribe-cover-img"
          width={500}
          height={500}
          className="w-full h-[380px] object-cover p-2 rounded-2xl"
        />
        <div className="w-[320px] absolute bottom-5 left-8 bg-[#3333337b] rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 p-4">
          <h1 className=" text-2xl font-semibold text-white">
            Struggle is Crucial & Essential to progress
          </h1>
          <p className="text-sm dark:text-muted-foreground text-white/50">
            Abhaya Shankar, Personal Trainer
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubscribeComp;
