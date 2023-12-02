"use client";

import React from "react";
import GymRatCard, { GymRatsProps } from "./GymRatCard";

interface GymRatsList {
  gymrats: {
    gymData: GymRatsProps[];
  };
}

const GymRats: React.FC<GymRatsList> = ({ gymrats }) => {
  return (
    <div className="flex items-start flex-wrap justify-center gap-5 gap-y-14 py-9 px-20 w-full flex-col lg:flex-row m-auto ">
      {gymrats.gymData.map((item) => (
        <GymRatCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default GymRats;
