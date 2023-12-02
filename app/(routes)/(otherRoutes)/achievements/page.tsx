import GymRats from "@/components/GymRats";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Achievements - Fitness Hub",
  description: "Showcasing greatness and Awards..",
};

import gymrats from "@/gymrats.json";

const AchievementsPage = () => {
  return (
    <div className="p-4 lg:p-8">
      <h1 className="absolute top-[260px] left-[44%] text-[30px] tracking-wide font-semibold capitalize text-white dark:text-white">
        Achievements
      </h1>
      <GymRats gymrats={gymrats} />
    </div>
  );
};

export default AchievementsPage;
