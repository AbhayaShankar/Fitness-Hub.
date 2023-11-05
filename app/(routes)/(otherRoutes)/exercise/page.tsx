import Exercises from "@/components/Exercises";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exercises - Fitness Hub",
  description: "Know how to perform with proper instructions.",
};

const ExercisePage = async () => {
  return (
    <div>
      <Exercises />
    </div>
  );
};

export default ExercisePage;
