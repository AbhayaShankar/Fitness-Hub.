import { Montserrat } from "next/font/google";
import StagesCard from "./StagesCard";
import { cn } from "@/lib/utils";
import { Goal } from "lucide-react";
import { STAGES_CARD } from "@/constants";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const StagesGrid = () => {
  return (
    <div className={cn("flex justify-center items-center", font.className)}>
      <div className="flex flex-col lg:grid grid-cols-4 grid-rows-3 gap-10 p-4 lg:p-16">
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
