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
          <h3 className="text-center capitalize font-semibold text-lg lg:text-3xl mb-5">
            Back Squat Overview
          </h3>
          <p className="text-black/80 dark:text-white/80 text-justify">
            The squat is the king of all exercises, working over 256 muscles in
            one movement! From bodybuilders to powerlifters to competitive
            athletes, the squat is a staple compound exercise and should be in
            every workout plan.
            <br />
            <br />
            For powerlifters, it is known as one of the “big three” lifts which
            includes the squat, deadlift, and bench press. For athletes, having
            an explosive squat is a good indicator for on field/court
            performance. And for bodybuilders, the squat is a compound exercise
            that targets nearly every muscle of your lower body and core.
            <br />
            <br />
            The squat directly targets the muscles of the quads, but also
            involves the hamstrings, glutes, back, and core as well as muscles
            of the shoulders and arms to a lesser degree.
            <br />
            <br />
            Not everyone is built to perform the traditional barbell back squat
            and it can result in some pain for certain individuals. Over the
            years, several squatting variations have been developed to help
            everyone be able to train this critical movement pattern safely.
          </p>
        </div>
        <div className="col-span-1">
          <h3 className="text-center capitalize font-semibold text-lg lg:text-3xl">
            Safety Checks ✅
          </h3>
          <div className="mt-5">
            <div className="flex items-center gap-3 mt-3 p-2 hover:bg-accent-foreground/[0.075] dark:hover:bg-accent/40 rounded-lg">
              <Image
                src={"/assets/gym/safety-back.png"}
                alt="safety-icons"
                width={200}
                height={200}
                className="h-10 w-10 p-1 border-[1px] border-muted-foreground/50 rounded-lg"
              />
              <h3 className="font-semibold text-sm lg:text-sm">
                Never Round your Back.
              </h3>
            </div>
            <div className="flex items-center gap-3 mt-3 p-2 hover:bg-accent-foreground/[0.075] dark:hover:bg-accent/40 rounded-lg">
              <Image
                src={"/assets/gym/safety-knees.png"}
                alt="safety-icons"
                width={200}
                height={200}
                className="h-10 w-10 p-1 border-[1px] border-muted-foreground/50 rounded-lg"
              />
              <h3 className="font-semibold text-sm lg:text-sm">
                Dont bend your knees too forward.
              </h3>
            </div>
            <div className="flex items-center gap-3 mt-3 p-2 hover:bg-accent-foreground/[0.075] dark:hover:bg-accent/40 rounded-lg">
              <Image
                src={"/assets/gym/safety-squat.png"}
                alt="safety-icons"
                width={200}
                height={200}
                className="h-10 w-10 p-1 border-[1px] border-muted-foreground/50 rounded-lg"
              />
              <h3 className="font-semibold text-sm lg:text-sm">
                Dont Squat too deep.
              </h3>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <h3 className="text-center capitalize font-semibold text-lg lg:text-3xl mb-5">
            Back Squat Instructions
          </h3>
          <ol
            // type="1"
            className="text-black/80 dark:text-white/80 text-justify list-decimal leading-7"
          >
            <li>
              Set up for the exercise by setting the barbell to just below
              shoulder height and loading the weight you want to use.
            </li>
            <li>
              Stand under the bar with your feet at about shoulder width apart.
            </li>
            <li>
              Position the bar so that it is resting on the muscles on the top
              of your back, not on the back of your neck. The bar should feel
              comfortable.
            </li>
            <li>
              You should now bend at the knees and straighten your back in
              preparation to take the weight off the rack.
            </li>
            <li>
              Keeping your back straight and eyes up, push up through the legs
              and take the weight off the rack.
            </li>
            <li>
              Keeping your eyes facing forward slowly lower your body down. Dont
              lean forward as you come down. Your buttocks should come out and
              drop straight down.
            </li>
            <li>
              Squat down until your thighs are parallel with the floor, and then
              slowly raise your body back up by pushing through your heels.
            </li>
            <li>
              Do not lock the knees out when you stand up, and then repeat the
              movement
            </li>
          </ol>
        </div>
        <div className="col-span-1">
          <h3 className="text-center capitalize font-semibold text-lg lg:text-3xl">
            Relevant Exercises
          </h3>
          <div className="my-5 flex flex-col gap-y-2">
            <div className="flex items-start gap-5 p-2 hover:bg-accent-foreground/[0.075] dark:hover:bg-accent/40 rounded-lg">
              <Image
                src={"/assets/gym/bench-press.jpg"}
                alt="relevant-exercise"
                width={400}
                height={400}
                className="h-20 w-20 p-1 border-[1px] border-muted-foreground/50 rounded-lg"
              />
              <div className="flex flex-col items-start">
                <h3 className="text-lg">Bench Press</h3>
                <p className="text-xs text-muted-foreground">
                  The Classic Bench Press
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5 p-2 hover:bg-accent-foreground/[0.075] dark:hover:bg-accent/40 rounded-lg">
              <Image
                src={"/assets/gym/bench-press.jpg"}
                alt="relevant-exercise"
                width={400}
                height={400}
                className="h-20 w-20 p-1 border-[1px] border-muted-foreground/50 rounded-lg"
              />
              <div className="flex flex-col items-start">
                <h3 className="text-lg">Bench Press</h3>
                <p className="text-xs text-muted-foreground">
                  The Classic Bench Press
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5 p-2 hover:bg-accent-foreground/[0.075] dark:hover:bg-accent/40 rounded-lg">
              <Image
                src={"/assets/gym/bench-press.jpg"}
                alt="relevant-exercise"
                width={400}
                height={400}
                className="h-20 w-20 p-1 border-[1px] border-muted-foreground/50 rounded-lg"
              />
              <div className="flex flex-col items-start">
                <h3 className="text-lg">Bench Press</h3>
                <p className="text-xs text-muted-foreground">
                  The Classic Bench Press
                </p>
              </div>
            </div>
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
