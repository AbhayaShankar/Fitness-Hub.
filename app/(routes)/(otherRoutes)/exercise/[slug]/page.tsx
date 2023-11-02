import {
  HeadingCols1,
  HeadingCols3,
  Instructions,
  Overview,
  RelatedExercise,
  SafetyChecks,
} from "@/components/SingleExercise";
import { Button } from "@/components/ui/button";
import { ArrowLeftCircleIcon } from "lucide-react";
import { Metadata, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// type Props = {
//   params: { slug: string };
// };

export const metadata: Metadata = {
  title: "Single Muscle", // To change
  description: "Know how to perform with proper instructions.",
};

const SingleExercisePage: NextPage<{ params: { slug: string } }> = ({
  params,
}) => {
  const { slug } = params;

  const updatedMetadata = {
    ...metadata,
    title: `${slug}`,
  };

  return (
    <div className=" p-5 space-y-5">
      <Head>
        <title>{slug}</title>
      </Head>
      <Link href={"/exercise"}>
        <Button variant={"custom1"} className="capitalize">
          <ArrowLeftCircleIcon className="mr-2" />
          Back to Exercises page
        </Button>
      </Link>
      <h1 className="text-center text-2xl lg:text-5xl font-extrabold tracking-wide lg:tracking-wider uppercase mb-5">
        Back Squats
      </h1>
      <div className="flex flex-col justify-center lg:grid grid-cols-4 gap-8 lg:gap-12 p-3 lg:px-16 lg:py-10 ">
        {/* Details - grid grid-cols-2 w-400 gap-5 */}
        <div className="col-span-3">
          <div
            className="flex flex-col justify-center lg:grid grid-cols-2 
          gap-1 lg:gap-5"
          >
            <h3 className="text-[#ce032c] font-semibold">
              Target Muscle Group :{" "}
            </h3>
            <p>Quads</p>
            <h3 className="text-[#ce032c] font-semibold">
              Equipment Required :{" "}
            </h3>
            <p>Barbell</p>
            <h3 className="text-[#ce032c] font-semibold">Mechanics :</h3>
            <p> Compound</p>
            <h3 className="text-[#ce032c] font-semibold">Force Type :</h3>
            <p> Push</p>
            <h3 className="text-[#ce032c] font-semibold">
              Secondary Muscle Group :{" "}
            </h3>
            <p>Calves, Glutes, Hamstrings, Lower back</p>
          </div>
        </div>
        {/* Image */}
        <div className="col-span-1">
          <Image
            alt="back-squats"
            src={"/assets/gym/back-squats.jpeg"}
            height={400}
            width={400}
            className="h-96 w-full h- object-cover object-center rounded-xl"
          />
        </div>
        <div className="col-span-3">
          <HeadingCols3 title={"Back Squat Overview"} />
          <Overview
            desc={`The squat is the king of all exercises, working over 256 muscles in one movement! From bodybuilders to powerlifters to competitive athletes, the squat is a staple compound exercise and should be in every workout plan.<br /><br />
            For powerlifters, it is known as one of the “big three” lifts which includes the squat, deadlift, and bench press. For athletes, having an explosive squat is a good indicator for on field/court performance. And for bodybuilders, the squat is a compound exercise that targets nearly every muscle of your lower body and core. <br /> <br />
            The squat directly targets the muscles of the quads, but also involves the hamstrings, glutes, back, and core as well as muscles of the shoulders and arms to a lesser degree. <br /> <br /> Not everyone is built to perform the traditional barbell back squat and it can result in some pain for certain individuals. Over the years, several squatting variations have been developed to help everyone be able to train this critical movement pattern safely.`}
          />
        </div>
        <div className="col-span-1">
          <HeadingCols1 title=" Safety Checks ✅" />
          <div className="mt-5">
            <SafetyChecks />
            <SafetyChecks />
            <SafetyChecks />
          </div>
        </div>
        <div className="col-span-3">
          <HeadingCols3 title={"Back Squat Instructions"} />
          <ol
            // type="1"
            className="text-black/80 dark:text-white/80 text-justify list-decimal leading-7"
          >
            <Instructions />
            <Instructions />
            <Instructions />
            <Instructions />
            <Instructions />
            <Instructions />
          </ol>
        </div>
        <div className="col-span-1">
          <HeadingCols1 title="Relevant Exercises" />
          <div className="my-5 flex flex-col gap-y-2">
            <RelatedExercise />
            <RelatedExercise />
            <RelatedExercise />
          </div>
        </div>
        <div className="col-span-4">
          <h3 className="text-center capitalize font-semibold text-lg lg:text-3xl mb-5">
            Video Resources
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SingleExercisePage;
