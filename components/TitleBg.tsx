"use client";

import { cn } from "@/lib/utils";
import { Montserrat, Poppins } from "next/font/google";
import Image from "next/image";
import React from "react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

interface TitleBgProps {
  title: string;
  isDark: boolean;
}

const TitleBg = ({ title, isDark }: TitleBgProps) => {
  return (
    <div className="relative flex items-center justify-center">
      {isDark ? (
        <Image
          alt="title-bg"
          src={"/assets/titlebg-primary.svg"}
          width={250}
          height={25}
        />
      ) : (
        <Image
          alt="title-bg"
          src={"/assets/titlebg-secondary.svg"}
          width={250}
          height={25}
        />
      )}
      <p
        className={cn(
          `absolute font-bold ${
            isDark ? "text-black/60" : "text-white"
          } $ z-10 uppercase tracking-[0.2px]`,
          font.className
        )}
      >
        {title}
      </p>
    </div>
  );
};

export default TitleBg;