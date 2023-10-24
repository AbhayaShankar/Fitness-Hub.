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
      className={`flex flex-col items-center gap-5 border-[1.5px] border-gray-700 rounded-3xl justify-center relative group overflow-hidden cursor-pointer
      ${props.item === 0 && "col-start-1 row-end-2 row-start-1 col-span-1"}
      ${props.item === 1 && "col-start-2 row-end-3 row-start-1 col-span-2"}
      ${props.item === 2 && "col-start-4 row-end-2 row-start-1 col-span-1"}
      ${props.item === 3 && "row-end-4 row-start-2 col-start-1 col-span-1"}
      ${props.item === 4 && "row-end-4 row-start-3 col-start-2 col-span-2"}
      ${props.item === 5 && "row-end-4 row-start-2 col-start-4 col-span-1"}
      `}
    >
      <div className="z-10 relative flex flex-col gap-[16px] justify-center items-center p-4">
        <props.icon
          strokeWidth={1.5}
          className="w-16 h-16 stroke-current group-hover:text-[#ce032c]"
        />
        <h1 className="text-xl lg:text-3xl uppercase font-semibold">
          {props.title}
        </h1>
        <p className="text-sm font-medium text-black text-center dark:text-white/70">
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
