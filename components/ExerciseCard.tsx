import Image from "next/image";
import React from "react";
import { Badge } from "./ui/badge";
import Link from "next/link";

const ExerciseCard = () => {
  return (
    <Link href={"/exercise/back-squats"} className="">
      {/* Slanted Button - Tilt */}
      {/* <div className="-skew-x-[25deg] bg-red-500 w-fit py-2 px-4 m-8">
        <h1 className="skew-x-[20deg]">Slanted Button</h1>
      </div> */}

      <div className="w-80">
        <Image
          alt="back-squats"
          src={"/assets/gym/back-squats.jpeg"}
          height={400}
          width={400}
          className="h-48 w-80 object-cover object-center rounded-t-lg"
        />
        <div className="bg-[#21212125] dark:bg-[#fcfcfc22]  rounded-b-lg bg-clip-padding backdrop-filter dark:backdrop-blur-sm backdrop-blur-2xl dark:bg-opacity-10 bg-opacity-60 p-4">
          <h1 className="capitalize text-lg tracking-wide font-semibold">
            Back Squats
          </h1>
          <p className="text-xs font-medium text-muted-foreground/100">
            Strength-building exercise for legs, back, and core
          </p>
          <div className="flex justify-end cursor-pointer mt-1">
            <Badge>Read More</Badge>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const ExerciseGrid = () => {
  return (
    <div className="flex justify-center p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto ">
        <ExerciseCard />
        <ExerciseCard />
        <ExerciseCard />
        <ExerciseCard />
      </div>
    </div>
  );
};

export default ExerciseCard;
