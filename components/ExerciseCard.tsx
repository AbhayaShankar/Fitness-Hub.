import Image from "next/image";
import React from "react";
import { Badge } from "./ui/badge";
import Link from "next/link";
import ExercisesList from "../exercises.json";
import { LinkRoute } from "@/lib/utils";

export interface Safety_Check_Item {
  icon: string;
  safety: string;
}

export interface Intstructions_Item {
  step: number;
  instr: string;
}

export interface Relevant_Exercise_Item {
  force_type: string;
  name: string;
  shortDesc: string;
  rel_imgUrl: string;
}

export interface ExerciseCardProps {
  name: string;
  desc: string;
  imageUrl: string;
}
export interface ExerciseDescProps {
  difficulty: string;
  name: string;
  desc: string;
  muscle_group: string;
  equipments: Array<string>;
  mechanics: string;
  force_type: string;
  sec_muscle_group: Array<string>;
  imageUrl: string;
  overview: string;
  safety_check: Safety_Check_Item[];
  instructions: Intstructions_Item[];
  relevant_exercise: Relevant_Exercise_Item[];
}

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
        {ExercisesList.exercises.map((exer) => (
          <ExerciseCard
            key={exer.id}
            imageUrl={exer.ImageUrl}
            name={exer.name}
            desc={exer.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default ExerciseCard;
