import SingleClass from "@/components/SingleClass";
import { AllClasses } from "@/constants";
import React from "react";

const ClassesPage = () => {
  return (
    <div>
      <h1 className="absolute top-[260px] left-[44%] text-[30px] tracking-wide font-semibold capitalize text-white dark:text-white">
        Classes
      </h1>
      <div className="py-6 lg:py-20 flex w-full mx-auto flex-col md:flex-row justify-center items-center flex-wrap gap-10 ">
        {AllClasses.map((item) => (
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
