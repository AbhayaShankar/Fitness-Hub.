import { DescriptionComp, HeadingComp } from "@/lib/Common";
import Image from "next/image";

interface ClassesCardProps {
  className: string;
  timings: string;
  item: number;
  src: string;
}

const ClassesCard = ({ item, className, timings, src }: ClassesCardProps) => {
  return (
    <div
      className={` relative overflow-hidden cursor-pointer classCard
    ${item === 0 && "col-start-1 row-end-2 row-start-1 col-span-2"}
    ${item === 1 && "col-start-3 row-end-2 row-start-1 col-span-1"}
    ${item === 2 && "col-start-4 row-end-2 row-start-1 col-span-1"}
    ${item === 3 && "row-end-3 row-start-2 col-start-1 col-span-1"}
    ${item === 4 && "row-end-3 row-start-2 col-start-2 col-span-1"}
    ${item === 5 && "row-end-3 row-start-2 col-start-3 col-span-2"}
    `}
    >
      <Image
        src={src}
        alt="class-card"
        width={400}
        height={400}
        className="h-full object-cover w-full object-top grayscale  transition-all delay-75 duration-300 ease-in hover:grayscale-0 hover:scale-110 rounded-sm"
      />
      <div className="absolute bottom-5 left-5 text-white">
        <HeadingComp title={className} advStyle="capitalize text-[32px]" />
        <DescriptionComp
          desc={timings}
          advStyle="bg-[#ce032c] px-2 py-1 dark:text-white text-[13px] font-light dark:font-light"
        />
      </div>
    </div>
  );
};

export default ClassesCard;
