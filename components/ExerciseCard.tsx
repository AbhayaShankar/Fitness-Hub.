"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { LinkRoute } from "@/lib/utils";
import { Button } from "./ui/button";
import {
  ExerciseCardProps,
  ExerciseDescProps,
} from "@/app/(routes)/(otherRoutes)/exercise/page";

const ExerciseCard = ({ ...props }: ExerciseCardProps) => {
  return (
    <Link href={LinkRoute(props.name)} className="">
      {/* Slanted Button - Tilt */}
      {/* <div className="-skew-x-[25deg] bg-red-500 w-fit py-2 px-4 m-8">
        <h1 className="skew-x-[20deg]">Slanted Button</h1>
      </div> */}

      <div className="w-80">
        <Image
          alt={props.name}
          src={`/assets/gym/${props.imageUrl}`}
          height={400}
          width={400}
          className="h-48 w-80 object-cover object-center rounded-t-lg"
        />
        <div className="bg-[#21212125] dark:bg-[#fcfcfc22]  rounded-b-lg bg-clip-padding backdrop-filter dark:backdrop-blur-sm backdrop-blur-2xl dark:bg-opacity-10 bg-opacity-60 p-4">
          <h1 className="capitalize text-lg tracking-wide font-semibold">
            {props.name}
          </h1>
          <p className="text-xs font-medium text-muted-foreground/100">
            {props.desc}
          </p>
          <div className="flex justify-end cursor-pointer mt-2">
            <Badge>Read More</Badge>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const ExerciseGrid = ({ ExercisesList }: any) => {
  const [displayLimit, setDisplayLimit] = useState(9);
  const [currentIndex, setCurrentIndex] = useState(9);

  const [filterCategory, setFilterCategory] = useState(ExercisesList.exercises);

  const filterExercise = (selectedCategory: any) => {
    const filteredExercisesList = ExercisesList.exercises.filter((item: any) =>
      item.category.includes(selectedCategory)
    );
    setFilterCategory(filteredExercisesList);
    setDisplayLimit(9);
    setCurrentIndex(9);
  };

  const showMore = () => {
    setDisplayLimit(displayLimit + 9);
    setCurrentIndex(currentIndex + 9);
  };

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <div className="flex flex-row flex-wrap items-center gap-5 my-5">
        <Button
          onClick={() => {
            setFilterCategory(ExercisesList.exercises);
            setCurrentIndex(0);
            setDisplayLimit(9);
          }}
          variant={"outline"}
          key="all"
        >
          All
        </Button>
        {Array.from(
          new Set(
            ExercisesList.exercises.flatMap(
              (exercise: ExerciseDescProps) => exercise.category
            )
          )
        ).map((category) => (
          <div key={String(category)}>
            <Button
              className="capitalize"
              onClick={() => filterExercise(category)}
              variant={"outline"}
            >
              {String(category)}
            </Button>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto ">
        {filterCategory.slice(0, displayLimit).map((exer: any) => (
          <ExerciseCard
            key={exer.id}
            imageUrl={exer.ImageUrl}
            name={exer.name}
            desc={exer.desc}
          />
        ))}
      </div>
      {displayLimit < filterCategory.length && (
        <Button className="mt-5" onClick={showMore}>
          Show More
        </Button>
      )}
    </div>
  );
};

export default ExerciseCard;
