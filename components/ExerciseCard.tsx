import Image from "next/image";
import React from "react";

const ExerciseCard = () => {
  return (
    <div className="">
      {/* Slanted Button - Tilt */}
      {/* <div className="-skew-x-[25deg] bg-red-500 w-fit py-2 px-4 m-8">
        <h1 className="skew-x-[20deg]">Slanted Button</h1>
      </div> */}
      <div>
        <Image
          alt="back-squats"
          src={"/assets/gym/back-squats.jpeg"}
          height={400}
          width={400}
          className="h-48 w-80 object-cover object-center"
        />
      </div>
    </div>
  );
};

export const ExerciseGrid = () => {
  return (
    <div className="flex justify-center p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto ">
        <ExerciseCard />
        <ExerciseCard />
        <ExerciseCard />
        <ExerciseCard />
      </div>
    </div>
  );
};

export default ExerciseCard;
