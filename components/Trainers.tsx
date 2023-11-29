import React from "react";
import TrainerCard from "./TrainerCard";
import { TRAINERS_LIST } from "@/constants";
import TitleBg from "./TitleBg";
import { DescriptionComp, HeadingComp } from "@/lib/Common";
import { cn } from "@/lib/utils";

const Trainers = () => {
  return (
    <div className={cn("flex flex-col space-y-4 items-center")}>
      <TitleBg title={"Gym Trainers"} />
      <HeadingComp
        title="team of expert coaches"
        advStyle="capitalize text-[32px]"
      />
      <DescriptionComp
        desc="Expert team of coaches will help you succeed in any goal, personalized
      guidance and motivation provided!"
        advStyle="max-w-[750px]"
      />
      <div className="flex items-center justify-center flex-wrap gap-10 ">
        {TRAINERS_LIST.map((item) => (
          <TrainerCard
            key={item.id}
            name={item.name}
            type={item.type}
            src={item.src}
          />
        ))}
      </div>
    </div>
  );
};

export default Trainers;
