import AboutContent from "@/components/AboutContent";
import React from "react";
import { Metadata } from "next";
// import { AboutBanner } from "@/components/AboutBanner";

export const metadata: Metadata = {
  title: "About - Fitness Hub",
  description: "About fitnessHub and Idealogy",
};

const AboutPage = () => {
  return (
    <div className="p-4 lg:p-8">
      <h1 className="absolute top-[260px] left-[44%] text-[30px] tracking-wide font-semibold capitalize text-white dark:text-white">
        About
      </h1>
      {/* <AboutBanner /> */}
      <AboutContent />
    </div>
  );
};

export default AboutPage;
