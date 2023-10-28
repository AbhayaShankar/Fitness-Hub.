import React from "react";
import TitleBg from "./TitleBg";
import { DescriptionComp, HeadingComp } from "@/lib/Common";
import Image from "next/image";
import { STAGES_CARD } from "@/constants";
import StagesCard from "./StagesCard";

const AboutContent = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        <div className="flex flex-col justify-start items-start gap-5 pt-10">
          <TitleBg title="What we Believe in" />
          <HeadingComp
            title="We Believe in 6 Steps Rule"
            advStyle="capitalize text-[28px]"
          />
          <DescriptionComp
            desc={`The 6-step rule for achieving your dream physique is a comprehensive fitness guideline. <br/><br/><strong>Step 1 :</strong> It begins with setting clear goals and tracking your progress. <br /><strong>Step 2 :</strong> Emphasizes hard work and dedication, <br/><strong>Step 3 :</strong> Underscores the importance of unwavering determination. <br/> <strong>Step 4 :</strong> Highlights the role of proper nutrition and balanced macronutrients. <br /><strong>Step 5 :</strong>  Consistency is key, as mentioned in , as it drives success in your fitness journey.<br /><strong>Step 6 :</strong> Reminds you to never give up and stay focused on your initial motivation.<br/><br/> By following these steps, you can build muscle, get fit, and create a healthier, stronger version of yourself.`}
            advStyle="text-left text-muted-foreground max-w-[750px]"
          />
        </div>
        <Image
          src={"/assets/rules.jpg"}
          alt="rules"
          width={400}
          height={400}
          className="w-[320px] h-[320px] object-cover object-center rounded-full mt-2 mb-10 lg:mt-20"
        />
      </div>

      <div className="flex flex-col lg:grid grid-cols-7 grid-rows-5 gap-10 p-4 lg:p-16 ">
        {STAGES_CARD.map((item) => (
          <StagesCard
            key={item.id}
            icon={item.icon}
            item={item.id}
            title={item.title}
            bgImgUrl={item.bgImgUrl}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutContent;
