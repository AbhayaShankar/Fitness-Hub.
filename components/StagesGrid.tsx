import { Montserrat } from "next/font/google";
import StagesCard from "./StagesCard";
import { cn } from "@/lib/utils";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const StagesGrid = () => {
  return (
    <div className={cn("flex justify-center items-center", font.className)}>
      <div className="grid grid-cols-3 grid-rows-2 mx-auto gap-10">
        <StagesCard />
        <StagesCard />
        <StagesCard />
        <StagesCard />
        <StagesCard />
        <StagesCard />
      </div>
    </div>
  );
};

export default StagesGrid;
