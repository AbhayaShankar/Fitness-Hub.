import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import React from "react";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

interface TitleBgProps {
  title: string;
}

const TitleBg = ({ title }: TitleBgProps) => {
  return (
    <div className="relative flex items-center justify-center">
      <Image
        alt="title-bg"
        src={"/assets/titlebg.svg"}
        width={250}
        height={25}
      />
      <p
        className={cn(
          "absolute font-extrabold text-white dark:text-black z-10",
          font.className
        )}
      >
        {title}
      </p>
    </div>
  );
};

export default TitleBg;
