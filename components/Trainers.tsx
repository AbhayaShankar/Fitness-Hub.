import React from "react";
import TrainerCard from "./TrainerCard";
import { TrainersList } from "@/constants";
import TitleBg from "./TitleBg";
import { DescriptionComp, HeadingComp } from "@/lib/Common";

const Trainers = () => {
  return (
    <div className="flex flex-col space-y-4 items-center">
      <TitleBg title={"Gym Trainers"} isDark={true} />
      <HeadingComp title="team of expert coaches" />
      <DescriptionComp
        desc="Expert team of coaches helps you succeed in any goal, personalized
      guidance and motivation provided!"
      />
      <div className="flex items-center justify-center flex-wrap gap-10 ">
        {TrainersList.map((item) => (
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
