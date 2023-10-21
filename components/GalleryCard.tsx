import { DescriptionComp, HeadingComp } from "@/lib/Common";
import Image from "next/image";

interface GalleryCardProps {
  item: number;
  src: string;
}

const GalleryCard = ({ item, src }: GalleryCardProps) => {
  return (
    <div
      className={` relative overflow-hidden cursor-pointer
    ${item === 0 && "col-start-1 col-span-2 row-start-1 row-end-3 "}
    ${item === 1 && "col-start-3 row-start-1 row-end-2 col-span-2"}
    ${item === 2 && "col-start-1 row-start-3 row-end-4 col-span-1"}
    ${item === 3 && "col-start-2 row-start-3 row-end-4  col-span-1"}
    ${item === 4 && "col-start-3 row-start-2 row-end-4 col-span-2"}
    `}
    >
      <Image
        src={src}
        alt="class-card"
        width={400}
        height={400}
        className="h-full object-cover w-full object-top transition-all delay-75 duration-300 ease-in rounded-sm"
      />
    </div>
  );
};

export default GalleryCard;
