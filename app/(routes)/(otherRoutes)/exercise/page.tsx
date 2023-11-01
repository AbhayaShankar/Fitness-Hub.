import ExerciseCard from "@/components/ExerciseCard";
import React from "react";

const CoursePage = () => {
  return (
    <div>
      <h1 className="absolute top-[260px] left-[44%] text-[30px] tracking-wide font-semibold capitalize text-white dark:text-white">
        Exercises
      </h1>
      <ExerciseCard />
    </div>
  );
};

export default CoursePage;
