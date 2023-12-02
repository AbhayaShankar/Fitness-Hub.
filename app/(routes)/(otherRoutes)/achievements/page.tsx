import GymRats from "@/components/GymRats";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Achievements - Fitness Hub",
  description: "Showcasing greatness and Awards..",
};

const AchievementsPage = () => {
  return (
    <div className="">
      <GymRats />
    </div>
  );
};

export default AchievementsPage;
