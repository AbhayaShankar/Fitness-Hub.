import Image from "next/image";

interface ClassesCardProps {
  item: number;
}

const ClassesCard = ({ item }: ClassesCardProps) => {
  const colSpanClass =
    item === 0 ? "col-span-2" : item >= 1 && item <= 5 ? "col-span-1" : "";

  return (
    <div className={colSpanClass}>
      <Image
        src={"/assets/xyz.jpg"}
        alt="class-card"
        width={400}
        height={400}
        className="object-cover"
      />
    </div>
  );
};

export default ClassesCard;
