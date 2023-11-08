import Exercises from "@/components/Exercises";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exercises - Fitness Hub",
  description: "Know how to perform with proper instructions.",
};

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
  category: string;
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

export interface ExercisesListProps {
  exercises: ExerciseDescProps[];
}

const ExercisePage = async () => {
  return (
    <div>
      <Exercises />
    </div>
  );
};

export default ExercisePage;
