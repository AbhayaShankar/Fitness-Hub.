"use client";

import { DescriptionComp, HeadingComp } from "@/lib/Common";
import React, { useEffect, useState } from "react";
import { ExerciseGrid } from "./ExerciseCard";
import path from "path";

const Exercises = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null);

  const absolutePath = path.join(process.cwd(), "exercises.json");
  console.log(absolutePath);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch("/api/exercises");
  //         if (response.ok) {
  //           const jsonData = await response.json();
  //           setData(jsonData);
  //           console.log("LIST_OF_EXERCISES", data);
  //         } else {
  //           setError("Error fetching data");
  //         }
  //       } catch (error) {
  //         setError("Error fetching data");
  //       }
  //     };

  //     fetchData();
  //   }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/exercises.json");
        const jsonData = await response.json();
        setData(jsonData);
        console.log(data);
      } catch (error) {
        console.error("Error fetching JSON data", error);
      }
    }

    fetchData();
  }, []);

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

export default Exercises;
