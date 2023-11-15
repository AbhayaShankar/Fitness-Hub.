import { DescriptionComp, HeadingComp } from "@/lib/Common";
import { ExerciseGrid } from "./ExerciseCard";
import ExercisesList from "../exercises.json";

const Exercises = () => {
  return (
    <div className="pb-4 lg:pb-10">
      <h1 className="absolute top-[260px] left-[44%] text-[30px] tracking-wide font-semibold capitalize text-white dark:text-white">
        Exercises
      </h1>
      <div className="flex items-center flex-col gap-5 p-2 lg:p-5 lg:mt-10">
        <HeadingComp
          title="Best Online Resource on all Exercises."
          advStyle="capitalize text-xl lg:text-[32px]"
        />
        <DescriptionComp
          desc="Unlock your fitness potential with the ultimate online resource for all exercises, offering expert guidance, workout plans, and a supportive community!"
          advStyle="max-w-[750px]"
        />
      </div>
      <ExerciseGrid ExercisesList={ExercisesList} />
    </div>
  );
};

export default Exercises;
