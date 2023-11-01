import { Button } from "@/components/ui/button";
import { ArrowLeftCircleIcon } from "lucide-react";
import { Metadata, NextPage } from "next";
import Head from "next/head";
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
    <div className="mt-5">
      <Head>
        <title>{slug}</title>
      </Head>
      <Link href={"/exercise"}>
        <Button variant={"custom1"} className="capitalize">
          <ArrowLeftCircleIcon className="mr-2" />
          Back to Exercises page
        </Button>
      </Link>
      <h1>{updatedMetadata.title}</h1>
      <div>SingleExercisePage</div>
    </div>
  );
};

export default SingleExercisePage;
