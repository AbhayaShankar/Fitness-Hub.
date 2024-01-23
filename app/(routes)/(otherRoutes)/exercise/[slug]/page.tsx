import { Metadata } from "next";
import ExercisesList from "../../../../../exercises.json";
import { SingleExercise } from "@/components/SingleExercisePage";

export const metadata: Metadata = {
  title: "Single Muscle", // TODO: Dynamic title
  description: "Know how to perform with proper instructions.",
};

export type VideoReferenceType = {
  title: string;
  desc: string;
  link: string;
  imgsrc: string;
  category: string;
};

const SingleExercisePage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const slugCheck = slug.split("-").join(" ");

  const correctExercise = ExercisesList.exercises.filter(
    ({ name }) => name === slugCheck
  );

  if (correctExercise.length === 1) {
    const finalExercise = correctExercise[0];

    return (
      <SingleExercise
        category={finalExercise.category}
        name={finalExercise.name}
        difficulty={finalExercise.difficulty}
        muscle_group={finalExercise.muscle_group}
        equipments={finalExercise.equipment_req}
        sec_muscle_group={finalExercise.secondary_muscle_group}
        force_type={finalExercise.force_type}
        mechanics={finalExercise.mechanics}
        imageUrl={finalExercise.ImageUrl}
        overview={finalExercise.overview}
        safety_check={finalExercise.safety_check}
        instructions={finalExercise.instructions}
        relevant_exercise={finalExercise.relevant_exercise}
      />
    );
  } else {
    //TODO: Design this as well
    return <div> Not found</div>;
  }
};

export default SingleExercisePage;
