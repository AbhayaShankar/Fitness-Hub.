import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Gallery - Fitness Hub",
  description: "Galleria",
};

const GalleryPage = () => {
  return (
    <div>
      <h1 className="absolute top-[260px] left-[44%] text-[30px] tracking-wide font-semibold capitalize text-white dark:text-white">
        Gallery
      </h1>
    </div>
  );
};

export default GalleryPage;
