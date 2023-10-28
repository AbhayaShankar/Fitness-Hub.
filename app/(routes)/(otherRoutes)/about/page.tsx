import AboutContent from "@/components/AboutContent";
import AboutBanner from "@/components/AboutBanner";
import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-[url(/assets/bg/bg-2.jpg)] dark:bg-none p-4 lg:p-8">
      <h1 className="absolute top-[260px] left-[44%] text-[30px] tracking-wide font-semibold capitalize text-white dark:text-white">
        About
      </h1>
      <AboutBanner />
      <AboutContent />
    </div>
  );
};

export default AboutPage;
