import Image from "next/image";
import React from "react";

interface SafetyChecksProps {
  icon: string;
  safety: string;
}

interface RelatedExerciseProps {
  imageUrl: string;
  rel_name: string;
  shortDesc: string;
  force_type: string;
}

export const RelatedExercise = ({
  imageUrl,
  rel_name,
  shortDesc,
  force_type,
}: RelatedExerciseProps) => {
  return (
    <div className="flex items-start gap-5 p-2 hover:bg-accent-foreground/[0.075] dark:hover:bg-accent/40 rounded-lg">
      <Image
        src={`/assets/gym/${imageUrl}`}
        alt="relevant-exercise"
        width={400}
        height={400}
        className="h-20 w-20 p-1 border-[1px] border-muted-foreground/50 rounded-lg"
      />
      <div className="flex flex-col items-start">
        <h3 className="text-lg capitalize">{rel_name}</h3>
        <p className="text-xs text-muted-foreground capitalize">{shortDesc}</p>
      </div>
    </div>
  );
};

export const SafetyChecks = ({ icon, safety }: SafetyChecksProps) => {
  return (
    <div className="flex items-center gap-3 mt-3 p-2 hover:bg-accent-foreground/[0.075] dark:hover:bg-accent/40 rounded-lg">
      <Image
        src={`/assets/gym/${icon}`}
        alt="safety-icons"
        width={200}
        height={200}
        className="h-10 w-10 p-1 border-[1px] border-muted-foreground/50 rounded-lg"
      />
      <h3 className="font-semibold text-sm lg:text-sm">{safety}</h3>
    </div>
  );
};

interface InstructionProps {
  instruction: string;
}

export const Instructions = ({ instruction }: InstructionProps) => {
  return <li>{instruction}</li>;
};

interface OverviewProps {
  desc: string;
}

export const Overview = ({ desc }: OverviewProps) => {
  return (
    <p
      dangerouslySetInnerHTML={{ __html: desc }}
      className="text-black/80 dark:text-white/80 text-justify"
    ></p>
  );
};

interface HeadingCols3Props {
  title: string;
}

export const HeadingCols3 = ({ title }: HeadingCols3Props) => {
  return (
    <h3 className="text-center capitalize font-semibold text-lg lg:text-3xl mb-5">
      {title}
    </h3>
  );
};

interface HeadingCols1Props {
  title: string;
}

export const HeadingCols1 = ({ title }: HeadingCols1Props) => {
  return (
    <h3 className="text-center capitalize font-semibold text-lg lg:text-3xl">
      {title}
    </h3>
  );
};
