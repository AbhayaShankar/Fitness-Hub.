import Image from "next/image";

interface ClassesCardProps {
  item: number;
}

const ClassesCard = ({ item }: ClassesCardProps) => {
  return (
    <div
      className={` relative overflow-hidden
    ${item === 0 && "col-start-1 row-end-2 row-start-1 col-span-2"}
    ${item === 1 && "col-start-3 row-end-2 row-start-1 col-span-1"}
    ${item === 2 && "col-start-4 row-end-2 row-start-1 col-span-1"}
    ${item === 3 && "row-end-3 row-start-2 col-start-1 col-span-1"}
    ${item === 4 && "row-end-3 row-start-2 col-start-2 col-span-1"}
    ${item === 5 && "row-end-3 row-start-2 col-start-3 col-span-2"}
    `}
    >
      <Image
        src={"/assets/abc.jpg"}
        alt="class-card"
        width={400}
        height={400}
        className="h-full object-cover w-full object-center"
      />
    </div>
  );
};

export default ClassesCard;
