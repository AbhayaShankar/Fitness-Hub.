import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import React from "react";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const AboutPage = () => {
  return (
    <div>
      <h1
        className={cn(
          "absolute top-[75%] left-[44%] text-[28px] font-semibold capitalize text-white dark:text-white",
          font.className
        )}
      >
        About
      </h1>
      <p>This is about Page</p>
    </div>
  );
};

export default AboutPage;
