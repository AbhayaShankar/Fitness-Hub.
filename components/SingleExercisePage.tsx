"use client";

import { ExerciseDescProps } from "@/app/(routes)/(otherRoutes)/exercise/page";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowLeftCircleIcon } from "lucide-react";
import Image from "next/image";
import {
  HeadingCols1,
  HeadingCols3,
  Instructions,
  Overview,
  RelatedExercise,
  SafetyChecks,
} from "./SingleExerciseUtils";
import VideoReference from "./VideoReference";
import VideoReferenceList from "../video-references.json";
import { useEffect, useState } from "react";

export const SingleExercise = ({ ...props }: ExerciseDescProps) => {
  const [muscleCategory, setMuscleCategory] = useState("chest");

  useEffect(() => {
    setMuscleCategory(props.category[0]);
  }, [muscleCategory]);

  return (
    <div className=" p-5 space-y-5">
      <Link href={"/exercise"}>
        <Button variant={"custom1"} className="capitalize">
          <ArrowLeftCircleIcon className="mr-2" />
          Back to Exercises page
        </Button>
      </Link>
      <h1 className="text-center text-2xl lg:text-5xl font-extrabold tracking-wide lg:tracking-wider uppercase mb-5">
        {props.name}
      </h1>
      <div className="flex flex-col justify-center lg:grid grid-cols-4 gap-8 lg:gap-12 p-3 lg:px-16 lg:py-10 ">
        {/* Details - grid grid-cols-2 w-400 gap-5 */}
        <div className="col-span-2">
          <div
            className="flex flex-col justify-center lg:grid grid-cols-2 
          gap-1 lg:gap-5"
          >
            <h3 className="text-[#ce032c] font-semibold">
              Target Muscle Group :{" "}
            </h3>
            <p className="capitalize">{props.muscle_group}</p>
            <h3 className="text-[#ce032c] font-semibold">
              Equipment Required :{" "}
            </h3>
            {props.equipments.length > 0 ? (
              <p className="capitalize">
                {props.equipments.map((equip) => (
                  <span key={equip} className="mr-2">
                    {equip}
                  </span>
                ))}
              </p>
            ) : (
              <p className="capitalize">Nothing</p>
            )}
            <h3 className="text-[#ce032c] font-semibold">Mechanics :</h3>
            <p className="capitalize"> {props.mechanics}</p>
            <h3 className="text-[#ce032c] font-semibold">Force Type :</h3>
            <p className="capitalize"> {props.force_type}</p>
            <h3 className="text-[#ce032c] font-semibold">
              Secondary Muscle Group :{" "}
            </h3>
            <p className="capitalize mr-1">
              {props.sec_muscle_group.map((muscle) => (
                <span className="mr-2" key={muscle}>
                  {muscle},
                </span>
              ))}
            </p>
          </div>
        </div>
        {/* Image */}
        <div className="col-span-2">
          <Image
            alt={props.name}
            src={`/assets/gym/${props.imageUrl}`}
            height={400}
            width={400}
            className="h-96 w-full h- object-cover object-center rounded-xl"
          />
        </div>
        <div className="col-span-3">
          <HeadingCols3 title={`${props.name} Overview`} />
          <Overview desc={props.overview} />
        </div>
        <div className="col-span-1">
          <HeadingCols1 title=" Safety Checks ✅" />
          <div className="mt-5">
            {props.safety_check.map((safety) => (
              <SafetyChecks
                key={safety.safety}
                icon={safety.icon}
                safety={safety.safety}
              />
            ))}
          </div>
        </div>
        <div className="col-span-3">
          <HeadingCols3 title={`${props.name} Instructions`} />
          <ol className="text-black/80 dark:text-white/80 text-justify list-decimal leading-7">
            {props.instructions.map((instr) => (
              <Instructions key={instr.step} instruction={instr.instr} />
            ))}
          </ol>
        </div>
        <div className="col-span-1">
          <HeadingCols1 title="Relevant Exercises" />
          <div className="my-5 flex flex-col gap-y-2 ">
            {props.relevant_exercise.map((rel_exer) => (
              <RelatedExercise
                key={rel_exer.name}
                imageUrl={rel_exer.rel_imgUrl}
                rel_name={rel_exer.name}
                shortDesc={rel_exer.shortDesc}
                force_type={rel_exer.force_type}
              />
            ))}
          </div>
        </div>
        <div className="col-span-4">
          <h3 className="text-center capitalize font-semibold text-lg lg:text-3xl mb-5">
            Video Resources
          </h3>
          <VideoReference
            muscleCategory={muscleCategory}
            VideoReferenceList={VideoReferenceList.videos}
          />
        </div>
      </div>
    </div>
  );
};
