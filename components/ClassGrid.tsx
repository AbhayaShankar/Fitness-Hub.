import { DescriptionComp, HeadingComp } from "@/lib/Common";
import ClassesCard from "./ClassesCard";
import TitleBg from "./TitleBg";

const ClassGrid = () => {
  return (
    <div className="flex flex-col space-y-4 pt-16 items-center">
      <TitleBg title={"Featured Class"} />
      <HeadingComp
        title="Best Guidance on variety of Classes"
        advStyle="capitalize text-[32px]"
      />
      <DescriptionComp
        desc="Join our elite coaching team and achieve your goals with tailored guidance and unwavering motivation. Your success is our priority!"
        advStyle="max-w-[750px]"
      />

      <div className="flex flex-col lg:grid grid-cols-4 grid-rows-2 gap-5 p-6 lg:px-28 pb-20 pt-8 w-full h-full lg:h-[50rem]">
        <ClassesCard
          item={0}
          className="calisthenics"
          timings="Monday, Wednesday, Friday : 10:00 AM - 1:00 PM"
          src="/assets/calisthenics.jpg"
        />
        <ClassesCard
          item={1}
          className="Yoga"
          timings="Tuesday, Thursday : 8:00 AM - 10:00 AM"
          src="/assets/yoga.jpg"
        />
        <ClassesCard
          item={2}
          className="Fitness"
          timings="Weekdays : 4:00 PM - 8:30 PM"
          src="/assets/fitness.jpg"
        />
        <ClassesCard
          item={3}
          className="Arm wrestling"
          timings="Monday, Friday : 6:00 PM - 9:00 PM"
          src="/assets/armwrestle.jpg"
        />
        <ClassesCard
          item={4}
          className="Cycling"
          timings="Tuesday, Thursday : 9:00 AM - 9:00 PM"
          src="/assets/cycling.jpg"
        />
        <ClassesCard
          item={5}
          className="Powerlifting"
          timings="Weekdays : 9:00 AM - 8:00 PM"
          src="/assets/powerlifting.jpg"
        />
      </div>
    </div>
  );
};

export default ClassGrid;
