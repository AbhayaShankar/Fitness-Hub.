import SingleClass from "@/components/SingleClass";
import { ALL_CLASSES } from "@/constants";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Classes - Fitness Hub",
  description: "Varieties of Classes",
};

const ClassesPage = () => {
  return (
    <div>
      <h1 className="absolute top-[260px] left-[44%] text-[30px] tracking-wide font-semibold capitalize text-white dark:text-white">
        Classes
      </h1>
      <div className="py-6 lg:py-20 lg:px-2 flex w-full mx-auto flex-col md:flex-row justify-center items-center flex-wrap gap-10 ">
        {ALL_CLASSES.map((item) => (
          <SingleClass
            name={item.name}
            imageUrl={item.imageUrl}
            instructor={item.instructor}
            timing={item.timing}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ClassesPage;
