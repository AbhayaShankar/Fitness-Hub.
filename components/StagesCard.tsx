import { Goal } from "lucide-react";
import React from "react";

const StagesCard = () => {
  return (
    <div className="w-[330px] h-[330px] flex flex-col items-center gap-5 border-[1.5px] border-gray-700 rounded-3xl justify-center relative group overflow-hidden">
      <div className="z-10 relative flex flex-col gap-[10px] justify-center items-center p-4">
        <Goal
          strokeWidth={1.25}
          className="w-16 h-16 stroke-current group-hover:text-[#ce032c]"
        />
        <h1 className="text-xl lg:text-3xl uppercase font-semibold">Goal</h1>
        <p className="text-sm font-medium">
          Unlock your fitness potential with clear goals. Define your path,
          track your progress, and embrace the journey to a healthier, stronger
          you.
        </p>
      </div>
      <div className="w-full h-full absolute top-0 left-0 z-0 bg-[url('/assets/goal.webp')] bg-no-repeat bg-cover bg-center  opacity-0 group-hover:opacity-50  group-hover:dark:opacity-20"></div>
    </div>
  );
};

export default StagesCard;
