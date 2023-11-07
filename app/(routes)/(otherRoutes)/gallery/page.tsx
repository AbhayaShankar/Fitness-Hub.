import GalleryGrid from "@/components/GalleryGrid";
import { ALL_CLASSES } from "@/constants";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Gallery - Fitness Hub",
  description: "Galleria",
};

const font = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const GalleryPage = () => {
  return (
    <div className={cn("", font.className)}>
      <h1 className="absolute top-[260px] left-[44%] text-[30px] tracking-wide font-semibold capitalize text-white dark:text-white">
        Gallery
      </h1>
      <GalleryGrid />

      {/* Our workspace gallery */}
      <div className="flex items-center flex-col justify-center">
        <p className="text-center">To be edited...!!!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-5">
          {ALL_CLASSES.map((item) => (
            <Image
              src={item.imageUrl}
              alt={item.name}
              width={400}
              height={400}
              key={item.id}
              className="w-[350px] h-[400px] object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
