import StagesCard from "./StagesCard";
import { cn } from "@/lib/utils";
import { Goal } from "lucide-react";
import { STAGES_CARD } from "@/constants";
import TitleBg from "./TitleBg";

const StagesGrid = () => {
  return (
    <div className={cn("flex flex-col justify-center items-center pt-10")}>
      <TitleBg title="Our Principles" />
      <div className="flex flex-col lg:grid grid-cols-7 grid-rows-5 gap-10 p-4 lg:p-16">
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

export default StagesGrid;
