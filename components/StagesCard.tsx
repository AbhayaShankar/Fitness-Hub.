import React from "react";

interface StagesCardProps {
  item: number;
  title: string;
  desc: string;
  bgImgUrl: string;
  icon: React.ElementType;
}

const StagesCard = (props: StagesCardProps) => {
  return (
    <div
      key={props.item}
      className={`flex flex-col min-h-[250px] items-center gap-5 border-[1.5px] border-stone-300 dark:border-muted rounded-3xl justify-center relative group overflow-hidden cursor-pointer
      ${props.item === 0 && "col-start-1 row-end-3 row-start-1 col-span-2"}
      ${props.item === 1 && "col-start-3 row-end-4 row-start-1 col-span-3"}
      ${props.item === 2 && "col-start-6 row-end-3 row-start-1 col-span-2"}
      ${props.item === 3 && "row-end-6 row-start-3 col-start-1 col-span-2"}
      ${props.item === 4 && "row-end-6 row-start-4 col-start-3 col-span-3"}
      ${props.item === 5 && "row-end-6 row-start-3 col-start-6 col-span-2"}
      `}
    >
      <div className="z-10 relative flex flex-col gap-[16px] justify-center items-center px-3 py-6">
        <props.icon
          strokeWidth={1.5}
          className="w-16 h-16 stroke-current group-hover:text-[#ce032c]"
        />
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] uppercase font-semibold">
          {props.title}
        </h1>
        <p className="text-sm font-semibold dark:font-medium text-black/80 text-center dark:text-white/70 tracking-wide">
          {props.desc}
        </p>
      </div>
      <div
        className={`w-full h-full absolute top-0 left-0 z-0 bg-no-repeat bg-cover bg-center opacity-0 group-hover:opacity-40 group-hover:dark:opacity-20`}
        style={{ backgroundImage: `url(${props.bgImgUrl})` }}
      ></div>
    </div>
  );
};

export default StagesCard;
