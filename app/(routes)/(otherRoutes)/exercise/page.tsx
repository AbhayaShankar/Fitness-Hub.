import ExerciseCard, { ExerciseGrid } from "@/components/ExerciseCard";
import { DescriptionComp, HeadingComp } from "@/lib/Common";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Exercises - Fitness Hub",
  description: "Know how to perform with proper instructions.",
};

const CoursePage = () => {
  return (
    <div>
      <h1 className="absolute top-[260px] left-[44%] text-[30px] tracking-wide font-semibold capitalize text-white dark:text-white">
        Exercises
      </h1>
      <div className="flex items-center flex-col gap-5 lg:mt-10">
        <HeadingComp
          title="Best Online Resource on all Exercises."
          advStyle="capitalize text-[32px]"
        />
        <DescriptionComp
          desc="Unlock your fitness potential with the ultimate online resource for all exercises, offering expert guidance, workout plans, and a supportive community!"
          advStyle="max-w-[750px]"
        />
      </div>
      <ExerciseGrid />
    </div>
  );
};

export default CoursePage;
