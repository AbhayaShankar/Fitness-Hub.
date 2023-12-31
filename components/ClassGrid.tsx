import { DescriptionComp, HeadingComp } from "@/lib/Common";
import ClassesCard from "./ClassesCard";
import TitleBg from "./TitleBg";
import { ALL_CLASSES } from "@/constants";
import { cn } from "@/lib/utils";

const ClassGrid = () => {
  return (
    <div className={cn("flex flex-col space-y-4 pt-16 items-center")}>
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
        {ALL_CLASSES.map((item) => (
          <ClassesCard
            item={item.id}
            key={item.id}
            className={item.name}
            timings={item.timing}
            src={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ClassGrid;
